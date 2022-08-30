import Details from "./Details";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="Contact">
      <h1 className="md:text-3xl text-xl text-center mb-16">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-16 ">
        <Details />
        <Form />
      </div>
      <hr className="w-full border-2 border-surface my-16"></hr>
    </div>
  );
};

export default Contact;
