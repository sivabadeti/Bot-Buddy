import { Link } from "react-router-dom";
import { useState } from "react";

export function Mainpage() {
  const [userInput, setInput] = useState("");
  const [chat, setChat] = useState([]); 

  const handleinput = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return; 

    // ✅ Add user message to chat
    setChat((prev) => [...prev, { role: "user", text: userInput }]);

    try {
      const res = await fetch("https://bot-buddy-backend-u7nm.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        // ✅ Add bot response to chat
        setChat((prev) => [...prev, { role: "bot", text: data.message }]);

        // ✅ Clear input after sending
        setInput("");
      } else {
        console.log("something went wrong from frontend");
      }
    } catch (err) {
      console.log("Catch error in frontend");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black h-screen w-screen lg:flex lg:flex-row">
      {/* sidebar */}
      <div className=" hidden bg-[#111827] lg:flex lg:flex-col lg:gap-4 lg:h-full lg:w-[18%] lg:border lg:border-gray-700">
        <div className="lg:flex lg:flex-col lg:gap-8 lg:p-3 lg:mt-7">
          <Link
            to="/mainpage"
            className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-1 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold"
          >
            <i className="fa-solid fa-pen-to-square"></i> New chat
          </Link>
          <Link className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-2 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold">
            <i className="fa-solid fa-magnifying-glass"></i> Search chats
          </Link>
          <Link
            to="/about"
            className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-1 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold"
          >
            <i className="fa-solid fa-circle-info"></i> About
          </Link>
          <Link className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-2 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold">
            <i className="fa-solid fa-user"></i> Profile
          </Link>
        </div>

        <div className="lg:flex lg:flex-col lg:gap-8 lg:p-3 lg:mx-3 lg:mt-auto">
          <a
            href="mailto:sivabadeti2005@gmail.com"
            className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-2 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold"
          >
            <i className="fa-solid fa-phone"></i> contact
          </a>
          <Link
            to="/"
            className="lg:text-gray-400 lg:text-lg hover:lg:border lg:p-2 hover:lg:border-gray-100 lg:rounded-3xl lg:cursor-pointer lg:hover:scale-110 lg:transition-transform lg:duration-300 lg:w-40 lg:font-bold"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Link>
        </div>
      </div>

      <div className="lg:bg-gradient-to-r from-gray-900 via-gray-800 to-black h-screen lg:w-[82%] flex flex-col">
        {/* Top bar */}
        <div className="relative flex items-center h-16 lg:mt-4">
          <button className="lg:hidden text-gray-500 font-bold ml-4">
            <i className="fa-solid fa-bars"></i>
          </button>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold text-xl lg:text-2xl text-white">
            <span>Bo</span>
            <span className="text-[#52b788]">t-Bud</span>
            <span>dy</span>
          </h1>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col overflow-auto px-4 py-2">
          {chat.map((msg, index) => (
            <p
              key={index}
              className={`${
                msg.role === "user" ? "self-end bg-[#52b788]" : "self-start bg-white"
              } text-black font-bold p-2 w-fit rounded-2xl m-3`}
            >
              {msg.text}
            </p>
          ))}
        </div>

        {/* Input field */}
        <div className="h-16 flex justify-center items-center px-4">
          <form className="relative w-full max-w-[700px]" onSubmit={handleinput}>
            <input
              type="text"
              placeholder="🔍 Ask anything"
              className="w-full p-2 pr-20 border-2 border-gray-700 rounded-2xl bg-black text-white font-bold outline-none focus:bg-black focus:border-gray-700 transition-all duration-300"
              value={userInput}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#52b788] text-black px-4 py-2 rounded-2xl font-bold hover:bg-gray-600"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
