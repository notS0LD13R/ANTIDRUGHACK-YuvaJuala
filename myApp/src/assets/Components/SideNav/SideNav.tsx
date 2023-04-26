import { useState } from "react";
import "./SideNav.scss";

import { HiDocumentText  } from "react-icons/hi";
import {FaBlogger} from 'react-icons/fa'
import { AiOutlineMenu } from "react-icons/ai";

export default function SideNav(props: { setLink: any }) {
  const iconAttr = {
    color: "white",
    size: "2.5rem",
  };

  const [open, setOpen] = useState(false);

  const handleMenuClick = (val: boolean) => {
    setOpen(val);
  };

  return (
    <div
      className={`SideNav ${+open ? "open" : ""}`}
      onMouseEnter={() => handleMenuClick(true)}
      onMouseLeave={() => handleMenuClick(false)}
    >
      <span className="MenuButton">
        <AiOutlineMenu color="white" size="2.5rem" className="MenuIcon" />
      </span>

      <span onClick={() => props.setLink("report")}>
        <HiDocumentText {...iconAttr} />
        <i>Reports</i>
      </span>

      <span onClick={() => props.setLink("blog")}>
        <FaBlogger {...iconAttr} />
        <i>Blog</i>
      </span>
      
    </div>
  );
}
