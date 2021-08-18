import { Provider } from "react-redux";
import { configStore } from "./Components/ESupermarket/store/configStore";
import "./App.css";
import { Home } from "./Components/ESupermarket/Home";

function App() {
  const localStore = configStore();
  return (
    <div className="App">
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
