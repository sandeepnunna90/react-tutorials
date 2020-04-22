// useState() function is called a hook in react world. It is similar to a mixin or module. But it is a stateful one
// that hooks a simple component into a state. It return two elemnts - state object and updater function object

// Component names have to start with upper case first letter

// Create Button with a used state

function Button() {
  // state object
  const [counter, setCounter] = useState();
  return <button>Save</button>
}

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


// Random Number displayed on the button

function Button() {
  // state object
  const [counter, setCounter] = useState();
  return <button>{Math.random()}</button>
}


ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


// create a function logRandom() and call it in function componenet onlick event
// { } - Curl braces work like rails #{} to evaluate the value for dynamic data

function logRandom() {
  console.log(Math.random());
}

function Button() {
  // state object
  const [counter, setCounter] = useState(1);
  return <button onClick={logRandom()}>{counter}</button>
}


ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


// Instead of using define the funtion outside - we can define it right inside the onclick event curly braces

function Button() {
  // state object
  const [counter, setCounter] = useState(1);
  return <button onClick={
    function logRandom() {
    console.log(Math.random());
  }
    }>{counter}</button>
}

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


//sample arrow function in JavaScript
// hello = function () {
//   return "Hello World";
// }
// //arrow function
// hello = () => {
// return "hello world"
// }
// // simplfied arrow function if there is only one statement and it returns a value - single line
// hello = () => "hello world"

// Use an arrow function instead inside the onlick event

function Button() {
  // state object
  const [counter, setCounter] = useState(5);
  return <button onClick={() => console.log(Math.random())}>{counter}</button>
}


ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


// Using the setCounter function instead of random generator

function Button() {
  // state object
  const [counter, setCounter] = useState(1);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

// Common for all the fucntion above - This renders the actual function component

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


//Challenge: Start with 5 and double the value of each click

function Button() {
  // state object
  const [counter, setCounter] = useState(5);
  return <button onClick={() => setCounter(counter * 2)}>{counter}</button>
}

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);


// Clean up Button component - Phase 1

function Button() {
  // state object
  const [counter, setCounter] = useState(1);

  // return uses parenthesis instead of curly braces as we are not returning an object
  // we are returning a function call
  return (
    <button onClick = () => setCounter(counter + 1 )>
      {counter}
    </button>

  );

}

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);

// Clean up Button component - Phase 2


function Button() {
  // state object
  const [counter, setCounter] = useState(1);
  //official click handler function - can use any name - commonly named handleClick
  const handleClick = () => setCounter(counter + 1)

  // return uses parenthesis instead of curly braces as we are not returning an object
  // we are returning a function call
  return (
    <button onClick = {handleClick}>
      {counter}
    </button>
  );
}

ReactDOM.render(
<Button />,
 document.getElementById('mountNode'),
);
