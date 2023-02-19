import './App.css';
import { actions, useStore } from './store';

function App() {
  const [state, dispatch] = useStore()
  const { todo, todoInput } = state

  return (
    <div className="App">
      <input value={todoInput} placeholder='type something' onChange={e => dispatch(actions.setTodoInput(e.target.value))} />
      <button onClick={() => dispatch(actions.submitTodoInput(todoInput))}>Submit</button>
      {
        Object.values(todo)?.map((item) => { return (<p>{item}</p>) })
      }
    </div>
  );
}

export default App;
