import React from "react";
import project1 from "../assets/project1.bmp";
import project2 from "../assets/project2.bmp";
import project3 from "../assets/project3.bmp";

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform that allows users to browse, add items to their cart, and make purchases. This project includes a secure user authentication system, a cart management system, and an order processing flow. It integrates with payment gateways to complete transactions and provides a seamless shopping experience.",
      features: ["User authentication", "Product management", "Order management", "Payment gateway integration"],
      challenges: ["Handling large product data", "Ensuring security for user data", "Optimizing performance with pagination"],
      technologies: ["Java", "Spring Boot", "MongoDB", "AWS", "Heroku"],
      githubLink: "https://github.com/yourusername/eCommerceApp",
      liveLink: "https://yourwebsite.com/eCommerceApp",
      image: project1
    },
    {
      name: "Weather Application",
      description: "A weather app that provides real-time weather data fetched from a third-party API. Users can search for weather information by city, and the app displays the current temperature, humidity, wind speed, and weather conditions. It also features a clean and responsive design for better user experience on both mobile and desktop devices.",
      features: ["Search by city", "Real-time weather updates", "Displays temperature, humidity, wind speed"],
      challenges: ["Working with third-party weather API", "Handling errors gracefully", "Responsive design for mobile devices"],
      technologies: ["Java", "Spring Boot", "Bootstrap"],
      githubLink: "https://github.com/yourusername/weatherApp",
      liveLink: "https://yourwebsite.com/weatherApp",
      image: project2
    },
    {
      name: "Personal Portfolio",
      description: "A responsive portfolio website that showcases the user's work, skills, and projects. It includes a blog section for sharing updates and a contact form for potential clients or employers. The site is designed with a modern and clean layout, offering an interactive and engaging experience across all device types.",
      features: ["Responsive design", "Blog section", "Contact form", "Project gallery"],
      challenges: ["Ensuring responsiveness across devices", "SEO optimization", "Integrating contact form with backend"],
      technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourwebsite.com",
      image: project3
    }
  ];

  return (
    <section id="projects" className="bg-[#FFD2D6] py-20">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col hover:shadow-lg hover:shadow-[#496C97] hover:scale-105" // Add hover shadow class here
            style={{ minHeight: "400px" }} // Ensures consistent height
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl text-[#213145] font-semibold mb-4">{project.name}</h3>
            <p className="text-[#213145] mb-4 text-sm line-clamp-4">{project.description}</p> {/* Truncate description */}
            <div className="text-sm text-[#213145] mb-4">
              <span className="font-semibold">Technologies:</span> {project.technologies.join(", ")}
            </div>
            <div className="flex justify-between text-[#213145] mt-auto">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#213145] hover:text-[#FFD2D6]"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#213145] hover:text-[#FFD2D6]"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Projects;
