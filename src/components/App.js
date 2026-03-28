import "./../styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./src/components/UserDetails";
import UserList from "./src/components/UserList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;