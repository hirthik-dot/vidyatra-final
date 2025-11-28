export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Students</p>
          <h3 className="text-3xl font-bold text-blue-700">1200</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Teachers</p>
          <h3 className="text-3xl font-bold text-blue-700">82</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Classes</p>
          <h3 className="text-3xl font-bold text-blue-700">45</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Pending Approvals</p>
          <h3 className="text-3xl font-bold text-blue-700">9</h3>
        </div>
      </div>

      {/* Recent Logs */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700">
          Recent System Activities
        </h3>

        <ul className="mt-4 space-y-3">
          <li className="p-3 border rounded-lg">• New teacher registered: Mr. Manoj</li>
          <li className="p-3 border rounded-lg">• Class timetable updated for 10th grade</li>
          <li className="p-3 border rounded-lg">• Fee records synced successfully</li>
        </ul>
      </div>
    </div>
  );
}
