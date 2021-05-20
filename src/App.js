// import logo from './logo.svg';
import './App.css';
import './components/ProductCard/ProductCard.css'
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className = "center-products">
      <ProductCard
        imageSrc = "https://bit.ly/3owBG9K" 
        imageAlt = "Anouk"
        title = "Anouk"
        isBadge = "yes"
        badgeName = "New"
        shortDetail = "Men B&W Printed Kurta Pyjamas"
        prize = "2039"
        prizeCut = "3399"
        discount = {40}
        btnText = "Add to Cart"
      />

      <ProductCard
        imageSrc = "https://bit.ly/2PKuPw0" 
        imageAlt = "Kook N Keech"
        title = "Kook N Keech"
        isBadge = ""
        badgeName = "New"
        shortDetail = "Pure Cotton Printed T-shirt"
        prize = "499"
        prizeCut = "999"
        discount = {50}
        btnText = "Add to Cart"
      />

      <ProductCard
        imageSrc = "https://bit.ly/3f3uFtU" 
        imageAlt = "98 Degree North"
        title = "98 Degree North"
        isBadge = "yes"
        badgeName = "New"
        shortDetail = "Men Marino Wool Pullover Sweater"
        prize = "1439"
        prizeCut = "3199"
        discount = {55}
        btnText = "Add to Cart"
      />

      <ProductCard
        imageSrc = "https://bit.ly/3oCL2kn" 
        imageAlt = "HIGHLANDER"
        title = "HIGHLANDER"
        isBadge = "yes"
        badgeName = "New"
        shortDetail = "Men B&W Slim Fit Printed Shirt"
        prize = "514"
        prizeCut = "1049"
        discount = {51}
        btnText = "Add to Cart"
      />

      <ProductCard
        imageSrc = "https://bit.ly/2Sc3EvD" 
        imageAlt = "Canary London"
        title = "Canary London"
        isBadge = ""
        badgeName = "New"
        shortDetail = "Men Single-Breasted Slim-Fit Blazer"
        prize = "2699"
        prizeCut = "5999"
        discount = {55}
        btnText = "Add to Cart"
      />
    </div>
  );
}

export default App;
