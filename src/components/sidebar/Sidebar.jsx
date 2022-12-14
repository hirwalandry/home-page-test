import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import  SidebarNav  from './SidebarNav';

function Sidebar({ pages, open, variant, onClose }) {
    return (
      <Drawer
        anchor="left"
        onClose={() => onClose()}
        open={open}
        variant={variant}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 280,
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            padding: 1,
          }}
        >
          <SidebarNav onClose={onClose}  pages={pages} />
        </Box>
      </Drawer>
    );
}

export default Sidebar;