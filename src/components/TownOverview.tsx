import * as React from 'react';

interface Town {
  name: string,
  population: number,
  leader: string,
  sacrifice: string,
  icon: string,
  reputation: number
}

export class TownOverview extends React.Component<{town: string}> {

  public render(): JSX.Element {
    const towns = new Map<string, Town>();
    towns.set("Bremen", {
        name: "Bremen",
        population: 150,
        leader: "Speaker Dorbulgruf Shalescar",
        sacrifice: "Warmth",
        icon: "fa-fire",
        reputation: 60
      }
    );
    
    const town = towns.get(this.props.town) as Town;
    let progressBarBg = "bg-warning";
    if (town.reputation > 50) {
      progressBarBg = "bg-info";
    }
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Overview</h6>
        </div>
        <div className="card-body">
          <p>
            <b>Population:</b> {town.population}<br/>
            <b>Leader:</b> {town.leader}<br/>
            <b>Sacrifice to Auril:</b> {town.sacrifice} <i className={`fas ${town.icon} fa-1x`}></i>
          </p>
          <div className="progress progress-sm">
            <div className={`progress-bar ${progressBarBg}`}
                role="progressbar"
                style={{ width: `${town.reputation}%` }}
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
