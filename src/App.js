import Events from "./components/Events";
import Counter from "./components/classComponent";
import UseStateCounter from "./components/useStateHook";

function App() {
  return (
    <div>
       <Events />
      <Counter />
      <Counter count={5} /> 
      <UseStateCounter />
    </div>
  );
}
export default App;
