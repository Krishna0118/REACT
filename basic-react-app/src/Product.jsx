import "./Product.css";
import Price from "./Price";
function Product({title, idx}){
    let oldPrices = ["2000", "3000", " 500"];
    let newPrices = ["1500", "2000", "300"];
    let description = ["8000 DPI", "designed for ipad","wireless" ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;