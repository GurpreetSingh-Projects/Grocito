import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Feed />
    </div>
  );
}
