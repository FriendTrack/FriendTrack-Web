import Form from "./Form";

const FormPage = () => {
  return (
    <div className="flex relative flex-col w-full h-full justify-center items-center">
      <h2 className="absolute left-20 top-10 text-3xl font-semibold justify-self-end">
        С кем вы сегодня общались?
      </h2>
      {/* <FormForm className="w-10/12 col-span-2 md:w-8/12 2xl:w-7/12  justify-self-center" /> */}
      <div className="justify-self-end w-1/3">
        <Form />
      </div>
    </div>
  );
};

export default FormPage;
