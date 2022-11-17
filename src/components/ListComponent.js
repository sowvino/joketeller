import React from "react";
const ListComponent = (props, { id, index, removeItem }) => {
    return (
        <div className="pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br--right-ns">
            <p>{props.text}</p>
        </div>
    )
}
export default ListComponent;