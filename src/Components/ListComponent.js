import React from 'react';
import './ListComponent.css';

function ListComponent(props){
    
    var arr = props.list;
    
    return (
        <div>
        <ul>
            {
                arr.map((name)=> {return (<li key={name.toString()}>{name}</li>)})
            }
        </ul>
        </div>
    )
}
export default ListComponent;