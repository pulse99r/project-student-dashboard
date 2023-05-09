import Cohort from "./Cohort";

function showCohort({students}) {
  return (
    <div className="cohort">
      {students.map((student)=>{
        return(<Cohort key = {students.id} student = {student}/>)
        // console.log("student:==>",student)
      })}
      <h1>This is the Cohort List</h1>

    </div>
  );
}

export default Cohort;