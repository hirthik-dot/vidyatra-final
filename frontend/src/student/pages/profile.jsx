export default function StudentProfile() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Profile</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <input type="text" placeholder="Full Name" className="p-3 border rounded-lg w-full" />
        <input type="email" placeholder="Email" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Class" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Save Details
        </button>
      </div>
    </div>
  );
}
