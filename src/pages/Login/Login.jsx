import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginFetch } from "../../assets/config/axios";
import { loginPending, loginSuccess, loginFailure } from "../../redux/reducers/UserSlice";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", senha: "" });
  const { email, senha } = credentials;

  const { error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Atualiza os valores do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      dispatch(loginFailure("Preencha todos os campos!"));
      return;
    }

    try {
      dispatch(loginPending());
      const response = await loginFetch.post(
        "/admin/auth",
        JSON.stringify({ email, senha })
      );

      if (!response.data) {
        dispatch(loginFailure("Credenciais inválidas."));
        return;
      }

      dispatch(loginSuccess(response.data.user));
      localStorage.setItem("token", response.data.token);
      loginFetch.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.response?.status === 400
          ? "Credenciais inválidas."
          : "Erro no servidor.";
      dispatch(loginFailure(errorMessage));
    }
  };

  return (
    <div className="h-screen w-screen bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-5 w-[350px] rounded-md shadow-md">
        {/* Título */}
        <h1 className="font-wallpoet text-center uppercase text-2xl mb-8">
          Inhambo <span className="text-blue-500">Imóveis</span>
        </h1>

        {/* Mensagem de Erro */}
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        {/* Formulário */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          {/* Campo de Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label htmlFor="senha" className="sr-only">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={handleInputChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          {/* Link para Registrar */}
          <p className="text-sm text-center">
            Não tens conta?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Cadastrar-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
