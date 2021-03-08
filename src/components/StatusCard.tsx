import * as React from 'react';

export class StatusCard extends React.Component<{ value: string, icon?: string, color: string, size: number, title: string, phase?: string}, { cardClass: string, value: string, icon: string, titleClass: string, title: string, color: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
        value: this.props.value,
        title: this.props.title,
        icon: 'fas fa-calendar fa-2x text-gray-300',
        color: 'primary',
        cardClass: '',
        titleClass:''
    }
  }

  componentDidMount() {
      this.setState({cardClass: `card border-left-${this.props.color} shadow h-100 py-2`})
      this.setState({icon: `fas fa-${this.props.icon} fa-2x text-gray-300`})
      this.setState({titleClass: `text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1`})
  }

  public render() {
    let moonPhase = <div></div>
    if (this.props.phase === "waxing-gibbous") {
        moonPhase = <img alt="waxing gibbous icon" width="32" height="32" src="https://static.wikia.nocookie.net/forgottenrealms/images/c/cf/Moon6-waneG.png/revision/latest?cb=20190216014303"/>
    }
    let cardClass = `col-xl-${this.props.size} col-md-6 mb-4`;
    return (
        <div className={cardClass}>
            <div className={this.state.cardClass}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={this.state.titleClass}>{this.props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={this.state.icon}></i>
                            {moonPhase}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
