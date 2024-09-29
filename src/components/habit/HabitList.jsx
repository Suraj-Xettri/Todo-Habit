// src/components/HabitList.jsx
import { useDispatch, useSelector } from "react-redux";
import { deletHabit, updateHabitStatus } from "../store/slice";

const HabitList = () => {
  // Access habits from the Redux store
  const habits = useSelector((state) => state.habits.habits);

  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deletHabit(index)); // Dispatch the delete action
  };

  const handleStatusChange = (index) => {
    const newStatus = habits[index].situation === "Pending" ? "Completed" : "Pending";
    dispatch(updateHabitStatus({ index, status: newStatus }));
  };

  return (
    <div className="space-y-2 w-[90vw]">
      <h2 className="text-xl font-bold text-center">Your Habits</h2>
      {habits.length === 0 ? (
        <p className="text-center">No habits added yet!</p>
      ) : (
        <ul className="space-y-2">
          {habits.map((habit, index) => (
            <div className="flex justify-between bg-[#FFFFFF] px-2 py-4 rounded-xl">
              <li key={index} className="p-2 rounded">
                <span className="font-medium">{habit.name}</span> -{" "}
                <span>{habit.type === "daily" ? "Daily" : "Monthly"}</span>
              </li>
              <div className="space-x-2">
                <button onClick={() => handleStatusChange(index)} className={`${habit.situation === "Pending"? "bg-[#FFC107]": "bg-[#4CAF50]"} text-white p-2 rounded`}>
                  {habit.situation === "Pending" ? "Pending..." : "Completed"}
                </button>
                <button onClick={() => handleDelete(index)} className="bg-[#F44336] text-white p-2 rounded hover:bg-red-600 transition duration-300">
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
