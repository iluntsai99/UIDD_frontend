import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from "react-router-dom";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (value === 0) {
        navigate("/home");
    } else if (value === 1) {
        navigate("/chats");
    } else if (value === 2) {
        navigate("/groups");
    } else if (value === 3) {
        navigate("/heart");
    } else if (value === 4) {
        navigate("/profile");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction icon={<ChatOutlinedIcon />} />
          <BottomNavigationAction icon={<GroupsOutlinedIcon />} />
          <BottomNavigationAction icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction icon={<PermIdentityIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
