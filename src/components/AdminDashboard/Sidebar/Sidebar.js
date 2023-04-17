import React from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router";
export const Sidebar = ({
  onOpenNavPage,
  onOpenSelectCandpage,
  onEditReport,
}) => {
  const sideBarDataMutated = SidebarData.map((el, index) => {
    if (index === 0) {
      return { ...el, handler: onOpenNavPage };
    }
    if (index === 1) {
      return { ...el, handler: onOpenSelectCandpage };
    }
    if (index === 2) {
      return { ...el, handler: onEditReport };
    } else {
      return el;
    }
  });

  return (
    <div className="sidebar">
      <ul>
        {sideBarDataMutated.map((value, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                value.handler();
                return value.element;
              }}
            >
              <div key={key}>
                <div>{value.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
