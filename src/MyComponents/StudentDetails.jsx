function StudentDetails(props) {
  if (props.isSelected) {
    return (
      <>
        <h3>{props.StudentName}</h3>
        <p>You are selected for {props.orgName}</p>
      </>
    );
  }

  return (
    <>
      <h3>{props.StudentName}</h3>
      <p>You can apply for the next interview schedule at {props.orgName}</p>
    </>
  );
}

export default StudentDetails;