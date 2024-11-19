
function Login() {
    return (
      <div className='text-white container flex flex-col  items-center justify-center mx-auto my-auto' >
          <div className=" p-6 flex flex-col w-[600px] gap-y-3 bg-violet-950 rounded-lg ">
  
       
          <h1 className="text-[30px] text-justify font-bolder ">Login</h1>
          <form className="flex flex-col gap-y-3 w-[100%]" action="">
              <div className="flex flex-col gap-y-2">
                  <label className="text-[16px]" htmlFor="email">Email:</label>
                  <input className=" bg-neutral-100 p-2 rounded-md" type="email" name="email" id="email" />
              </div>
              <div className="flex flex-col gap-y-2">
                  <label className="text-[16px]" htmlFor="password">Password:</label>
                  <input className="p-2 rounded-md bg-neutral-100" type="password" name="password" id="password" />
              </div>
              <button className="bg-fuchsia-900 hover:bg-green-800 p-2 rounded-md">Login</button>
              <p>Ainda nao tem uma conta? Registar</p>
          </form>
          </div>
      </div>
    )
  }
  
  export default Login