import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          aria-label="to top"
          component="span"
          style={{ position: "fixed", bottom: "2vh", right: "5vh" }}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </IconButton>
      )}
    </div>
  );
};
export default ScrollToTop;
