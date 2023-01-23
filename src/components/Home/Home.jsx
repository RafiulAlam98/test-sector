import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Home = () => {
  const [sectors, setSectors] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [sectorValue, setSectorValue] = useState("");
  const [checkBox, setCheckbox] = useState(true);
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    setSectorValue(event.target.value);
  };
  const handleCheckBox = (event) => {
    setCheckbox(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:5000/sectors")
      .then((res) => res.json())
      .then((data) => {
        setSectors(data);
      });
  }, []);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserInfo = { ...userInfo };
    newUserInfo[field] = value;
    setUserInfo(newUserInfo);
  };

  const handleSubmit = (e) => {
    console.log(userInfo);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setSuccess(info.success);
      });
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <Typography sx={{ mt: 2 }} variant="body2" gutterBottom>
        Please enter your name and pick the Sectors you are currently involved
        in.
      </Typography>
      <Grid sx={{ mt: 2, mb: 2, ml: 5 }} item xs={12} sm={12} md={12} lg={12}>
        <Box>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="outlined-size-small"
                label="Name"
                name="name"
                onBlur={handleOnBlur}
                defaultValue=""
                size="small"
                helperText="name"
                required
              />

              <TextField
                id="outlined-select-sectors"
                select
                sx={{ width: "50%", m: 1 }}
                label="Select Sectors"
                name="sectors"
                onBlur={handleOnBlur}
                value={sectorValue}
                onChange={handleChange}
                size="small"
                helperText="Select Sectors"
                required
              >
                {sectors.map((option) => (
                  <MenuItem key={option._id} value={option.category}>
                    {option.category}
                  </MenuItem>
                ))}
              </TextField>

              <div>
                <Checkbox
                  name="terms"
                  onChange={handleCheckBox}
                  value={checkBox}
                  onBlur={handleOnBlur}
                  {...label}
                  required
                />
                <span>Agree to terms</span>
              </div>

              <Button
                sx={{ width: "25%", mt: 2, mx: "auto" }}
                type="submit"
                variant="contained"
                size="small"
              >
                Book
              </Button>
            </div>
          </form>
          {success === true && (
            <Alert sx={{ mt: 2 }} severity="success">
              <AlertTitle>Success</AlertTitle>
              <strong>check it out! data saved successfully</strong>
            </Alert>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Home;
