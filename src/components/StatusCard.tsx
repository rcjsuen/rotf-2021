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
        moonPhase = (
            <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:Emojione_1F314.svg">
                <img width="32"
                    alt="Emojione 1F314"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Emojione_1F314.svg/512px-Emojione_1F314.svg.png" />
            </a>
        )
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
