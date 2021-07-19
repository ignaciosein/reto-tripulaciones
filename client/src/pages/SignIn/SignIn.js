import "./SignIn.scss";

const SignIn = () => {
  return (
    <form className="SignIn">
      <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
