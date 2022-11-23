import "./login.css";

function Login() {
  return (
    <>
      <div className="login">
        <form action="">
          <p>User</p>
          <input type="e-mail" className="email" />
          <p>Password</p>
          <input type="password" className="password" />
          <input type="submit" className="enter" />
        </form>
      </div>
    </>
  );
}

export default Login;
