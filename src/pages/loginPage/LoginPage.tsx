import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className=" h-screen w-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <LoginForm className="w-10/12 md:w-8/12 lg:justify-self-center xl:justify-self-end" />
      <img
        src="/assets/login.png"
        alt="..."
        className="self-end hidden lg:block"
      />
    </main>
  );
};

export default LoginPage;
