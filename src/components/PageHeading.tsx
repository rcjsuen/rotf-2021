import * as React from 'react';

export class PageHeading extends React.Component<{ title: string }> {

  public render() {
      return (
        < div className="d-sm-flex align-items-center justify-content-between mb-4" >
              <h1 className="h3 mb-0 text-gray-800">{this.props.title}</h1>
              {/* <a href="https://www.dndbeyond.com/" className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm">D&amp;D Beyond</a> */}
        </div >
      );
  }
}
