import * as React from 'react';

export class CardDefault extends React.Component<{ title: string }> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
        </div>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
