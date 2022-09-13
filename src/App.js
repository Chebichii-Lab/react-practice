import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <Employee name = "Natasha" role = "Intern"/>
      <Employee name = "Jaffari"/>
      <Employee name = "Zane"/>
      </>
      :
      <p>You cannot see the employees</p>
}
    </div>
  );
}

export default App;
