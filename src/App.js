import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header/Header";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import { useState } from "react";
import Edit from "./Components/Edit/Edit";
import axios from "axios";

function App() {
  const API = "http://localhost:8000";
  const [name, setName] = useState([]);
  async function AddContact(newContact) {
    await axios.post(API, newContact);
    getContanct();
  }
  async function getContanct() {
    let res = await axios(API);
    setName(res.data);
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact AddContact={AddContact} />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
