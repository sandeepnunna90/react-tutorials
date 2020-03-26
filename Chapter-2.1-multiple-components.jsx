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


// Display Component

function Display() {
  return (
    <div>...</div>
  );
}

function App() {
  return (
    <div>
      <Button />
      <Display />
    </div>
  );
}

// Can't add display component can't be added it as an adjacent sibling to button below
// as they get converted to functions
ReactDOM.render(

 // <Button /> <Display />, -- invalid syntax

 // [<Button />, <Display />], -- valid as it is return as an array.
 // good solution when all elements come from same component in a dynamic way

 // make these react elements children of an react element
 // <div>
 //   <Button />
 //   <Display />
 // </div>,

 // React special object - React.Fragment - no need to use DOM parent (div tag)
 // <React.Fragment>
 //   <Button />
 //   <Display />
 // </React.Fragment>,

 // can also use empty tag is supported by environment. This empty tag gets converted
 // to React.Fragement
 // <>
 //   <Button />
 //   <Display />
 // </>,

 <div>
   <Button />
   <Display />
 </div>,

 document.getElementById('mountNode'),
);
//
