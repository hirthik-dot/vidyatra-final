export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Student Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-600">Attendance</p>
          <h3 className="text-3xl font-bold text-blue-700">92%</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-600">Assignments Pending</p>
          <h3 className="text-3xl font-bold text-blue-700">3</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-600">Upcoming Tests</p>
          <h3 className="text-3xl font-bold text-blue-700">2</h3>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white sm:p-6 p-4 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Announcements
        </h3>

        <ul className="space-y-3">
          <li className="p-3 border rounded-lg">• Science Fair on 12th December</li>
          <li className="p-3 border rounded-lg">• Unit Test schedule updated</li>
          <li className="p-3 border rounded-lg">• Submit Maths assignment before Friday</li>
        </ul>
      </div>
    </div>
  );
}
