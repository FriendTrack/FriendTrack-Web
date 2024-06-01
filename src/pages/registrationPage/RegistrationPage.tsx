import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <main className=" h-screen w-screen grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <RegistrationForm className="w-10/12 md:w-8/12 lg:justify-self-center xl:justify-self-end" />
      <img
        src="/assets/registration.png"
        alt="..."
        className="self-end hidden lg:block"
      />
    </main>
  );
};

export default RegistrationPage;
