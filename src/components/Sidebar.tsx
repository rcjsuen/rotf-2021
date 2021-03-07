import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Sidebar: React.VFC = () => {
  const toggled = false;
  return (
    <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a> */}

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item">
      {/* <Link className="nav-link" to="/">
        <i className="fas fa-dice-d20"></i>
        <span>Rime of the Frostmaiden</span></Link> */}
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
      World
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
      <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapseTwo"  aria-controls="collapseTwo">
        <i className="fas fa-home"></i>
        <span>Ten Towns</span>
      </a>
      <div id="collapseTwo" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <Link className="collapse-item" to="/towns/bremen">Bremen</Link> */}
        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-map-marker-alt"></i>
        <span>Locations</span>
      </a>
      <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <Link className="collapse-item" to="/locations/kelvin's_cairn">Kelvin's Cairn</Link> */}
        </div>
      </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
      Inhabitants
    </div>

    {/* <!-- Nav Item - Charts --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBestiary" aria-expanded="true" aria-controls="collapseBestiary">
        <i className="fas fa-dragon"></i>
        <span>Bestiary</span>
      </a>
      <div id="collapseBestiary" className="collapse" aria-labelledby="headingBestiary" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <Link className="collapse-item" to="/bestiary/plesiosaurus">Plesiosaurus</Link> */}
        </div>
      </div>
    </li>

    {/* <!-- Nav Item - Tables --> */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseNPCs" aria-expanded="true" aria-controls="collapseNPCs">
        <i className="fas fa-male"></i>
        <span>NPCs</span>
      </a>
      <div id="collapseNPCs" className="collapse" aria-labelledby="headingNPCs" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <Link className="collapse-item" to="/npcs/cora_mulphoon">Cora Mulphoon</Link> */}
        </div>
      </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider d-none d-md-block" />

    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    <div className="text-center d-none d-md-inline">
      {/* <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button> */}
    </div>

    </ul>
  )
  
};
