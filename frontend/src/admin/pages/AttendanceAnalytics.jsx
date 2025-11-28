export default function AdminAttendance() {
  const attendance = [
    { class: "10A", present: 42, absent: 3 },
    { class: "9A", present: 38, absent: 7 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Attendance Reports</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Class</th>
              <th className="p-3">Present</th>
              <th className="p-3">Absent</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((a, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{a.class}</td>
                <td className="p-3 text-green-600">{a.present}</td>
                <td className="p-3 text-red-600">{a.absent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
