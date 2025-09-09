import React, {useState} from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
       
        setIsSignInForm(prev => !prev);
        
    }
  return (
    <div className="relative">
      <Header />

      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/PK-en-20250901-TRIFECTA-perspective_40592900-23d3-4f10-a1fc-1232184fc6cc_large.jpg"
        alt=""
      />

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/88f24fef-c3d3-4ed6-9396-d463c94c7f8a/f9d2e07b-10dd-4727-9398-6568b9f0e9c1/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-center ">
       

        {/* Login Box */}
        <div 
        className="relative z-10 w-[90%] max-w-md p-8 bg-black/75 rounded"
        >
          <h1 className="text-2xl font-bold text-white mb-6"> {isSignInForm? "Sign in": "Sign up"} </h1>

          {/* Email Input */}

          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />}
          {/* Email Input */}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />

         
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />

          {/* Sign In Button */}
          <button className="w-full bg-red-600 py-3 rounded text-white font-semibold hover:bg-red-700 transition">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center justify-between text-sm font-semibold text-gray-400 mt-4">
          <p className="text-gray-400 text-sm mt-4">
  {isSignInForm ? (
    <>
      New to Netflix?{" "}
      <span 
      onClick={toggleSignInForm}
      className="text-white hover:underline cursor-pointer">
        Sign up now.
      </span>
    </>
  ) : (
    <>
      Already a user?{" "}
      <span 
      onClick={toggleSignInForm}
      className="text-white hover:underline cursor-pointer">
        
        Sign in here.
      </span>
    </>
  )}
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
