import React, { useState } from 'react'

function ChildComponent(props){

    const [inputValue, setInputValue] = useState('');
    function handleChange(event) {
        setInputValue(event.target.value);
        props.onChange(event.target.value);
        // props.onChange(event.target.value);
      }
    
  return (
    <div>
    <label>
      Input value:
      <input type="text" value={inputValue} onChange={handleChange} />
    </label>
  </div>
);

}

function ParentComponent() {
    const [parentValue, setParentValue] = useState('');
    function handleChildChange(childValue) {
      setParentValue(childValue);
    }
    return (
      <div>
        <p>Parent value: {parentValue}</p>
        <ChildComponent onChange={handleChildChange} />
      </div>
    );
  }


export default ChildComponent;
