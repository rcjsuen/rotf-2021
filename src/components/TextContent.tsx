import * as React from 'react';
import { Card } from './Card';
import { PageHeading } from './PageHeading';

export class TextContent extends React.Component<{title: string, children?: string}> {

  public render(): JSX.Element {
    return (
      <div className="container-fluid" style={{paddingTop: 20}}>
        <PageHeading title={this.props.title}/>
        <div className="row">
          <div className="col-xl-12 col-lg-6">
            <Card title="Description" children={this.props.children}/>
          </div>
        </div>
      </div>
    )
  }
}
