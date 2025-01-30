import React from 'react';
import image from '../assets/img3.jpg';

function About() {
    return (
        <section className="bg-[#FAF3DD] py-20 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 mr-5">
                        <img
                            src={image} // Replace with your photo link
                            alt="Meet Prajapati"
                            className="rounded-full shadow-md border-4 border-[#B8860B]"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 text-[#2F2F2F] leading-relaxed">
                        <h3 className="font-bold text-lg text-[#B8860B]">About Me</h3>
                        <p className="mb-4">
                            Hello! I’m <span className="font-semibold text-[#556B2F]">Meet Prajapati</span>, a passionate and driven software developer with a focus on building efficient and scalable web applications. Currently, I am pursuing my <span className="font-semibold text-[#556B2F]">Computer System Technician - Software Support</span> program at Mohawk College, where I’m honing my skills in software development, problem-solving, and IT support.
                        </p>
                        <h3 className="font-bold text-lg text-[#B8860B]">My Journey</h3>
                        <p className="mb-4">
                            I started my coding journey by experimenting with different programming languages like JavaScript, Python, and Java. Over time, I became fascinated with front-end and back-end development, which led me to explore frameworks like React, Spring Boot, and Express.js. My aim is to create user-centric, high-performance applications that not only meet functional requirements but also deliver exceptional user experiences.
                        </p>
                        <h3 className="font-bold text-lg text-[#B8860B]">What I Do</h3>
                        <p className="mb-4">
                            I work with both front-end and back-end technologies to build full-stack applications. Whether it’s developing a smooth user interface with React, building robust back-end services with Spring Boot, or ensuring everything runs smoothly on the server side, I enjoy every aspect of the development process. I also have hands-on experience with databases like MongoDB and MySQL, cloud platforms like AWS, and DevOps tools like Docker.
                        </p>
                    </div>
                </div>
                <div className="w-full my-4 text-[#2F2F2F] leading-relaxed">
                    <h3 className="font-bold text-lg text-[#B8860B]">My Approach</h3>
                    <p className="mb-4">
                        I believe in writing clean, maintainable, and well-documented code. My goal is to build applications that are not only functional but also scalable and easy to maintain. Collaboration is key in software development, and I enjoy working as part of a team to solve complex problems and bring innovative solutions to life.
                    </p>
                    <h3 className="font-bold text-lg text-[#B8860B]">A Little Bit More About Me</h3>
                    <p className="mb-4">
                        When I’m not coding, you’ll find me exploring new technologies, reading about the latest trends in the tech industry, or working on personal projects. I’m always looking for opportunities to learn and grow, whether it’s through new challenges or by collaborating with like-minded individuals. I’m currently open to internship opportunities and projects where I can continue to learn and contribute to impactful solutions.
                    </p>
                    <h3 className="font-bold text-lg text-[#B8860B]">Skills & Technologies</h3>
                    <ul>
                        <li>Languages: JavaScript, Python, Java, C#, C++</li>
                        <li>Frameworks & Libraries: React, Spring Boot, Express.js, Tailwind CSS</li>
                        <li>Tools & Platforms: Git, Docker, AWS, MongoDB, MySQL</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;