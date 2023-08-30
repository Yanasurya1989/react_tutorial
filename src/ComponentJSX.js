import React, { createElement } from "react";

const ComponentJSX = () => {
    return (
        // Penulisan dalam bentuk JSX
        <div>
            <h1 onClick={()=> console.log("clicked")}>Component JSX</h1>
            <p>Ini ditulis dengan menggunakan komponen JSX</p>
        </div>
    );

    // return React.createElement(
    //     "div",
    //     null,
    //     React.createElement(
    //         "h1",
    //         null,
    //         "Componen JSX"
    //     ),
    //     React.createElement(
    //         "div",
    //         null,
    //         React.createElement(
    //             "p",
    //             null,
    //             "Componen ini ditulis dengan tidak menggunakan JSX"
    //         )
    //     )
    // )
}

export default ComponentJSX;