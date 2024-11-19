import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-[#FFD2D6] text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-700">Contact Me</h2>
      <p className="text-lg mb-2">
        Email:{" "}
        <a
          href="mailto:m.prajapati2@mohawkcollege.ca"
          className="text-blue-500 hover:underline"
        >
          m.prajapati2@mohawkcollege.ca
        </a>
      </p>
      <p className="text-lg">
        Contact No.:{" "}
        <a
          href="tel:3658834656"
          className="text-blue-500 hover:underline"
        >
          Meet Prajapati (365) 883-4656
        </a>
      </p>

    </section>
  );
};

export default Contact;
