import { useState } from "react";
import "./StudentCard.css"
import student from "./StudentsList";
import StudentDetail from "./StudentDetail"


function StudentCard({student}) {
  const[showMore, setShowMore] = useState(false);

  const toggeleDetails = () => {
    setShowMore(!showMore)
  }

  return (
    <div className="student-card">
        <img src={student.profilePhoto}/>
      <div className="student-info-container">
        <h4>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h4>
        <p>Birthday: {student.dob}</p>
      </div>
        {showMore ? (
          <div>
              <a href="#" onClick={toggeleDetails}>Show less...</a>
              <StudentDetail/>
          </div>
        ) : (
          <div>
            <a href="#" onClick={toggeleDetails}>Show more...</a>
          </div>
        )} 
    </div>
  );
}

export default StudentCard;