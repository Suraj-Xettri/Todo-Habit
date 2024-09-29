// src/components/AddHabit.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/slice";

const AddHabit = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("daily");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHabit({ name, type }));
    setName("");  // Clear input after adding habit
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Habit
      </button>
    </form>
  );
};

export default AddHabit;
