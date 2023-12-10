import "./navbar.css";
// This component shows the buttons which are present at top of the page, and are displayed under the Header section
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <ul className="navbarList">
          <li>Vegetables & Fruits</li>
          <li>Dairy & Breakfast</li>
          <li>Munchies</li>
          <li>Cold Drinks & Juices</li>
          <li>Instant & Frozen Food</li>
          <li>Tea, Coffee & Health Drinks</li>
          <li>Bakery & Biscuits</li>
        </ul>
      </div>
    </div>
  );
}
