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
              placeholder='Search for "Atta"'
            />
            <select className="selectLocation">
              <option value="Default">Select Location</option>
              <option value="Delhi">Delhi</option>
              <option value="Punjab">Punjab</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Pune">Pune</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
        </div>
        <div className="headerRight">
          <div className="cart">
            <img className="cartIcon" src={cart} alt="" />
            <div className="cartItems">5</div>
          </div>
          <button className="login">Login/Signup</button>
        </div>
      </div>
    </div>
  );
}
