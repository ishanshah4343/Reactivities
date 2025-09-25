import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetail = ({ selectedActivity, cancelSelectActivity, openForm }: Props) => {
  const { activities } = useActivities();
  const activity = activities?.find((a: { id: string; }) => a.id === selectedActivity.id);

  if (!activity) return <span>Activity not found!</span>;
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
          onClick={() => openForm(activity.id)}
          color="primary"
          size="medium"
          variant="contained"
        >
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="inherit" size="medium" variant="contained">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};
export default ActivityDetail;
