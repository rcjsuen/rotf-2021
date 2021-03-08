import * as React from 'react';

import { BulletList } from './Bulletlist';
import { Party } from './Party';
import { Reputation } from './Reputation';
import { StatusCard } from './StatusCard';

export class Main extends React.Component {
  componentWillMount() {
    // document.getElementById('body').className = 'page-top'
  }

  render() {
    return (
      <div className="container-fluid" style={{paddingTop: 20}}>

        {/* <!-- Page Heading --> */}

        {/* <PageHeading title="Rime of the Frostmaiden" /> */}

        {/* <!-- Header Tiles Row --> */}
        <div className="row">
          <StatusCard title="Upcoming Session"
            size={4}
            color="primary"
            icon="calendar"
            value="Thursday, March 18th, 2021 at 18:00" />

          <StatusCard title="Calendar of Harptos"
            size={4}
            icon="calendar"
            color="info"
            value="1498 DR, 3rd Day of Ches" />

          <StatusCard title="Moon Phase"
            size={4}
            color="warning"
            phase="waxing-gibbous"
            value="Waxing Gibbous" />
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          <div className="col-xl-3 col-lg-6">
            <Party/>
          </div>
          <div className="col-xl-6 col-lg-6">
            <BulletList title="Next Steps"
                bullets={[
                  {
                    items: [
                      "talk to Dorbulgruf Shalescar, the Speaker for Bremen",
                      "travel to Bryn Shander (Targos is on the way)",
                      "gather information and rumours at inns and taverns",
                    ]
                  }
                ]} />
              <BulletList title="Recap"
                bullets={[
                  {
                    header: "Bremen",
                    items: [
                      "hear of Cora's missing son, Huarwar, suspected to be at Caer-Dineval",
                      "Dorbulgruf Shalescar seems to go missing at times for no reasons",
                      "hear of some people going to Kelvin's Cairn",
                      "helped Grynsk Berylbore go fishing",
                      "discovered an awakened plesiosaurus, working for a druid named Ravisin",
                    ]
                  }
                ]} />
          </div>
          <div className="col-xl-3 col-lg-6">
            <Reputation />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;