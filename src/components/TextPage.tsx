import * as React from 'react';
import { convertName } from './App';
import { Copyright } from './Copyright';
import { Sidebar } from './Sidebar';
import { TextContent } from './TextContent';

export class TextPage extends React.Component {

  public render(): JSX.Element {
    const content = new Map<string, string>();
    content.set("Cora Mulphoon", "Owner of the Buried Treasures inn in Bremen.");
    content.set("Kelvin's Cairn", "Kelvin's Cairn is a mountain in Icewind Dale.");
    content.set("Plesiosaurus", "The plesiosaurus is a large reptile. It has been sighted in the waters around Bremen.");
    const name = convertName((this.props as any).location.pathname);
    return (
      <div>
        <div id="wrapper">
          <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
              <TextContent title={name} children={content.get(name)}/>
              </div>
              <Copyright/>
            </div>
          </div>
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
      </div>
    )
  }
}
