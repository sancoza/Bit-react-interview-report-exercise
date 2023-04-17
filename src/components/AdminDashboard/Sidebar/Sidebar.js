import React from 'react';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {SidebarData.map((value, key) => {
          return (
           <li key={key} onClick={()=> {
             return value.element;
           }}>
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
