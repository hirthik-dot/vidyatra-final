export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Admin Settings</h2>

      {/* Profile */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Update Profile</h3>

        <input type="text" placeholder="Full Name" className="p-3 border rounded-lg w-full" />
        <input type="email" placeholder="Email" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">Save</button>
      </div>

      {/* Password */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Change Password</h3>

        <input type="password" placeholder="Old Password" className="p-3 border rounded-lg w-full" />
        <input type="password" placeholder="New Password" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-red-600 text-white p-3 rounded-lg">Update Password</button>
      </div>
    </div>
  );
}
