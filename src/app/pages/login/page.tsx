export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-gray-200"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }