import { useReducer, useState } from "react";
import { HeaderAdmin } from "../HeaderAdmin.js/HeaderAdmin";
import { NavPage } from "../Sidebar/NavPage";
import { Sidebar } from "../Sidebar/Sidebar";
import { SelectCandidate } from "../pages/SelectCandidate";
import { EditReportDetails } from "../pages/EditReportDetails";
import "./CreateReports.css";

const stateData = {
  OPEN_NAV: "open navPage",
  OPEN_CANDIDATE: "open canPage",
  OPEN__EDIT_REPORT: "open edit rep Page",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case stateData.OPEN_NAV:
      return {
        navPageIsOpened: true,
        candPageIsOpened: false,
        editRepIsOpened: false,
      };
    case stateData.OPEN_CANDIDATE:
      return {
        navPageIsOpened: false,
        candPageIsOpened: true,
        editRepIsOpened: false,
      };
    case stateData.OPEN__EDIT_REPORT:
      return {
        navPageIsOpened: false,
        candPageIsOpened: false,
        editRepIsOpened: true,
      };
    default:
      return {
        navPageIsOpened: false,
        candPageIsOpened: false,
        editRepIsOpened: false,
      };
  }

  // if (action.type === stateData.OPEN_NAV) {
  //   return {
  //     navPageIsOpened: true,
  //     candPageIsOpened: false,
  //     editRepIsOpened: false,
  //   };
  // }
  // if (action.type === stateData.OPEN_CANDIDATE) {
  //   return {
  //     navPageIsOpened: false,
  //     candPageIsOpened: true,
  //     editRepIsOpened: false,
  //   };
  // }
  // if (action.type === stateData.OPEN__EDIT_REPORT) {
  //   return {
  //     navPageIsOpened: false,
  //     candPageIsOpened: false,
  //     editRepIsOpened: true,
  //   };
  // } else {
  //   return {
  //     navPageIsOpened: false,
  //     candPageIsOpened: false,
  //     editRepIsOpened: false,
  //   };
  // }
};

export const CreateReports = () => {
  // const [navPageIsOpened, setNavPageIsOpened] = useState(false);
  // const [candPageIsOpened, setCandPageIsOpened] = useState(false);
  // const [editRepIsOpened, setEditRepIsOpened] = useState(false);

  const [stateObj, dispatchState] = useReducer(reducer, {
    navPageIsOpened: false,
    candPageIsOpened: false,
    editRepIsOpened: false,
  });

  const openNavPage = () => {
    // setNavPageIsOpened(() => true);
    // setCandPageIsOpened(() => false);
    // setEditRepIsOpened(() => false);
    dispatchState({ type: stateData.OPEN_NAV });
  };
  const openSelectCandPage = () => {
    // setCandPageIsOpened(() => true);
    // setNavPageIsOpened(() => false);
    // setEditRepIsOpened(() => false);
    dispatchState({ type: stateData.OPEN_CANDIDATE });
  };

  const openEditReportPage = () => {
    // setEditRepIsOpened(() => true);
    // setCandPageIsOpened(() => false);
    // setNavPageIsOpened(() => false);
    dispatchState({ type: stateData.OPEN__EDIT_REPORT });
  };

  const { navPageIsOpened, candPageIsOpened, editRepIsOpened } = stateObj;

  return (
    <div className="create-report">
      <HeaderAdmin />
      <div className="grid grid-cols-12 container">
        <aside className="col-span-3 h-screen p-10">
          <Sidebar
            onOpenNavPage={openNavPage}
            onOpenSelectCandpage={openSelectCandPage}
            onEditReport={openEditReportPage}
          />
        </aside>
        <article className="col-span-9 bg-green-500 h-screen pl-2">
          {navPageIsOpened && <NavPage />}
          {candPageIsOpened && <SelectCandidate />}
          {editRepIsOpened && <EditReportDetails />}
        </article>
      </div>
    </div>
  );
};
