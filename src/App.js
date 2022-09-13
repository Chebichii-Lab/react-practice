import logo from "./logo.svg";
import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className = "flex flex-wrap justify-center">
            <Employee name="Natasha" role="Intern" img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU="/>
            <Employee name="Jaffari" role={role} img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU=" />
            <Employee name="Zane" img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU="/>
            <Employee name="Natasha" role="Intern" img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU="/>
            <Employee name="Jaffari" role={role} img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU="/>
            <Employee name="Zane" img = "https://media.istockphoto.com/photos/man-in-cosplaying-thor-isolated-on-white-studio-background-picture-id1147508579?b=1&k=20&m=1147508579&s=612x612&w=0&h=ThteD02H2UsCYKSBz2aqs_IDuEwJbrf6vFd8pDMGHDU="/>
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
