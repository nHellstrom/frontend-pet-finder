import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/material';
import { yellow } from '@mui/material/colors';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
  
    return (
      <Box sx={{ width: 370 }}>
        <BottomNavigation
         sx={{ position: 'fixed', bottom: 0, width: 1.0 }}
        >
          <BottomNavigationAction label="Recent" icon={<HomeIcon color="success" />} />
          <BottomNavigationAction label="Favorites" icon={<RestoreIcon color="success"/>} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    );
  }