import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center">
      <LoginForm className="w-10/12 col-span-2 md:w-8/12 2xl:w-7/12  justify-self-center" />
      <img
        src="/assets/login.png"
        alt="..."
        className="self-end hidden lg:block"
      />
    </main>
  );
};

export default LoginPage;
