import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AddTask from './Components/Tasks/AddTask';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
