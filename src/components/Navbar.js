/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Services Us",
      icon: <DesignServicesIcon />,
    },
    {
      text: "Why Us",
      icon: <QuestionMarkIcon />,
    },
    {
      text: "Our Goals",
      icon: <TrackChangesIcon />,
    },

  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" style={{width:'75%', height:'75%'}}/>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Servies Us</a>
        <a href="">Wny Us</a>
        <a href="">Our Goals</a>
        <button className="primary-button">Contact Us</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;