import * as React from 'react';
import { convertName } from './App';
import { Copyright } from './Copyright';
import { Sidebar } from './Sidebar';
import { TownContent } from './TownContent';

export class TownPage extends React.Component {

  public render(): JSX.Element {
    const town = convertName((this.props as any).location.pathname);
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

                <TownContent town={town}/>

                {/* <!-- Topbar --> */}
                {/* <Topbar /> */}
                {/* <!-- End of Topbar --> */}
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
  }
}
