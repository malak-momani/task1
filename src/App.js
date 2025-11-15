import { createContext, useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { TasksProvider } from './Contexts/TasksContext';
import { ThemeProvider } from './Contexts/ThemeContext';


function App() {

  return (
    <ThemeProvider>
      <div className="App amaranth-regular">
        <Header />
        <TasksProvider>
          <Main />
        </TasksProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
