export default function AdminClasses() {
  const classes = [
    { name: "10A", strength: 45 },
    { name: "9B", strength: 40 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Manage Classes</h2>

      {/* Add Class */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Add New Class</h3>

        <input type="text" placeholder="Class Name (e.g., 10A)" className="p-3 border rounded-lg w-full" />
        <input type="number" placeholder="Strength" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Add Class
        </button>
      </div>

      {/* Class List */}
      <div className="bg-white p-6 rounded-xl shadow">
        {classes.map((c, i) => (
          <div key={i} className="p-4 border rounded-lg flex justify-between mb-3">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-600">Strength: {c.strength}</p>
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
