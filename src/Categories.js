import { useState, useEffect } from "react";
import axios from "axios";
const Categories = () => {
    let [categories, setCategories] = useState([]);
    let [value, setValue] = useState("All Categories")
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                setCategories(res.data);
            });
    }, []);
    return (
        <div>
            <h1>Categories</h1>
            <select className="todo-user-input" onChange={(event) => setValue(event.target.value)}>
                <option selected>All Categories</option>
                {categories.map((val, index) => {
                    return (
                        <option className="product-category" value={val}>{val}</option>
                    );
                })}
            </select>

        </div>
    )
}
export default Categories;