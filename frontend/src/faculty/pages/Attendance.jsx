export default function FacultyAttendance() {
  const classes = [
    { className: "10A", present: 42, absent: 3 },
    { className: "10B", present: 40, absent: 5 },
    { className: "9A", present: 38, absent: 7 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Attendance Manager</h2>

      {/* Class List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Today’s Attendance
        </h3>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Class</th>
              <th className="p-3">Present</th>
              <th className="p-3">Absent</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((cls, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{cls.className}</td>
                <td className="p-3 text-green-600 font-semibold">{cls.present}</td>
                <td className="p-3 text-red-600 font-semibold">{cls.absent}</td>
                <td className="p-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                    Mark Attendance
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manual Attendance Panel */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Manual Attendance Entry
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="p-3 border rounded-lg">
            <option>Select Class</option>
            <option>10A</option>
            <option>10B</option>
            <option>9A</option>
          </select>

          <input
            type="date"
            className="p-3 border rounded-lg"
            placeholder="Select Date"
          />

          <button className="col-span-1 sm:col-span-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
