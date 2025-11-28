export default function Students() {
  const students = [
    { name: "Aarav Sharma", class: "10A", roll: 12 },
    { name: "Kavya Singh", class: "10A", roll: 14 },
    { name: "Rohit Mehta", class: "9B", roll: 8 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Students List
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Roll No.</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.class}</td>
                <td className="p-3">{s.roll}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
