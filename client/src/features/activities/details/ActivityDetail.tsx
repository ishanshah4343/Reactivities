import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetail = ({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
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
        <Button
          onClick={cancelSelectActivity}
          color="inherit"
          size="medium"
          variant="contained"
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};
export default ActivityDetail;
