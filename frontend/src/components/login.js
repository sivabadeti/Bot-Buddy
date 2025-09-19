import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");
    const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://bot-buddy-backend-u7nm.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert(data.message);
        navigate("/mainpage");
      } else {
        setError("Invalid Username or password");
      }
    } catch (err) {
      console.error(err);
    }
  };
    return (
    <div className="
          flex flex-col justify-center items-center
          h-screen w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black"
    >
        <h1 className="text-2xl font-bold text-center  sm:text-4xl">
             <span className="text-white">Welco</span>
             <span className="text-[#52b788]">me to BotBudd</span>
             <span className="text-white">y</span>
        </h1>

        <div className="bg-[#1e293b] h-[400px] w-auto rounded-xl shadow-2xl mx-10 my-10 flex flex-col justify-evenly sm:bg-[#1e293b] sm:h-[450px] sm:w-[400px] sm:rounded-xl sm:shadow-2xl sm:mt-10 sm:flex sm:flex-col sm:justify-evenly" >
          <form onSubmit={handleSubmit} className='flex flex-col justify-between h-[50%] p-3'>
            <input type="text" 
            placeholder="Enter username"
            autoComplete='username'
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#52b788] focus:ring-1 focus:ring-[#52b788]">

            </input>
         
            <input type="password" 
            placeholder="Enter password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#52b788] focus:ring-1 focus:ring-[#52b788]">
            </input>

            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
           <button className="w-full p-3 rounded-md bg-[#52b788] text-black font-semibold border border-gray-600 hover:bg-[#40916c] transition duration-500 hover:scale-105 transition-duration-500">
               Continue
           </button>
           </form>


            <Link to ="/Newuser" className="text-white underline text-center cursor-pointer hover:text-blue-600">Create new User ?</Link>
            <p className="text-white underline text-center cursor-pointer hover:text-blue-600">forgot password</p>
        </div>
    </div>
    )
}