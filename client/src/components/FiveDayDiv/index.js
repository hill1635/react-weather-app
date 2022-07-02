import React from "react";
import DeleteBtn from "../DeleteBtn";

function FiveDayDiv() {
    return (
        <div className="fiveDay">
            <span>Day One</span>
            <span>Day Two</span>
            <span>Day Three</span>
            <span>Day Four</span>
            <span>Day Five</span>
            <DeleteBtn />
        </div>
    );
}

export default FiveDayDiv;