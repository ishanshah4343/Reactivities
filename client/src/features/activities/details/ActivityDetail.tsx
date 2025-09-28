import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

const ActivityDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;
  if (!activity) return <Typography>Activity not found!</Typography>;
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <Typography variant="h3">{activity.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/manage/${activity.id}`)}
          color="primary"
          size="medium"
          variant="contained"
        >
          Edit
        </Button>
        <Button onClick={() => navigate("/activities")} color="inherit" size="medium" variant="contained">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};
export default ActivityDetail;
