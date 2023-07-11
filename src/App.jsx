import GlobalStyles from "./Global";

import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <Form />
      <Outlet />
    </>
  );
}

export default App;
