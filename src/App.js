// import logo from './logo.svg';
import './App.css';
import './components/ProductCard/ProductCard.css'
import ProductCard from "./components/ProductCard/ProductCard";
import products from './components/ProductCard/products'

function App() {
  return (
    <div className = "center-products">
      {products.map(product => {
        return (<div key={product.key}>
          <ProductCard
            imageSrc = {product.imageSrc}
            imageAlt = {product.imageAlt}
            title = {product.title}
            isBadge = {product.isBadge}
            badgeName = {product.badgeName}
            shortDetail = {product.shortDetail}
            prize = {product.prize}
            prizeCut = {product.prizeCut}
            discount = {product.discount}
            btnText = {product.btnText}
          />
        </div>)
      })}
    </div>
  );
}

export default App;
