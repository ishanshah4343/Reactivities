import { FilterList, Event } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import 'react-calendar/dist/Calendar.css';
import { Calendar } from "react-calendar/src/index.js";

const ActivityFilters = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, borderRadius: 3 }}>
      <Paper sx={{ borderRadius: 3, p: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 1, color: "primary.main" }}>
            <FilterList sx={{ mr: 1 }} />
            Filters
          </Typography>
          <MenuList>
            <MenuItem>
              <ListItemText primary="All Activities" />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm Going" />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm Hosting" />
            </MenuItem>
          </MenuList>
        </Box>
      </Paper>
      <Box component={Paper} sx={{ width: "100%", borderRadius: 3, p: 2 }}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 1, color: "primary.main"  }}>
          <Event sx={{ mr: 1 }} />
          Select Date
        </Typography>
        <Calendar />
      </Box>
    </Box>
  );
};
export default ActivityFilters;
