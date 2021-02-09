//03.28min route start

import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "15%")}
    ${(p) =>
      !p.isSidebarOpen &&
      `
    padding-left: 10px;
    `};

  max-width: 20%;
  min-width: 20px;
  background-image: linear-gradient(
      45deg,
      rgba(5, 6, 59, 0.9) 30%,
      rgba(255, 43, 5, 0.8) 90%
    ),
    url("images/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  height: 100vh;
  position: relative;
`;
// background: linear-gradient(0deg, #05ffc9, #05ffa7);

export const sidebarHeader = styled.h1`
  font-size: 18px;
  font-weight: 500;
  ${(p) =>
    !p.isSidebarOpen &&
    `
    padding: 20px 40px 20px 20px;
    `};

  text-align: center;
  letter-spacing: 3px;
  font-family: ${(p) => p.font};
`;

export const menuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
    padding: 5px 20px;

    ${p.selected && "backgorund-color: #258963"} 

    //background-color: rgba(0, 0, 0, 0.05);
    text-align: right;
    ${p.selected && "backgorund-color: rgba(0,0,0,0.6);"} 
    `};

  ${(p) =>
    p.isSidebarOpen &&
    `
    padding: 15px 30px;
  `};

  whtie-space: nowrap;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  color: ${(p) =>
    p.selected ? "rgba(255,228,228,1)" : "rgba(143, 129, 129, 1)"};
  transition: 0.2s ease-in all;
  display: block;
  font-family: ${(p) => p.font};
  position: relative;

  &: hover {
    color: rgba(255, 228, 228);
    transition: 0.2s ease-in all;
  }

  &:after {
    content: "";
    ${(p) =>
      p.isSidebarOpen &&
      `
      border: 1px solid;
    `};

    ${(p) => (p.selected ? "rgba(255,228,228,1)" : "rgba(143, 129, 129, 1)")};
    display: ${(p) =>
      p.isSidebarOpen && p.selected && p.isOpen ? "none" : "block"};
  }

  ${(p) =>
    !p.selected &&
    `
    &:hover {
      &:after{
        ${(p) =>
          p.isSidebarOpen &&
          `
          border: 1px solid rgba(255,255,255,0.6);
        `};
        
        transition: 0.2s;
      }
    }  
  `}
`;

export const Icon = styled.div``;

export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
  cursor: pointer;
`;

//sub menu items
export const SubMenuItemContainer = styled.div`
  cursor: pointer;SIDEBAT
  font-size: 17px;
  ${(p) => p.isSidebarOpen && "padding-left: 15%"};
  ${(p) => !p.isSidebarOpen && "text-align: center"};
`;
export const SubMenuItem = styled.p`
  color: rgba(143, 129, 129, 1);

  &: hover {
    color: rgba(255, 228, 228, 1);
  }
`;

export const DropdownIcon = styled.span`
  position: absolute;
  top: ${(p) => (p.isOpen ? "28px" : "25px")};
  border: solid #fff;
  border-width: 0 1px 1px 0;
  padding: 3px;
  margin-left: 10px;
  transform: ${(p) => (p.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  right: 1;
  transition: 0.2s;
`;

//togler---------------
export const TogglerContainer = styled.div`
  position: absolute;
  width: 20%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Togler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.05em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0, 0 1.5em 0 0 #fff;
  }
`;
