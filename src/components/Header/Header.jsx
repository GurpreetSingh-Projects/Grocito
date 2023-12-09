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
              <option className="options" value="Default">
                <div>Select Location</div>
              </option>
              <option value="Delhi">
                <div>Delhi</div>
              </option>
              <option value="Punjab">
                <div>Punjab</div>
              </option>
              <option value="Andhra Pradesh">
                <div>Andhra Pradesh</div>
              </option>
              <option value="Arunachal Pradesh">
                <div>Arunachal Pradesh</div>
              </option>
              <option value="Assam">
                <div>Assam</div>
              </option>
              <option value="Pune">
                <div>Pune</div>
              </option>
              <option value="Uttar Pradesh">
                <div>Uttar Pradesh</div>
              </option>
              <option value="Uttarakhand">
                <div>Uttarakhand</div>
              </option>
              <option value="Mumbai">
                <div>Mumbai</div>
              </option>
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
