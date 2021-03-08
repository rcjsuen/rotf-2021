import * as React from 'react';

export class Copyright extends React.Component {

  public render(): JSX.Element {
    return (
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Remy Suen 2021</span>
          </div>
        </div>
      </footer>
    )
  }
}
