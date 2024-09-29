// src/components/AddHabit.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/slice";

const AddHabit = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("daily");
  const [situation, setSituation] = useState("Pending");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHabit({ name, type, situation }));
    setName(""); // Clear input after adding habit
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 space-x-4">
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-4 min-w-[300px] rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-2 py-4 min-w-[300px] rounded"
      >
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-4 rounded"
      >
        Add Habit
      </button>
    </form>
  );
};

export default AddHabit;
