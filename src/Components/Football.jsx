import React from "react";

const Football = () => {
    const shoot = (param) => alert(param);

    return (
        <button onClick={() => shoot("Goal")}>
            Shoot
        </button>
    )
}

export default Football;