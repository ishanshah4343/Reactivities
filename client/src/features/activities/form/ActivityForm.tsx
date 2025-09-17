import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
};

const ActivityForm = ({ activity, closeForm ,submitForm}: Props) => {

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const data:{[key:string]:FormDataEntryValue}={};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if(activity) data.id = activity.id;

    submitForm(data as unknown as Activity);
  }

  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          placeholder="Description"
          multiline
          rows={3}
        />
        <TextField name="category" label="Category" defaultValue={activity?.category} />
        <TextField name="date" label="Date" type="date" defaultValue={activity?.date} />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
          <Button onClick={closeForm} color="inherit">
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default ActivityForm;
