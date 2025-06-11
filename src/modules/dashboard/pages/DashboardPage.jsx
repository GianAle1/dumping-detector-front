import React from "react";
import { Container, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard de Power BI
      </Typography>
      <iframe
        title="Dashboard Power BI"
        src="https://app.powerbi.com/reportEmbed?reportId=8a233497-d500-45ef-9002-6c1428fd4f9b&autoAuth=true&ctid=717b9a79-1b91-41ab-a6f7-a579b46a9b41"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
      ></iframe>
    </Container>
  );
};

export default DashboardPage;
