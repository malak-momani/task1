import { createContext, useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { TasksProvider } from './Contexts/TasksContext';


function App() {

  return (
    <div className="App amaranth-regular">
      <Header />
      <TasksProvider>
        <Main />
      </TasksProvider>
    </div>
  );
}

export default App;
