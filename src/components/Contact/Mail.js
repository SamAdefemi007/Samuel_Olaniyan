const sendMail = (formData) => {
  const values = {
    from_name: formData.username,
    to_name: "Samuel",
    message: formData.message,
    phone: formData.phone,
    subject: formData.subject,
  };
  window.emailjs.send("service_3r5evqt", "template_fs2buxf", values).then(
    (res) => alert("Message sent successfully"),
    (error) => {
      console.log("message sending failed");
    }
  );
};

export default sendMail;
