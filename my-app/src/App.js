import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teacher from "./components/teacher";
import Student from "./components/student";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="*" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;