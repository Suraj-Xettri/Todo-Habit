// src/components/HabitList.jsx
import { useSelector } from "react-redux";

const HabitList = () => {
  // Access habits from the Redux store
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet!</p>
      ) : (
        <ul className="space-y-2">
          {habits.map((habit, index) => (
            <div className="flex gap-10 justify-between max-w-[400px]">
              <li key={index} className="border p-2 rounded">
                <span className="font-medium">{habit.name}</span> -{" "}
                <span>{habit.type === "daily" ? "Daily" : "Monthly"}</span>
              </li>

              <div>
                <button className="bg-sky-400 text-white p-2 rounded hover:bg-red-600 transition duration-300">
                  complete
                </button>{" "}
                <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
