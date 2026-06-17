export const EmpDetails = ({name,skill="0",isLoggedIn,passoutYear,empStatus="Inactive"}) =>
     {
        console.log(name,skill,isLoggedIn,passoutYear,empStatus)
    return(
        <>
        <h3>Employee name is {name},year {passoutYear} with skills={skill} is {empStatus}</h3>
        <h2>{isLoggedIn?"Welcome User" : "Please login"}</h2>
        </>
    );
}