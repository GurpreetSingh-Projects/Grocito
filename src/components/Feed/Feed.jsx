import Shared from "../Shared/Shared";
import "./feed.css";

export default function Feed() {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="sharedContainer">
          <Shared />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
