//03.28min route start
import React, { Component } from "react";
import * as s from "./App.styles";
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

class App extends Component {
  state = {};

  render() {
    const backgroundImage = 'images/1.jpg"';
    const sidebarHeader = {
      fullName: "B2.PLATFORM ",
      shortName: "B2",
    };
    const menuItems = [
      {
        name: "Home",
        to: "/",
        icon: "fas fa-money-check",
        subMenuItems: [],
      },

      {
        name: "Node",
        to: "/node",
        icon: "fab fa-mendeley",
        subMenuItems: [
          { name: "Option1" },
          { to: "/" },
          { name: "Option2" },
          { to: "/" },
          { name: "Option3" },
          { to: "/" },
        ],
      },
      {
        name: "Network",
        to: "/network",
        icon: "fas fa-network-wired",
        subMenuItems: [
          { name: "Option1" },
          { to: "/" },
          { name: "Option2" },
          { to: "/" },
          { name: "Option3" },
          { to: "/" },
        ],
      },
      {
        name: "About",
        to: "/",
        icon: "fas fa-address-card",
        subMenuItems: [],
      },
    ];

    const fonts = {
      header: "Mukta",
      menu: "Mukta",
    };
    return (
      <s.App>
        <Sidebar
          backgroundImage={backgroundImage}
          sidebarHeader={sidebarHeader}
          menuItems={menuItems}
          fonts={fonts}
        />
        <MainView />
      </s.App>
    );
  }
}
export default App;
