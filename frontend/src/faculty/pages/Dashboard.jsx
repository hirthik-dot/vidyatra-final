export default function FacultyDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Faculty Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Today's Classes</p>
          <h3 className="text-3xl font-bold text-blue-700">4</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Pending Assignments</p>
          <h3 className="text-3xl font-bold text-blue-700">12</h3>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-sm">Students</p>
          <h3 className="text-3xl font-bold text-blue-700">180</h3>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">
          Recent Announcements
        </h3>

        <ul className="space-y-3">
          <li className="p-3 border rounded-lg text-gray-700">
            • Exam Schedule updated for Class 10
          </li>
          <li className="p-3 border rounded-lg text-gray-700">
            • Parent-Teacher Meeting on Monday
          </li>
          <li className="p-3 border rounded-lg text-gray-700">
            • Syllabus completion report due tomorrow
          </li>
        </ul>
      </div>
    </div>
  );
}
