
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("registeredUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          MyDashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>

      </nav>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl shadow-lg">

          <h1 className="text-3xl font-bold">
            Welcome, {user?.name}! 👋
          </h1>

          <p className="mt-3 text-purple-100">
            Welcome to your personal dashboard.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="text-4xl mb-4">
              👤
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              My Profile
            </h2>

            <p className="text-gray-500 mt-2">
              View your personal information.
            </p>

          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="text-4xl mb-4">
              📧
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              Email Address
            </h2>

            <p className="text-gray-500 mt-2 break-all">
              {user?.email}
            </p>

          </div>

          {/* Status Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="text-4xl mb-4">
              🎓
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              Account Status
            </h2>

            <p className="text-green-500 font-semibold mt-2">
              Active
            </p>

          </div>

        </div>

        {/* Profile Information */}
        <div className="bg-white p-8 rounded-2xl shadow-md mt-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Profile Information
          </h2>

          <div className="space-y-5">

            {/* Name */}
            <div className="border-b pb-4">
              <p className="text-gray-500">
                Full Name
              </p>

              <p className="text-lg font-semibold text-gray-800">
                {user?.name}
              </p>
            </div>

            {/* Email */}
            <div className="border-b pb-4">
              <p className="text-gray-500">
                Email Address
              </p>

              <p className="text-lg font-semibold text-gray-800 break-all">
                {user?.email}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
