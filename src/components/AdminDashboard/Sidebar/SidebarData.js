import { SelectCandidate } from "../pages/SelectCandidate";
import { SelectCompany } from "../pages/SelectCompany";
import { EditReportDetails } from "../pages/EditReportDetails";

export const SidebarData = [
  {
    title: (
      <div>
        <span className="numberCircle m-2">
          <span>1</span>
        </span>
        Select Candidate
      </div>
    ),

    element: <SelectCandidate />,
    link: "/reports/create/candidate",
  },
  {
    title: (
      <div>
        <span className="numberCircle m-2">
          <span>2</span>
        </span>
        Select Company
      </div>
    ),
    link: "/reports/create/company",
    element: <SelectCompany />,
  },
  {
    title: (
      <div>
        <span className="numberCircle m-2">
          <span>3</span>
        </span>
        Fill Repor Details
      </div>
    ),

    element: <EditReportDetails />,
    link: "/reports/create/deetails",
  },
];
