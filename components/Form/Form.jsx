 "use client";
import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    class: "",
    section: "",
    roll_number: "",
    date_of_birth: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message || data.error || "Error occurred");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.first_name} name="first_name" placeholder="First Name" onChange={handleChange} />
      <input value={form.last_name} name="last_name" placeholder="Last Name" onChange={handleChange} />
      <input value={form.class} name="class" placeholder="Class" onChange={handleChange} />
      <input value={form.section} name="section" placeholder="Section" onChange={handleChange} />
      <input value={form.roll_number} name="roll_number" type="number" placeholder="Roll Number" onChange={handleChange} />
      <input value={form.date_of_birth} name="date_of_birth" type="date" onChange={handleChange} />

      <select value={form.gender} name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}