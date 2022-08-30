import { useState } from "react";
import sendMail from "./Mail";
const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevForm) => {
      return { ...prevForm, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail(formData).then();
  };

  return (
    <div className="md:w-1/2 bg-primaryLight p-8">
      <form onSubmit={handleSubmit} className="flex relative flex-col gap-8">
        <div className="flex gap-4 justify-center">
          <input
            onChange={handleChange}
            className="w-1/2 bg-primaryDark text-xs p-2"
            name="username"
            placeholder="Enter your name"
            value={formData.username || ""}
          />
          <input
            type="tel"
            onChange={handleChange}
            className="w-1/2 bg-primaryDark text-xs p-2"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone || ""}
          />
        </div>
        <div className="flex gap-4 justify-center">
          <input
            type="email"
            required
            onChange={handleChange}
            className="w-1/2 bg-primaryDark text-xs p-2"
            name="email"
            placeholder="Enter your Email"
            value={formData.email || ""}
          />
          <input
            onChange={handleChange}
            className="w-1/2 bg-primaryDark text-xs p-2"
            name="subject"
            placeholder="Enter a subject"
            value={formData.subject || ""}
          />
        </div>
        <div>
          <textarea
            required
            name="message"
            onChange={handleChange}
            className="bg-primaryDark w-full text-xs h-48 p-4"
            placeholder="Type your message"
            value={formData.message || ""}
          />
        </div>
        <button
          className="p-4 bg-surface w-1/3 rounded-xl mx-auto"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
