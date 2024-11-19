import React from "react";

const Skills = () => {
    // const skills = [
    //     // Programming Languages
    //     { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    //     { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    //     { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    //     { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    //     { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },

    //     // Frameworks & Libraries
    //     { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    //     { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    //     { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
    //     { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },

    //     // Tools & Platforms
    //     { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    //     { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    //     { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    //     { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    //     { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    // ];

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
        <section id="skills" className="bg-[#FFD2D6] bg-gray-50">
            <div className="grid gap-8 bg-[#FFD2D6] sm:grid-cols-2 px-6 py-20 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:shadow-[#496C97] transform hover:scale-105"
                    >
                        {/* <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-16 h-16 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3> */}
                        {skill.logoUrl ? (
                            <img
                                src={skill.logoUrl}
                                alt={skill.name}
                                className="w-16 h-16 mb-4"
                            />
                        ) : (
                            <i className={`${skill.iconClass} text-6xl text-gray-700 mb-4`}></i>
                        )}
                        <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Skills;
