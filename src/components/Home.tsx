import * as React from 'react';
import { Copyright } from './Copyright';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export const Home: React.VFC = () => {
  return (
    <div>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              {/* <Topbar /> */}
              {/* <!-- End of Topbar --> */}
              <Main />
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <Copyright/>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
    </div>
  )
  
};
