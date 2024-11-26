import { thisWay } from "./data.js";
import something from "./data.js"

import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"

console.log("Hello World");
console.log(thisWay);
console.log(something);

console.log(React);

const h2 = <h2>Hello in heading Two</h2>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h2)

const iPhone = function(key, title, brand, category, image) {
    return (<div className="card-container" key={key}>
        <div className="card">
        <img src={image}/>
        <h3>{title}</h3>
        <p>₹79999</p>
        <p>{brand}</p>
        <p>{category}</p>
        </div>
    </div>)
}


fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
    const collection = data.products.map((product) => {
        return iPhone(product.id, product.title, product.brand, product.category, product.thumbnail)
    })
    root.render(<div className="main-container">{collection}</div>)
})

