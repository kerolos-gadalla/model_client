import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {
  getDemoPath,
  getPlaygroundPath,
  getTesseractPath,
} from "./utils/pathUtils";

type NavItemD = {
  title: string;
  navTo: string;
};

function MyBasicExample({ items }: { items: NavItemD[] }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          {items.map((item) => {
            return (
              <Nav.Link key={item.navTo} href={item.navTo}>
                {item.title}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}

const build_path = (...args: string[]) => {
  return args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[/]*$/g, "");
      } else {
        return part.trim().replace(/(^[/]*|[/]*$)/g, "");
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
