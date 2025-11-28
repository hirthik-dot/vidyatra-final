export default function AdminStudents() {
  const students = [
    { name: "Aarav Sharma", class: "10A", roll: 12 },
    { name: "Kavya Singh", class: "9A", roll: 8 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Manage Students</h2>

      {/* Add Student */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Add New Student</h3>

        <input type="text" placeholder="Name" className="p-3 border rounded-lg w-full" />
        <input type="number" placeholder="Roll Number" className="p-3 border rounded-lg w-full" />
        <select className="p-3 border rounded-lg w-full">
          <option>Select Class</option>
          <option>10A</option>
          <option>9A</option>
          <option>8B</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Add Student
        </button>
      </div>

      {/* Students List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Roll No.</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.class}</td>
                <td className="p-3">{s.roll}</td>
                <td className="p-3">
                  <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
