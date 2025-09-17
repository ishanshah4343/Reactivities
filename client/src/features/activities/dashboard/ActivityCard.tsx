import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

const ActivityCard = ({ activity, selectActivity, deleteActivity }: Props) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city}/{activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined"></Chip>
        <Box sx ={{ display: "flex", gap: 2 }}>
          <Button
            onClick={() => selectActivity(activity.id)}
            size="medium"
            variant="contained"
          >
            View
          </Button>
          <Button
            onClick={() => deleteActivity(activity.id)}
            size="medium"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
export default ActivityCard;
