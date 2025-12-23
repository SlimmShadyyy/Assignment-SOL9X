import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentDashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/student/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await api.put("/api/student/me", profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfile(res.data);
      alert("Profile updated");
    } catch {
      alert("Update failed");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-6 text-center">
          Student Dashboard
        </h2>

        <input
          className="w-full p-2 mb-4 border rounded"
          value={profile.name}
          onChange={(e) =>
            setProfile({ ...profile, name: e.target.value })
          }
        />

        <input
          className="w-full p-2 mb-4 border rounded"
          value={profile.email}
          onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })
          }
        />

        <input
          className="w-full p-2 mb-4 border rounded"
          value={profile.course}
          onChange={(e) =>
            setProfile({ ...profile, course: e.target.value })
          }
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-black text-white py-2 rounded"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
