import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./MyTechPager.css";

function MyTechPager({ userData }) {
  return (
    <div className="container">
      <Header userData={userData} />

      <div className="bottom">
        <LeftPanel userData={userData} />
        <RightPanel userData={userData} />
      </div>
    </div>
  );
}

export default MyTechPager;