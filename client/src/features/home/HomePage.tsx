import Group from "@mui/icons-material/Group";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <Paper
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg,#182a73 0%,#218aae 69%,#20a7ae 89%)",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, color: "white" }}>
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1" fontWeight="bold">
          Reactivities
        </Typography>
      </Box>
      <Typography variant="h2">Welcome to Reactivities</Typography>
      <Button
        component={Link}
        to="/activities"
        variant="contained"
        size="large"
        sx={{ height: 80, borderRadius: 4, fontSize: "1.5rem" }}
      >
        Go to Activities
      </Button>
    </Paper>
  );
};
export default HomePage;
