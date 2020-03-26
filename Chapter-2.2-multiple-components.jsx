// props here is empty - when nothing is sent in App componenet
function Button(props) {
  // state object
  // const [counter, setCounter] = useState(1); - Moved to App component
  //official click handler function - can use any name - commonly named handleClick
  // const handleClick = () => setCounter(counter + 1)

  // return uses parenthesis instead of curly braces as we are not returning an object
  // we are returning a function call
  return (
    // <button onClick = {handleClick}>
    <button onClick = { () => {} } > // empty function for onlick
      +1
    </button>
  );
}


// Display Component

// the props object is present in all function components.
// need not name it props but that is the convention. All function components
// recieve these objects even when there are no arguments/attributes
// props here have a key value pair
function Display(props) {
  // need to access counter from here instead - so move state componenet of button to App so that it can be access here
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(1);
  // We can flow data from parent componenet (App) to child componenet (Display)
  // which is done via props.
  return (
    <div>
      <Button />
      <Display message={counter}/> // - specify attribute on here
    </div>
  );
}

ReactDOM.render(
 <App />,
 document.getElementById('mountNode'),
);
//
