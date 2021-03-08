import * as React from 'react';

export class Party extends React.Component {

  public render() {
      return (
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Party</h6>
              </div>
              <div className="card-body">
                  <p>Level: <b>2</b></p>
                  <ul>
                      <li>Bruxushk (Lizardfolk Ranger)</li>
                      <li>Jamie Shiver (Half-Orc Paladin)</li>
                      <li>Karthos "Destiny" (Tiefling Bard)</li>
                      <li>Nerdawdgikix (Tiefling Sorcerer)</li>
                  </ul>
              </div>
          </div>
      );
  }
}
