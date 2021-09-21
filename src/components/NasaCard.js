import * as React from "react";
import { Likes } from "./Likes";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { TransitionsModal } from "./Modal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NasaCard({ ...props }) {
  const [expanded, setExpanded] = React.useState(false);
  const { title, url, date, explanation, id, isFavorite } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "50px" }}>
      <CardHeader title={title} subheader={date} />
      <CardMedia component="img" height="300" image={url} alt={title} />
      <CardActions disableSpacing>
        <Likes {...props} />
        <IconButton aria-label="share">
          <TransitionsModal url={url} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {!expanded ? (
        <CardContent>
          <Typography noWrap>{explanation}</Typography>
        </CardContent>
      ) : (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{explanation}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
