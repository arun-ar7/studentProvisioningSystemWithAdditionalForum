import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./StudentsDetails/Dashboard.jsx";
import StudentProfileBgd from "./StudentProfile/StudentProfileBgd.jsx";
import Curl_container from "./CURLPage/Curl_container/Curl_container.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/invoke" element={<Curl_container />}></Route>
        <Route path="/profile" element={<StudentProfileBgd />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
