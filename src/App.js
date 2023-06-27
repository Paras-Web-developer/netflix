import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import store, { persistor } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersistGate persistor={persistor}>
          <Allroutes />
        </PersistGate>
      </div>
    </Provider>
  );
}

export default App;