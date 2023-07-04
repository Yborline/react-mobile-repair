import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { Ul, Li, Div } from "./NavbarMobile.styled";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

const pathNavbar = [
  {
    path: "/",
    text: "Прийом",
    id: 1,
  },
  { path: "/repair", text: "Ремонт", id: 2 },
  { path: "/diagnosis", text: "Діагностика", id: 3 },
  { path: "/telephones", text: "Телефони", id: 4 },
  { path: "/spareParts", text: "Запчастини", id: 5 },
  { path: "Accounting", text: "Бухгалтерія", id: 6 },
  { path: "/history", text: "Історія", id: 7 },
];

export default function NavbarMobile() {
  const [state, setState] = React.useState(
    // top: false,
    // left: false,
    false
    // right: false,
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Ul>
        {pathNavbar.map(({ path, text, id }) => (
          <Li key={id} disablePadding>
            <NavLink style={{ width: "100%" }} to={path}>
              {text}
            </NavLink>
          </Li>
        ))}
      </Ul>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Div>
      <Button onClick={toggleDrawer(true)}>{"right"}</Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Div>
  );
}
