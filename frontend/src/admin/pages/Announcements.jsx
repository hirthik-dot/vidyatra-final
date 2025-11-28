export default function AdminAnnouncements() {
  const notices = [
    "Science Fair on 12th December",
    "Holiday on 25th December",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Announcements</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Create Announcement</h3>

        <textarea
          className="p-3 border rounded-lg w-full"
          rows="4"
          placeholder="Type notice here..."
        ></textarea>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Publish
        </button>
      </div>

      {/* Notices */}
      <div className="bg-white p-6 rounded-xl shadow">
        {notices.map((n, i) => (
          <div key={i} className="p-4 border rounded-lg mb-3">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
