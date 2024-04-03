import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";



const ProfileInfo = () => {


    const { profileId } = useParams();
    console.log(profileId)
    const navigate = useNavigate();
    const profiles = useSelector((state) => state.profile.profiles);
    console.log(profiles)

    const jobProfiles = profiles.find((profile) => profile.profileName === profileId);

    console.log(jobProfiles, "jobss")




  if (!jobProfiles) {
    return (
      <div>
        <h4>No job found</h4>
        <button onClick={() => navigate(-1)}>Go back to store</button>
      </div>
    );
  }




  return (
    <div
    style={{
      backgroundColor: "brown",
    }}>
      <h3>{jobProfiles.profileName}</h3>
      <p> profile description: {jobProfiles.profileDescription} </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        eligendi inventore! Quia quis dolorem debitis ipsam, quas necessitatibus
        corrupti quos.
      </p>
      <button onClick={() => navigate(-1)}>Go back to store</button>
    </div>
  );
};

export default ProfileInfo;
