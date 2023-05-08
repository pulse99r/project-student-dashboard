import StudentCard from "./StudentCard";

function StudentsList({students}) {
  return (
    <div className="students-list">
      {students.map((student)=>{
        <StudentCard student = {student}/>
        // console.log("student:==>",student)
      })}
      {/* <h1>This is the Students List</h1> */}

    </div>
  );
}

export default StudentsList;