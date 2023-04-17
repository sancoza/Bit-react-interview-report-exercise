import { HeaderAdmin } from '../HeaderAdmin.js/HeaderAdmin';
import { NavPage } from '../Sidebar/NavPage';
import { Sidebar } from '../Sidebar/Sidebar';
import './CreateReports.css';

export const CreateReports = () => {
  return (
    <div className="create-report">
      <HeaderAdmin />
      <div className="grid grid-cols-12 container">
        <aside className="col-span-3 h-screen p-10">
          <Sidebar />
        </aside>
        <article className="col-span-9 bg-green-500 h-screen pl-2">
          <NavPage />
        </article>
      </div>
      
    </div>

  );
};
