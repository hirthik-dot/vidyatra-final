import { useState } from "react";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student") navigate("/student/dashboard");
    if (role === "faculty") navigate("/faculty/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center">
          VIDYATRA LOGIN
        </h1>

        <div className="grid grid-cols-3 gap-3">
          {["student", "faculty", "admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`p-2 rounded-lg font-semibold capitalize ${
                role === r
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-bold"
          >
            <LogIn className="inline-block w-5 h-5 mr-2" />
            Login as {role}
          </button>
        </form>
      </div>
    </div>
  );
}
