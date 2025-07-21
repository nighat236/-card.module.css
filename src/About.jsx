import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-10 px-5 md:px-20 rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">About Me</h2>
      
      <p className="text-lg leading-relaxed text-center">
        My name is <span className="font-semibold text-purple-700">Nighat Talib</span>. I am a
        <span className="font-semibold text-green-600"> Front-End Developer</span> passionate about creating beautiful,
        user-friendly websites using <span className="text-blue-600">React</span>. I also enjoy working on
        <span className="text-pink-600"> data entry</span> and
        <span className="text-yellow-600"> digital marketing</span> projects.
      </p>
    </section>
  );
};

export default About;

