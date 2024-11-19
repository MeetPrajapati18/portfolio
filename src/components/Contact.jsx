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
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/meet-prajapati-3748bb2a5/"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet Prajapati
        </a>
      </p>
    </section>
  );
};

export default Contact;
