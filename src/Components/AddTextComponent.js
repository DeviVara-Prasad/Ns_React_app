import React from 'react';

function AddTextComponent(props){
    let display = () =>{
        //console.log("Button Was Clicked");
        //console.log(props);
        props.a(changedValue);
        updateChange("");
    }
    let changes = (e)=>{
          updateChange(e.target.value);
    }
    const [changedValue,updateChange] = React.useState("");
    return (
        <div>
        <input type="text" id="names" onChange={changes} value={changedValue}></input>
        <button onClick={display}>AddToList</button></div>
    )
}
export default AddTextComponent;