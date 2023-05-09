import StudentCard from "./StudentCard";

function StudentsList({students}) {
  return (
    <div className="students-list">
      {students.map((student)=>{
        return(<StudentCard key = {students.id} student = {student}/>)
        // console.log("student:==>",student)
      })}
    </div>
  );
}

export default StudentsList;