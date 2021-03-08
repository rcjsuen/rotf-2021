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
            <Card title="Description" children="Bremen is located next to the Shaengarne River and is the westernmost town of the Ten Towns."/>
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
