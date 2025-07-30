import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'React Portfolio',
      description: 'A personal portfolio website built using React and Tailwind CSS.',
      image: 'https://via.placeholder.com/400x200?text=React+Portfolio',
      github: 'https://github.com/nighat236/react-portfolio',
      demo: 'https://your-portfolio-demo-link.com',
    },
    {
      title: 'University List App',
      description: 'Displays a list of universities using React components.',
      image: 'https://via.placeholder.com/400x200?text=University+List',
      github: 'https://github.com/nighat236/university-list',
      demo: 'https://your-university-demo-link.com',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

