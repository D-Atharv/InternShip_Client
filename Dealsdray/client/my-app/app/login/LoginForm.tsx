export default function LoginForm() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-yellow-400 text-2xl font-bold mb-4 text-center">Login Page</h2>
        <form>
          <label className="block mb-2">
            <span className="text-sm">User Name</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm">Password</span>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 mt-1"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  