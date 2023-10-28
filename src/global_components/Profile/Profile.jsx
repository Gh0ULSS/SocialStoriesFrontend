import Button from "@mui/material/Button";
import { InputLabel, TextField } from "@mui/material";
import UserLogo from "../../assets/images/user.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="div-container" style={{}}>
        <img src={UserLogo} alt="user-img" className="user-img"></img>
        <br />
        <br />

        <form
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <InputLabel>Update Username</InputLabel>
          <TextField label="Username" />
          <br />
          <br />
          <InputLabel>Update Email</InputLabel>
          <TextField label="Email" />
          <br />
          <br />
          <br />
          <Button variant="contained">Save Changes</Button>
          <br />
          <br />

          {/*
                    <InputLabel>Password</InputLabel>
                    <TextField
                    label="Password" type="password" />
                    <br/>
                    <br/>
                    <InputLabel>Confirm Password</InputLabel>
                    <TextField
                    label="Confirm Password" /> 
                    */}
        </form>
      </div>

      <form method="post" className="form-container">
        <br />
        <h1
          style={{
            fontFamily: "Calibri",
            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          Change password
        </h1>
        <br />
        <br />
        <InputLabel style={{ textAlign: "left", marginLeft: "30px" }}>
          Old Password
        </InputLabel>
        <TextField label="Old Password" style={{ marginLeft: "30px" }} />
        <br />
        <br />
        <InputLabel style={{ textAlign: "left", marginLeft: "30px" }}>
          New Password
        </InputLabel>
        <TextField label="New Password" style={{ marginLeft: "30px" }} />
        <br />
        <br />
        <InputLabel style={{ textAlign: "left", marginLeft: "30px" }}>
          Confirm New Password
        </InputLabel>
        <TextField
          label="Confirm New Password"
          style={{ marginLeft: "30px" }}
        />
        <br />
        <br />
        <Button variant="contained" style={{ marginLeft: "30px" }}>
          Change Password
        </Button>
        <br />
        <br />
      </form>

      <Footer />
    </div>
  );
};

export default Profile;
