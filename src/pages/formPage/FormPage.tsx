import FormForm from "./FormForm";

const FormPage = () => {
  return (
    <main className=" grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center">
      <div></div>
      <FormForm className="w-10/12 col-span-2 md:w-8/12 2xl:w-7/12  justify-self-center" />
    </main>
  );
};

export default FormPage;
