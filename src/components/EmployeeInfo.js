import React from "react";
// import API from "../utils/API"
function EmployeeInfo(props) {
  return (
      <div className="card"><div className="text-center">
      <img className="img-fluid" src={props.data.picture.large} style={{ margin: "0 auto" }} />
      {/* <input name="first" type="text" data-id={props.data.id} value={props.data.name.first}/> */}
      <h3>First Name: {props.data.name.first}</h3>
      <h3>Last Name: {props.data.name.last}</h3>
      <h3>Email {props.data.email}</h3>
      <h3>Phone: {props.data.cell}</h3>
    </div>
    </div>
    
    
  );
}

export default EmployeeInfo;
