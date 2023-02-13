import logo from './logo.svg';
import './App.scss';
import { TaskDashboard } from './TaskDashboard';
import handleSubmit from './handles/handlesubmit';

function App() {
  const submithandler = (inputValue) => {
    handleSubmit(inputValue)
  }

  return (
    <>
      <div className='App-header'>Task Dashboard</div>
      <div className='Task-app'>
        <TaskDashboard submithandler={submithandler} />
      </div>
    </>
  );
}

export default App;
