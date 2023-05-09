import Header from "./Components/Header.js";
import studentData from "./data/data.json";
import StudentsList from "./Components/StudentsList.js";
import Cohorts from "./Components/Cohorts"

function App() {
  return (
    <div className="container">
      <Header />
      <Cohorts students={studentData}/>
      <StudentsList students={studentData}/>
    </div>
  );
}

export default App;
