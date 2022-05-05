import React from "react";

export const Tile = ({tile}) => {
    const values = Object.values(tile);
    return (
        <div className="tile-container">
            {values.map((value, i) => {
                return (
                    <p key={i} className={`${i === 0 ? "tile-title" : ""} tile`} >
                        {value}
                    </p>
                )
            })}
        </div>
    );
};
