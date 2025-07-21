import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'React Weather App',
      description: 'A simple app that shows live weather data using API.',
      link: '#', // Replace with GitHub or live link
    },
    {
      title: 'Typing PDF to Word',
      description: 'Converted scanned PDF files into Word document with 100% accuracy.',
      link: '#',
    },
    {
      title: 'Product Landing Page',
      description: 'Created a responsive landing page using React and Tailwind CSS.',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Date: 21/7/2025</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">
            My name is Nighat Talib. I am a Front-End Developer passionate about creating beautiful,
            user-friendly websites using React. I also enjoy working on data entry and digital marketing projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">My Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-5 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;



