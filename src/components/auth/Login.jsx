import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault()

        const storedUser = JSON.parse(localStorage.getItem('user'))

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/dashboard')
        }else{
            alert('Invalid email or password')
        }
    }

  return (
    <div className="min-h-screen h-screen w-screen flex justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-auto h-auto lg:h-auto bg-gray-800 p-8 sm:p-10 md:p-12 shadow-2xl rounded-lg lg:rounded-2xl">
    <h2 className="text-3xl font-extrabold text-center text-white mb-6">Login</h2>
    <form onSubmit={loginHandler} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-lg font-medium text-gray-300">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
      >
        Login
      </button>
    </form>
    <div className="mt-6 text-center">
      <p className="text-gray-400">Don t have an account?</p>
      <a href="/signup" className="text-indigo-400 hover:text-indigo-600 font-medium underline">
        Sign Up
      </a>
    </div>
  </div>
</div>

  )
}

export default Login
