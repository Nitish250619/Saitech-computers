import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import computerNetworkingImage from "../../Assets/ServiceImage/2Computernetworking.jpeg";
import "./EnquiryModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const EnquiryModal = ({ open, handleClose, enquiryTitle }) => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetchCountryCodes();
  }, []);

  const fetchCountryCodes = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const codes = data.map((country) => ({
        name: country.name,
        code: country.alpha2Code,
      }));
      setCountryCodes(codes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleContinue = () => {
    // Add your logic here to handle the continue button action
    console.log("Continue button clicked");
  };

  return (
    <div className="modal">
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Send Enquiry
          </Typography>
          <Box
            variant="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100px",
              width: "350px",
              marginTop: "20px",
            }}
          >
            <img
              src={computerNetworkingImage}
              alt="Enquiry Image"
              style={{ width: "70px", height: "70px", borderRadius: "10px" }}
            />
            <Typography
              sx={{
                mt: 2,
                fontSize: "1.5rem",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
              }}
            >
              {enquiryTitle}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <TextField
              select
              label="Country Code"
              variant="outlined"
              value={selectedCountry}
              onChange={handleCountryChange}
              fullWidth
              style={{ maxWidth: "100px" }}
            >
              <MenuItem value="">Select</MenuItem>
              {countryCodes.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name} (+{country.code})
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              fullWidth
              style={{ marginRight: "10px" }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleContinue}
            style={{
              marginTop: "20px",
              color: "#f5b921",
              backgroundColor: "#1f5156",
              "&:hover": {
                backgroundColor: "#153b40",
              },
              borderRadius: "10px",
              padding: "12px 24px",
            }}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EnquiryModal;
