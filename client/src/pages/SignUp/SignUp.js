import "./SignUp.scss";

const SignUp = () => {
  return (
    <form className="SignUp">
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
