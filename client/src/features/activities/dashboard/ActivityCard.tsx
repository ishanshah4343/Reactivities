import { AccessTime } from "@mui/icons-material";
import Place from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: Props) => {
  const isHost = false; // Replace with actual logic to determine if the user is the host
  const isGoing = false; // Replace with actual logic to determine if the user is going
  const label = isHost ? "You are hosting this activity" : "You are going to this activity";
  const isCancelled = false; // Replace with actual logic to determine if the activity is cancelled
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";

  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <Box display={"flex"} justifyContent="space-between" alignItems="center" p={2}>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          titleTypographyProps={{ fontWeight: "bold", fontSize: "20" }}
          subheader={
            <>
              Hosted by{""} <Link to={`/profile/bob`}>BOB</Link>
            </>
          }
        />
        <Box display="flex" flexDirection="column" gap={2} mr={2}>
          {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
          {isCancelled && <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ p: 0 }}>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <AccessTime sx={{ ml: 1 }} />
          <Typography variant="body2">{activity.date}</Typography>
          <Place sx={{ mr: 1, ml: 3 }} />
          <Typography variant="body2">
            {activity.venue}, {activity.city}
          </Typography>
          <Divider />
          <Box display={"flex"} gap={2} sx={{ backgroundColor: "grey.200", py: 1, pl: "auto" }}>
            Attendees go here
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2}}>
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          component={Link}
          to={`/activities/${activity.id}`}
          size="medium"
          variant="contained"
          sx={{ display: "flex", justifySelf: "self-end", borderRadius: 3 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};
export default ActivityCard;
