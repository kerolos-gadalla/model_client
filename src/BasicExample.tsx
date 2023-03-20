import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getDemoPath, getPlaygroundPath, getTesseractPath } from "./utils/pathUtils";

type NavItemD = {
  title: string;
  navTo: string;
};

function MyBasicExample({ items }: { items: NavItemD[] }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {items.map((item) => {
          return <Navbar.Brand href={item.navTo}>{item.title}</Navbar.Brand>;
        })}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

const build_path = (...args: string[]) => {
  return args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[\/]*$/g, "");
      } else {
        return part.trim().replace(/(^[\/]*|[\/]*$)/g, "");
      }
    })
    .filter((x) => x.length)
    .join("/");
};

export const BasicExample = ({
  baseURLPath = "",
}: {
  baseURLPath: string | undefined;
}) => {
  const items: NavItemD[] = [
    { navTo: getDemoPath(), title: "DEMO" },
    { navTo: getPlaygroundPath(), title: "Playground" },
    { navTo: getTesseractPath(), title: "getTesseract" },
  ].map(({ navTo, title }) => {
    return { navTo: build_path(baseURLPath, navTo), title };
  });

  return <MyBasicExample items={items} />;
};
