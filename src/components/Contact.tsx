import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imsnpeo",
        "template_h1f3r2g",
        form.current as any,
        "5ZADXoKCGewCi0JHe"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contact_list = [
    { logo: faEnvelope, text: "ianmlolwa2@gmail.com" },
    { logo: faWhatsapp, text: "+254769526109" },
    { logo: faLocationDot, text: "Kenya, Embu" },
  ];
  return (
    <section id="contact" className="py-10 text-white ">
      <div className="text-center mt-auto mx-auto">
        <h3 className="text-4xl font-semibold">
          Contact
          <span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Ge in touch</p>
        <div
          className="mt-10 flex md:flex-row gap-6 flex-col max-w-5xl bg-gray-800 p-6
        rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Your Message"
              required
            />
            <input
              type="submit"
              value="Send Message"
              className="btn-primary w-fit"
            />
          </form>
          <div className="flex flex-col gap-7">
            {contact_list.map((item, i) => (
              <div key={i} className="flex flex-wrap gap-4 w-fit items-center">
                <div
                  className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center
              justify-center text-white bg-cyan-600 rounded-full"
                >
                  <FontAwesomeIcon icon={item.logo as any} />
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
