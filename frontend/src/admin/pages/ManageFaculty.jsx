export default function AdminFaculty() {
  const faculty = [
    { name: "Rahul Verma", subject: "Maths" },
    { name: "Priya Nair", subject: "Science" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Manage Faculty</h2>

      {/* Add Teacher */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Add Faculty</h3>

        <input type="text" placeholder="Teacher Name" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Subject" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Add Teacher
        </button>
      </div>

      {/* Faculty List */}
      <div className="bg-white p-6 rounded-xl shadow">
        {faculty.map((t, i) => (
          <div key={i} className="p-4 border rounded-lg flex justify-between mb-3">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.subject}</p>
            </div>

            <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
