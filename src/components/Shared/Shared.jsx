import "./shared.css";
export default function Shared() {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="container">
          <div className="sharedTop">
            <img
              className="itemImage"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/526764a.jpg?ts=1701686839"
              alt=""
            />
          </div>
          <div className="sharedCenter">
            <div className="sharedTitle">Aashirvaad M.P. Chakki Atta</div>
            <div className="sharedText">10kg</div>
          </div>
          <div className="sharedBottom">
            <div className="sharedSp">₹476</div>
            <div className="sharedMp">₹550</div>
            <button>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}
