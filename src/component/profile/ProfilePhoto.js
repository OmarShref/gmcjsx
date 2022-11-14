import photo from "../../299307594_142085175233459_4813057762078205252_n.jpg";
import "./ProfilePhoto.css";

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <img src={photo} alt="my profilephoto" />
    </div>
  );
};
export default ProfilePhoto;
