import React from "react";
import {
  Typography,
  Paper,
  Box,
  Divider,
  Container,
  useTheme,
} from "@mui/material";
import Layout from "../../../components/Layout";

const DashboardPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h4" gutterBottom>
            📊 Dashboard de Power BI
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              width: "100%",
              height: "600px",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <iframe
              title="Dashboard Power BI"
              src="https://app.powerbi.com/reportEmbed?reportId=8a233497-d500-45ef-9002-6c1428fd4f9b&autoAuth=true&ctid=717b9a79-1b91-41ab-a6f7-a579b46a9b41"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "inherit",
              }}
            ></iframe>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
