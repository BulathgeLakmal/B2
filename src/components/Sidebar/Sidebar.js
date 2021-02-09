//03.28min route start
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  const {
    backgroundImage = "",
    sidebarHeader = {
      fullName: "",
      shortName: "",
    },

    menuItems = [],
    fonts = { header: "", menu: "" },
  } = props;

  //state
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubmenus] = useState({});

  //Effects

  //update of header state
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 0)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  //missing 1------------------
  // const handleMenuItemClick = (name) => {
  //   setSelectedMenuItem(name);
  // };

  //update sidebar state
  useEffect(() => {
    const updateWidnwoWidth = () => {
      if (window.innerWidth < 1020 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true);
    };

    window.addEventListener("resize", updateWidnwoWidth);

    return () => window.removeEventListener("resize", updateWidnwoWidth);
  }, [isSidebarOpen]);
  //----------------------------------------------------------------------------------------------
  //add index of menu items width submenus to state
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["isSelected"] = null;
      }
    });
    setSubmenus(newSubmenus);
  }, [menuItems]);

  const states = {
    1: {
      isOpen: false,
      selected: null,
    },
  };

  //unknown box
  // useEffect(() => {}, [menuItems, subMenuItemStates]);

  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates)); //this copy has no reference to initial object

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusCopy[index]["isOpen"];
      setSubmenus(subMenusCopy);
    }
  };
  //unknown box

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    const hasSubmenus = !!item.subMenuItems.length;

    const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null;
    //const isOpen = subMenusStates[index]?.isOpen;  ----------->  same code another way

    const subMenusJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        return <s.SubMenuItem>{subMenuItem.name}</s.SubMenuItem>;
      }
    );

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            key={index}
            font={fonts.menu}
            selected={isItemSelected}
            onClick={() => handleMenuItemClick(item.name, index)}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
          >
            <s.Icon isSidebarOpen={isSidebarOpen}>
              {/* <i class={item.icon} style={{ paddingRight: "20px" }}></i> */}
              <i class={item.icon} style={{ paddingRight: "20px" }}></i>

              <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
              {hasSubmenus && isSidebarOpen && (
                <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
              )}
            </s.Icon>
          </s.MenuItem>
        </Link>

        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenusJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer
      backgroundImage={backgroundImage}
      isSidebarOpen={isSidebarOpen}
    >
      <s.sidebarHeader font={fonts.header}>{header}</s.sidebarHeader>
      <s.menuItemContainer>{menuItemsJSX}</s.menuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Togler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};
export default Sidebar;
