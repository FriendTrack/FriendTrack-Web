import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold">Friends Tracker</h1>
      <div className="w-3/12">
        <RegistrationForm />
      </div>
    </main>
  );
};

export default RegistrationPage;
