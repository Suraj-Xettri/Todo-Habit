import { Provider } from "react-redux"
import store from "./components/store/store"

function App() {

  return (
    <Provider store={store}>
      <h1 className="flex justify-center ">Hello</h1>
    </Provider>
  )
}

export default App
