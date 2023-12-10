import "./shared.css";
import { useState } from "react";
// This component receives props from Feed and then displays them according to data provided accordingly
export default function Shared(props) {
  var temp = 0;
  const [add, setAdd] = useState("Add");
  const click = () => {
    temp ? setAdd("Add") : (setAdd("Added"), (temp = 1));
  };

  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="container">
          <div className="sharedTop">
            <img className="itemImage" src={props.link} alt="" />
            <img
              className="discount"
              src="https://ps.w.org/conditional-discount-rule-for-woocommerce/assets/icon.svg?rev=2540571"
              alt=""
            />
          </div>
          <div className="sharedCenter">
            <div className="sharedTitle">{props.name}</div>
            <div className="sharedText">{props.quantity}</div>
          </div>
          <div className="sharedBottom">
            <div className="sharedSp">{props.sp}</div>
            <div className="sharedMp">{props.mrp}</div>
            <button onClick={click}>{add}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
