import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";

// This component is the main homepage and its role is to call its child components
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Feed />
    </div>
  );
}
