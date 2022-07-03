import React from "react";

function DeleteBtn() {
    var info = (event) => {
        console.log("this: ", event);
    };
    return (
        <button onClick={e => info(e.target.parentNode)}>Delete</button>
    );
}

export default DeleteBtn;