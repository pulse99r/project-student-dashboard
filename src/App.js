import Header from "./Components/Header.js";
import studentData from "./data/data.json";
import StudentsList from "./Components/StudentsList.js";


function App() {
  return (
    <div>
      <Header />
      <StudentsList students={studentData}/>
    </div>
  );
}

export default App;
