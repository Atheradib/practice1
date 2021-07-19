import React from "react";
import "./HeaderSection.css"

export const HeaderSection = () => {
    return(
        <div>
            <nav>
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Services</a>
                <a href="">Contact Us</a>
                <button>Serach</button>
                <input type="text" />
            </nav>
        </div>
    )
}