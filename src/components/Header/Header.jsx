import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft">
          <p className="logo">Grocito</p>
        </div>
        <div className="headerCenter">
          <div className="searchbar">
            <img className="searchIcon" src={search} alt="" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search for Products"
            />
          </div>
          <button className="selectLocation">Select Location</button>
        </div>
        <div className="headerRight">
          <div className="cart">
            <img className="cart" src={cart} alt="" />
            <div className="cartItems">5</div>
          </div>
          <button className="className">Login/Signup</button>
        </div>
      </div>
    </div>
  );
}
