import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  console.log("userName >>>", username);
  console.log("password >>>", password);

  // for handling username input
  const handleUsername = (e) => {
    setUsername(e.target.value);
    // setPassword(e.target.value);
  };

  // for handling password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // for handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted!");
    if (username === "user" && password === "password") {
      setUserMessage("Welcome, user!");
    } else {
      setUserMessage("Invalid username or password");
    }
  };
  //   console.log("flag value >>", flag);
  console.log("userMessage >>>", userMessage);
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
              placeholder="username"
              value={username}
              onChange={handleUsername}
              required
            ></input>
            <br></br>
            <label>Password:</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={handlePassword}
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
