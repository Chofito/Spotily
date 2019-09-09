import React from "react";
import { Provider } from "react-redux";
import { spotilyStore } from "../store/configureStore";
import Albums from "./Albums";

const store = spotilyStore();

const App = ({ dispatch }) => {
  return (
    <Provider store={store}>
      <Albums />
    </Provider>
  );
};

export default App;
