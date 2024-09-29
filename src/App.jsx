import { Provider } from "react-redux";
import store from "./components/store/store";
import AddHabit from "./components/habit/Habit";
import HabitList from "./components/habit/HabitList";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen flex flex-col items-center space-y-10 mt-10">
        <AddHabit />
        <HabitList />
      </div>
    </Provider>
  );
}

export default App;
