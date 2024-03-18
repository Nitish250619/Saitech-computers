import * as React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ name , handleOpen}) { // Renamed to CustomButton
  return (
    <div>
      <Button
      onClick={handleOpen}
        variant="contained"
        sx={{
          color: '#f5b921', // Text color
          backgroundColor: '#1f5156', // Background color
          '&:hover': {
            backgroundColor: '#153b40', // Darken background color on hover
          },
          borderRadius: '10px', // Adjust the border radius
          padding: '12px 24px', // Adjust the padding to increase the size
        }}
      >
        {name}
      </Button>
    </div>
  );
}
