import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("/api/admin/students", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    await axios.delete(`/api/admin/students/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    fetchStudents();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Admin Dashboard
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-t">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.course}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
