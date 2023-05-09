import "./StudentDetail.css"

function StudentDetail({student}){

  return (
<div className="student-detail">
  <ul className="detail-group">
    <li className="col-hdr">Codewars:</li>
    <li className="col-hdr">Scores:</li>
    <li className="col-hdr">Certifications:</li>
    <li>Current Total:</li>
    <li>Assignments:</li>
    <li>Resume:</li>
    <li>Last Week:</li>
    <li>Projects:</li>
    <li>LinkedIn:</li>
    <li>Goal:</li>
    <li>Assessments:</li>
    <li>Mock Intrerview:</li>
    <li>Percentage of fGoal Achieved:</li>
    {/* <li><span>Current Total:</span> {student.codewars.current.total}</li> */}
  </ul>
</div>
  )
}
export default StudentDetail