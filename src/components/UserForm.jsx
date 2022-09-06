import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  //Validation for first name
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required!");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First Name must be 2 characters or longer!");
    } else {
      setFirstNameError("");
    }
  };

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  //Validation for last name.
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required!");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last Name must be 2 characters or longer!");
    } else {
      setLastNameError("");
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  //Validation for email.
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 2) {
      setEmailError("Email must be 2 characters or longer!");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //Validation for password.
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be 8 characters or longer!");
    } else {
      setPasswordError("");
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm Password is required!");
    } else if (e.target.value.length < 8) {
      setConfirmPasswordError(
        "Confirm Password must be 8 characters or longer!"
      );
    } else {
      setConfirmPasswordError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };
  //JSX starts here
  return (
    //Form starts here
    <form className="justify-content-center" onSubmit={createUser}>
      <div className="mb-3 align-items-center  justify-content-center">
        {/* First name for form */}
        <label>First Name: </label>
        <input value={firstName} type="text" onChange={handleFirstName} />
        {firstNameError && <p className="text-danger">{firstNameError}</p>}
      </div>
      <div className="mb-3 align-items-center justify-content-center">
        {/* Last name for form */}
        <label>Last Name: </label>
        <input value={lastName} type="text" onChange={handleLastName} />
        {lastNameError && <p className="text-danger">{lastNameError}</p>}
      </div>
      <div className="mb-3 align-items-center justify-content-center">
        {/* email for form */}
        <label>Email Address: </label>
        <input value={email} type="text" onChange={handleEmail} />
        {emailError && <p className="text-danger">{emailError}</p>}
      </div>
      <div className="mb-3 align-items-center justify-content-center">
        {/* //password for form */}
        <label>Password: </label>
        <input value={password} type="text" onChange={handlePassword} />
        {passwordError && <p className="text-danger">{passwordError}</p>}
      </div>
      <div className="mb-3 align-items-center justify-content-center">
        {/* //confirm password for form  */}
        <label>Confirm Password: </label>
        <input
          type="text"
          onChange={handleConfirmPassword}
          value={confirmPassword}
        />
        {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
      </div>
      <input type="submit" value="Create User" />
      <div>
        {/* //Display what is being typed into the form live. */}
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
      </div>
    </form>
  );
};

export default UserForm;
