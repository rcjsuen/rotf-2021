import * as React from 'react';

export class Reputation extends React.Component {

  public render() {
    const towns = [
        {
          name: "Bremen",
          icon: "fa-fire",
          reputation: 60
        },
        {
          name: "Bryn Shander",
          icon: "fa-skull",
          reputation: 50
        },
        {
          name: "Caer-Dineval",
          icon: "fa-fish",
          reputation: 50
        },
        {
          name: "Caer-Konig",
          icon: "fa-fish",
          reputation: 50
        },
        {
          name: "Dougan's Hole",
          icon: "fa-fire",
          reputation: 50
        },
        {
          name: "Easthaven",
          icon: "fa-skull",
          reputation: 50
        },
        {
          name: "Good Mead",
          icon: "fa-fire",
          reputation: 50
        },
        {
          name: "Lonelywood",
          icon: "fa-fish",
          reputation: 50
        },
        {
          name: "Targos",
          icon: "fa-skull",
          reputation: 50
        },
        {
          name: "Termalaine",
          icon: "fa-fire",
          reputation: 50
        }
      ]
      
      return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Reputation</h6>
          </div>
          {towns.map(town => {
            let progressBarBg = "bg-warning";
            if (town.reputation > 50) {
              progressBarBg = "bg-info";
            }
            return (
              <div key={town.name} className="card-body">
                <div className="col mr-2">
                  <div className="row no-gutters align-items-center">
                    <div className="col">
                      <div className="mb-0 mr-3 font-weight-bold text-gray-800">{town.name}&nbsp;
                        <i className={`fas ${town.icon} fa-1x`}></i>
                        </div>
                    </div>
                    <div className="col">
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
                  </div>
                </div>
            )
          })}
        </div>
      );
    }
}
