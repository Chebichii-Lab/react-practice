import logo from "./logo.svg";
import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployee] = useState([
    {
      name: "Natasha",
      role: "Developer",
      img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg",
    },
    {
      name: "Maribel",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Louisa",
      role: "Director of Eng",
      img: "https://images.pexels.com/photos/2728264/pexels-photo-2728264.jpeg",
    },
    {
      name: "Abuela",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/3438086/pexels-photo-3438086.jpeg",
    },
    {
      name: "Pepa",
      role: "Devops",
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg",
    },
    {
      name: "Bruno",
      role: "Team Lead",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
  ]);
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
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
