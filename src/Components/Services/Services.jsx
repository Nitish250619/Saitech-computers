import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import computerHardwareImage from "../../Assets/ServiceImage/1Computerhardware.jpeg";
import computerNetworkingImage from "../../Assets/ServiceImage/2Computernetworking.jpeg";
import computerPeripheralImage from "../../Assets/ServiceImage/3ComputerPeripheral.jpeg";
import computerPrinterImage from "../../Assets/ServiceImage/4computerprinter.jpeg";
import computerServerImage from "../../Assets/ServiceImage/5computerserver.jpeg";
import computerSoftwareImage from "../../Assets/ServiceImage/6Computersoftware.jpeg";
import laptopAmcImage from "../../Assets/ServiceImage/7LaptopAMC.jpeg";
import laptopAmcCorporateImage from "../../Assets/ServiceImage/8LaptopAMCforcorporate.jpeg";
import keyboardMouseRepairImage from "../../Assets/ServiceImage/9Keyboardmouserepair.jpg";
import networkingDevicesImage from "../../Assets/ServiceImage/10NetworkingDevices.jpg";
import EnquiryModal from "../EnquiryModal/EnquiryModal";

const Services = () => {
  const [open , setOpen]=useState(false)
  const handleClose = ()=> setOpen(false)

  const [enquiryTitle , setEnquiryTitle]= useState("")


  const handleOpen = (title)=>{
    setOpen(true);
    setEnquiryTitle(title)
  }


  const [services, setServices] = useState([
    {
      id: 1,
      img: computerHardwareImage,
      title: "Computer Hardware Amc",
      description:
        "Backed by a team of highly skilled staffs, we are able to render unmatched computer hardware AMC services.",
    },
    {
      id: 2,
      img: computerNetworkingImage,
      title: "Computer Networking Amc",
      description:
        "We have a team of highly qualified & experienced staffs for offering best computer networking AMC services.",
    },
    {
      id: 3,
      img: computerPeripheralImage,
      title: "Computer Peripheral Amc",
      description:
        "Backed by a team of highly experienced staffs, we are able to provide computer peripheral AMC services.",
    },
    {
      id: 4,
      img: computerPrinterImage,
      title: "Computer Printer Amc",
      description:
        "Now get an Annual Maintenance Contract of your computer printer at our outlet for a very good price.",
    },
    {
      id: 5,
      img: computerServerImage,
      title: "Computer Server Amc",
      description:
        "Backed by a team of highly experienced professionals, we are able to provide computer server AMC services.",
    },
    {
      id: 6,
      img: computerSoftwareImage,
      title: "Computer Software Amc",
      description:
        "Backed by a team of highly experienced professionals, we are able to provide computer software AMC services.",
    },
    {
      id: 7,
      img: laptopAmcImage,
      title: "Laptop Amc",
      description:
        "Repair and maintain your laptop and continue working with secured data. We offer AMC services.",
    },
    {
      id: 8,
      img: laptopAmcCorporateImage,
      title: "Laptop Amc For Corporate",
      description:
        "We indulge in providing AMC Services for computers to our valued clients at very reasonable price.",
    },
    {
      id: 9,
      img: keyboardMouseRepairImage,
      title: "Keyboard, Mouse Repairs",
      description:
        "We provide repairing services for all branded, non-branded keyboards and all types of mouse.",
    },
    {
      id: 10,
      img: networkingDevicesImage,
      title: "Networking Devices",
      description:
        "We provide repairing services for all kinds of networking devices like modem, routers and cables.",
    },
  ]);

  return (
    <div className="servicecontainer">
      <div className="wrapper">
        <h1>Services</h1>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <ServiceCard service={service}  handleOpen={handleOpen} />
            </Grid>
          ))}
        </Grid>
        <EnquiryModal handleClose={handleClose} open={open} enquiryTitle={enquiryTitle} />
      </div>
    </div>
  );
};

export default Services;
