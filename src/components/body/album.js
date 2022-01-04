import {useState} from "react";
import style from "./bodyStyle/album.css";

function Album({name}) {
let {item, setItem}= useState([]);

let poster={
    width:"100%",
    height:"100%",
    objectFit:"cover"
    
}

    return(
        <div style={style.wrapper} className="wrapper">
            <div className="img-wrapper">
            <img style={poster} src="
            " alt={name} />
            </div>
            <div className="list">
                <ul>
                    <li>item secondary</li>
                    <li>item</li>
                    <li>item</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Album;