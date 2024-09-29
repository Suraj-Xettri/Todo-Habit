import { Provider } from "react-redux"
import store from "./components/store/store"
import AddHabit from "./components/habit/Habit"
import HabitList from "./components/habit/HabitList"

function App() {

  return (
    <Provider store={store}>
      <AddHabit/>
      <HabitList/>
    </Provider>
  )
}

export default App
