import "./App.css";
import Adress from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";

function App() {
  return (
    <div className="wraper">
      <div className="App">
        <ProfilePhoto />
        <FullName />
        <Adress />
      </div>
    </div>
  );
}

export default App;
