import React from "react";

function EmployeeInfo(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.picture.medium} style={{ margin: "0 auto" }} />
      <h3>First Name: {props.name.first}</h3>
      <h3>Last Name: {props.name.last}</h3>
      <h3>Email {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
    </div>
  );
}

export default EmployeeInfo;
