import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6 lg:p-16">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
        About <span className="text-green-500">Bot-Buddy</span>
      </h1>

      <p className="text-lg lg:text-xl max-w-4xl text-center mb-6">
        Bot-Buddy is your intelligent chatbot assistant designed to make your life easier.
        Ask questions, get instant answers, and interact with a smart AI powered by modern
        web technologies. It's fast, reliable, and always learning!
      </p>

      <p className="text-lg lg:text-xl max-w-4xl text-center mb-6">
        Built with React.js for the frontend and Node.js + Express for the backend, Bot-Buddy
        provides a seamless chat experience. Whether you want to learn something new, get
        assistance with tasks, or just have fun, Bot-Buddy is here for you.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-6 mb-10">
        <span className="bg-gray-800 px-4 py-2 rounded-lg">React.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">Node.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">Express.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
        <span className="bg-gray-800 px-4 py-2 rounded-lg">AI / ML</span>
      </div>

      <Link
        to="/mainpage"
        className="mt-4 px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-all duration-300"
      >
        Back to Chat
      </Link>
    </div>
  );
}

