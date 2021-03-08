import * as React from 'react';

export class BulletList extends React.Component<{title: string, bullets: any[]}> {

  public render() {
      return (
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
              </div>
              <div className="card-body">
                  {this.props.bullets.map(bullet => {
                      let key = bullet.header;
                      if (!key) {
                          key = "key";
                      }
                      return <div key={key}>{bullet.header}
                          <ul>
                              {bullet.items.map((item: string) => {
                                  return <li key={item}>{item}</li>
                              })}
                          </ul>
                      </div>
                  })}
              </div>
          </div>
      );
  }
}
