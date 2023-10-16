import "./Login.css";
const Login = () => {
  return (
    <section className="contenedorPrincipal">
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="usuario" />
            <input type="password" placeholder="contraseña" />
            <button>Ingresar</button>           
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
