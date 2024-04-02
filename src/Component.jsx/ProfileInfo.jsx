import { useSelector } from "react-redux";
import { useParams } from "react-router";


const profileInfo = () => {


  const { jobId } = useParams();
  const navigate = useNavigate();
  const profiles = useSelector((state) => state.profile.profiles);

  const jobProfiles = profiles.find((profile) => profile.profileName === jobId);




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

export default profileInfo;
