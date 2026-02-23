import './App.css';
import GreetFunction from './Components/FunctionalComponents/GreetFunction';
import WelcomeClass from './Components/ClassComponents/WelcomeClass';
let obj = {
  name: "Kashish Soni",
  age: 20,
  class: '10th'
}
let obj1 = {
  name: "Manish Soni",
  age: 30,
  class: '12th'
}
function App() {
  return (
    <div className="App">

      <GreetFunction name={obj.name} age={obj.age} class={obj.class} />
      <GreetFunction name="Manish Soni" age="30" class="12th" />

      <GreetFunction>
        <h1>Hi this is message from App Component</h1>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
        <p>This is a paragraph</p>
      </GreetFunction>
      
      {/* <WelcomeClass /> */}


    </div>
  );
} 

export default App;
