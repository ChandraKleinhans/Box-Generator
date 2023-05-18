import React from 'react'

const Display = (props) => {

    const {boxDetails, setBoxDetails} = props;
    const {boxes, setBoxes} = props;

    const onChange = (e) =>{
        setBoxDetails(
            {...boxDetails,
            [e.target.name]: e.target.value,}
        )
    }

    const createBox = (e) =>{
        e.preventDefault();
        setBoxes(boxes => [...boxes, {"color": boxDetails.color}]);
    }

  return (
    <form onSubmit = {createBox}>
        <div>
            Color: <input type="text" onChange = {onChange} name = "color"/>
            <button value = "color">Add</button>
        </div>
    </form>
    )
}

export default Display