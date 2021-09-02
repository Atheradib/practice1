import { Provider } from "react-redux";
import { configStore } from "./Components/ESupermarket/store/configStore";
import "./App.css";
import { Home } from "./Components/ESupermarket/Home";
import { HomeD } from "./Components/To_Do_List/HomeD";

function App() {
  // const localStore = configStore();

  return (
    <div className="App">
      {/* <Provider store={localStore}>
        <Home />
      </Provider> */}
      <HomeD />
    </div>
  );
}

export default App;
