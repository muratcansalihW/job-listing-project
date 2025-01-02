import React, { useState } from "react";

const AdminPanel = ({ addJob }) => {
  const [job, setJob] = useState({
    logo: "",
    company: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job); // Parent component’e yeni job gönder
    setJob({ logo: "", company: "", description: "" }); // Formu temizle
  };

  return (
    <form onSubmit={handleSubmit} className="admin-panel">
      <input
        type="text"
        name="logo"
        value={job.logo}
        placeholder="Şirket logosu URL"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        value={job.company}
        placeholder="Şirket Adı"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={job.description}
        placeholder="İlan Açıklaması"
        onChange={handleChange}
        required
      />
      <button type="submit">İlan Ekle</button>
    </form>
  );
};

export default AdminPanel;
