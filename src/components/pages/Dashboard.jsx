import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated === "true" && storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-100 h-screen w-screen flex bg-gray-900 text-white">
      <aside className="w-64 bg-blue-800 flex flex-col items-start p-4 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-4">
          <span className="text-lg">Hello, {username ? username : "User"}</span>
          <br />
          <span className="text-lg">Profile</span>
          <br />
          <span className="text-lg">Settings</span>

          
        </div>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700 transition-all duration-200"
        >
          Logout
        </button>
      </aside>

      <div className="flex-grow bg-gray-800 p-6">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Welcome to your Dashboard
            </h2>
          </div>
        </header>

        <main className="flex justify-center items-center h-full">
          <h2 className="text-2xl font-semibold text-gray-300">
            Welcome, {username}
          </h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
