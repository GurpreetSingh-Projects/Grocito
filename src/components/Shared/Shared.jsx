import "./shared.css";
export default function Shared(props) {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="container">
          <div className="sharedTop">
            <img className="itemImage" src={props.link} alt="" />
          </div>
          <div className="sharedCenter">
            <div className="sharedTitle">{props.name}</div>
            <div className="sharedText">{props.quantity}</div>
          </div>
          <div className="sharedBottom">
            <div className="sharedSp">{props.sp}</div>
            <div className="sharedMp">{props.mrp}</div>
            <button>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}
