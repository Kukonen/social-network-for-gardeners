import React from "react";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

import './App.css'

const App = () => {
    return (
        <div className="Main">
            <Menu />
            <Content />
            <div className="Main-children-block-side" />
        </div>
    )
}

export default App;