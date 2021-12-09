// import logo from './logo.svg';
import './App.css';
import AddTextComponent from './Components/AddTextComponent';
import ListComponent from './Components/ListComponent';
import React from 'react';

function App() {
  const [list,updateList] = React.useState([]);
  const handler = (name)=>{
    list.push(name)
    updateList([...list]);
    console.log(list)
  }
  return (
    
    <div class="App">
      <AddTextComponent a = {handler}/>
      <ListComponent list={list}/>
    </div>
  )
}

export default App;
