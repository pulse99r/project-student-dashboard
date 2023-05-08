import student from "./StudentsList";

function StudentCard({student}) {
  
  return (
    <div className="student-card">
      console.log("student: This is a student card")
      {/* <h2>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h2> */}
      <h3>This is a test!</h3>
    </div>
  );
}

export default StudentCard;