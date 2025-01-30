import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-[#6B8E23] text-center text-[#FFD700]">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-2">
        Email:{' '}
        <a
          href="mailto:m.prajapati2@mohawkcollege.ca"
          className="text-[#FFD700] hover:underline"
        >
          m.prajapati2@mohawkcollege.ca
        </a>
      </p>
      <p className="text-lg">
        Contact No.:{' '}
        <a
          href="tel:3658834656"
          className="text-[#FFD700] hover:underline"
        >
          Meet Prajapati (365) 883-4656
        </a>
      </p>
    </section>
  );
};

export default Contact;
