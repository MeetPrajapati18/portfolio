import React from "react";

const Skills = () => {
    const skills = [
        // Programming Languages
        { name: "JavaScript", iconClass: "devicon-javascript-plain" },
        { name: "Python", iconClass: "devicon-python-plain" },
        { name: "Java", iconClass: "devicon-java-plain" },
        { name: "C#", iconClass: "devicon-csharp-plain" },
        { name: "C++", iconClass: "devicon-cplusplus-plain" },
        { name: "C", iconClass: "devicon-c-plain" },

        // Frameworks & Libraries
        { name: ".NET", iconClass: "devicon-dot-net-plain" },
        { name: "React", iconClass: "devicon-react-original" },
        { name: "Spring Boot", iconClass: "devicon-spring-plain" },
        { name: "Express.js", iconClass: "devicon-express-original" },
        { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
        { name: "Postman", iconClass: "devicon-postman-plain" },
        { name: "Intellij", iconClass: "devicon-intellij-plain" },
        { name: "Visual Studio Code", iconClass: "devicon-vscode-plain" },
        { name: "Visual Studio", iconClass: "devicon-visualstudio-plain" },

        // Platforms & Tools
        { name: "Git", iconClass: "devicon-git-plain" },
        { name: "GitHub", iconClass: "devicon-github-plain" },
        { name: "Docker", iconClass: "devicon-docker-plain" },
        { name: "AWS", iconClass: "devicon-amazonwebservices-plain" },
        { name: "Vercel", iconClass: "devicon-vercel-plain" },
        { name: "Heroku", iconClass: "devicon-heroku-plain" },

        // Databases
        { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
        { name: "MySQL", iconClass: "devicon-mysql-plain" },
    ];

    return (
        <section id="skills" className="bg-[#FAF3DD] py-20 px-6">
            <div className="container mx-auto">
                {/* <h2 className="text-3xl font-bold text-[#FFD700] text-center mb-10">Skills & Technologies</h2> */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#F8E7A2] shadow-md p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:shadow-gold-500 transform hover:scale-105"
                        >
                            <i className={`${skill.iconClass} text-6xl text-[#4A640D] mb-4`}></i>
                            <h3 className="text-lg font-semibold text-[#4A640D]">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;