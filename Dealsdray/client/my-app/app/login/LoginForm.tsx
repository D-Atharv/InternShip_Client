export default function LoginForm() {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-teal-400 text-3xl font-extrabold mb-6 text-center">Welcome Back!</h2>
        <form>
          {/* Username Input */}
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-300">Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
            />
          </label>
  
          {/* Password Input */}
          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-300">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
            />
          </label>
  
          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                className="h-4 w-4 text-teal-500 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-teal-400"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a
              href="#"
              className="text-sm text-teal-400 hover:text-teal-300 transition"
            >
              Forgot Password?
            </a>
          </div>
  
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
  
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/20"></div>
          <span className="text-sm text-gray-400 px-4">or</span>
          <div className="flex-grow h-px bg-white/20"></div>
        </div>

  
        {/* Create Account Link */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Dont have an account?{" "}
          <a
            href="#"
            className="text-teal-400 hover:text-teal-300 font-medium transition"
          >
            Create an account
          </a>
        </p>
      </div>
    );
  }
  