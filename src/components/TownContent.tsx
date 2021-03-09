import * as React from 'react';
import { BulletList } from './BulletList';
import { Card } from './Card';
import { PageHeading } from './PageHeading';
import { TownOverview } from './TownOverview';

export class TownContent extends React.Component<{town: string}> {

  public render(): JSX.Element {
    return (
      <div className="container-fluid" style={{paddingTop: 20}}>
        <PageHeading title={this.props.town}/>
        <div className="row">
          <div className="col-xl-9 col-lg-6">
            <Card title="Description" paragraphs={
              [
                "Bremen is located next to the Shaengarne River and is the westernmost town of the Ten Towns. It was originally founded by a group of dwarven prospectors and prospectors still visit to this day for a chance to try their luck on the Shaengarne. Bremen is susceptible to annual floods so houses are either built on stilts or further inland away from the river.",
                "Unfortunately, the everlasting winter brought on by Auril has caused most of the river to freeze up so business is down across the board in Bremen."
              ]
            }/>
          </div>
          <div className="col-xl-3 col-lg-6">
            <TownOverview town={this.props.town}/>
            <BulletList title="Locations of Interest"
              bullets={[
                {
                  items: [
                    "Buried Treasures"
                  ]
                }
              ]} />
          </div>
        </div>
      </div>
    )
  }
}
