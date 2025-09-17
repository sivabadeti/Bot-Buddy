import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Newuser(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password,confirmpassword}),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert(data.message);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
          <span className="text-white">Crea</span>
          <span className="text-[#52b788]">te New Us</span>
          <span className="text-white">er</span>
      </h1>

      <div className="
          bg-[#1e293b] 
          h-auto 
          w-full sm:w-[400px] 
          rounded-xl shadow-2xl mt-10 
          flex flex-col justify-evenly p-6
      ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Create New username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#52b788] focus:ring-1 focus:ring-[#52b788]"
          />

          <input 
            type="password" 
            placeholder="Create password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#52b788] focus:ring-1 focus:ring-[#52b788]"
          />

          <input 
            type="password" 
            placeholder="Re-enter password"
            autoComplete="new-password"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#52b788] focus:ring-1 focus:ring-[#52b788]"
          />

          <button className="w-full p-3 rounded-md bg-[#52b788] text-black font-semibold border border-gray-600 hover:bg-[#40916c] transition duration-500 hover:scale-105">
              Sign up
          </button>
        </form>

        <Link to="/" className="text-white underline text-center cursor-pointer hover:text-blue-600 mt-4">
          Already have account
        </Link>
      </div>
    </div>
  )
}
