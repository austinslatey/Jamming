import React from "react";
import "./Track.css";


class Track extends React.Component {
    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3> Track information goes here</h3>
                    <p>Track artist goes here | track album goes here</p>
                </div>
                <button className="Track-action">add or delete goes here</button>
            </div>
        )
    }
}

export default Track;