import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Likes } from "./Likes";
import ShareIcon from "@mui/icons-material/Share";

const Loading = () => {
  return (
    <Stack spacing={1}>
      <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "50px" }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width={345} height={250} />
        <CardActions disableSpacing>
          <Likes />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Loading;
