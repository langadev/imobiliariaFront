import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginFetch } from "../../assets/config/axios";

function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmSenha: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.senha !== formData.confirmSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await loginFetch.post(
        "/admin/create",
        JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          senha: formData.senha,
        })
      );

      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000); // Redireciona após 2s
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao cadastrar-se.");
    }
  };

  return (
    <div className="h-screen w-screen bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-5 w-[350px] h-auto rounded-md">
        {/* Título */}
        <h1 className="font-wallpoet text-center uppercase text-2xl mb-8">
          Inhambo <span className="text-blue-500">Imóveis</span>
        </h1>

        {/* Mensagens de Sucesso ou Erro */}
        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center text-sm mb-4">
            Registro bem-sucedido! Redirecionando...
          </p>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Introduza o seu nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmSenha"
              placeholder="Confirmar Senha"
              value={formData.confirmSenha}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Botão de Cadastro */}
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {success ? "Cadastrando..." : "Cadastrar-se"}
          </button>

          {/* Link para Login */}
          <p className="text-sm text-center">
            Tens conta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
