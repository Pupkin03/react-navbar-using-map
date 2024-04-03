import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
const navigate = useNavigate();
const profiles = useSelector((state) => state.profile.profiles);
console.log(profiles);

return (
    <div>
    <h1 style={{ display: "flex", justifyContent: "center" }}>Company Profile</h1>
    <div 
        style={{
            color: "brown",
            gap: "5rem",

        }}>
        {profiles.map((o, index) => (
            <div 
            key = {index}
            onClick = {() => navigate(`/profile/profileInfo/${o.profileName}`)}
                style={{
            borderRadius: "10px",
            border: "solid #eaeaea",
            height: "100px",
            padding: "48px 24px",
            cursor: "pointer",
            width: "300px",
            backgroundColor: "grey",
          }}>
            <p>{o.profileName}</p>
            </div>
        ))}
    </div>
    </div>
);
};

export default Profile


