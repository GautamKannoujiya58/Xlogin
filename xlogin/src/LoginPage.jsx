import { useState } from "react";

function LoginPage() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  const [userMessage, setUserMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((preValues) => ({ ...preValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = inputValues;
    if (username === "user" && password === "password") {
      setUserMessage("Welcome, user!");
      //   setTimeout(() => setUserMessage(""), 3000);
    } else {
      setUserMessage("Invalid username or password"); // Set error message
      setTimeout(() => setUserMessage(""), 3000);
    }
  };
  // Initial approach
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [userMessage, setUserMessage] = useState("");
  //   console.log("userName >>>", username);
  //   console.log("password >>>", password);

  //   // for handling username input
  //   const handleUsername = (e) => {
  //     setUsername(e.target.value);
  //     // setPassword(e.target.value);
  //   };

  //   // for handling password input
  //   const handlePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   // for handling submit
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // console.log("submitted!");
  //     if (username === "user" && password === "password") {
  //       setUserMessage("Welcome, user!");
  //     } else {
  //       setUserMessage("Invalid username or password");
  //     }
  //   };

  //   console.log("userMessage >>>", userMessage);
  return (
    <>
      <h1>Login Page</h1>
      {userMessage === "Welcome, user!" ? (
        <p>{userMessage}</p>
      ) : (
        <>
          <p>{userMessage}</p>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={inputValues.username}
              onChange={handleInputChange}
              required
            ></input>
            <br></br>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={inputValues.password}
              placeholder="password"
              onChange={handleInputChange}
              required
            ></input>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}
export default LoginPage;
