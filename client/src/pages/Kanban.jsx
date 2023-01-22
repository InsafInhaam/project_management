import React from "react";
import Sidebar from "../components/Sidebar";

const Kanban = () => {
  return (
    <>
      <div className="layout layout-nav-side">
        <Sidebar/>
        <div className="main-container">
          <div className="navbar bg-white breadcrumb-bar">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Overview</a>
                </li>
                <li className="breadcrumb-item"><a href="pages-app.html#">App Pages</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Kanban Board</li>
              </ol>
            </nav>
            <div className="dropdown">
              <button className="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
                <i className="material-icons">settings</i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#project-edit-modal">Edit Project</a>
                <a className="dropdown-item" href="#">Share</a>
                <a className="dropdown-item" href="#">Mark as Complete</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="#">Archive</a>
              </div>
            </div>
          </div>
          <div className="container-kanban">
            <div className="container-fluid page-header d-flex justify-content-between align-items-start">
              <div>
                <h1>Brand Concept and Design</h1>
                <p className="lead d-none d-md-block">Research, ideate and present brand concepts for client consideration</p>
              </div>
              <div className="d-flex align-items-center">
                <ul className="avatars">
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Claire Connors">
                      <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Marcus Simmons">
                      <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Peggy Brown">
                      <img alt="Peggy Brown" className="avatar" src="assets/img/avatar-female-2.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Harry Xai">
                      <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Sally Harper">
                      <img alt="Sally Harper" className="avatar" src="assets/img/avatar-female-3.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Ravi Singh">
                      <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Kristina Van Der Stroem">
                      <img alt="Kristina Van Der Stroem" className="avatar" src="assets/img/avatar-female-4.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="David Whittaker">
                      <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                    </a>
                  </li>
                </ul>
                <button className="btn btn-round flex-shrink-0" data-toggle="tooltip" data-placement="top" title="Add User">
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
            <div className="kanban-board container-fluid mt-lg-3">
              <div className="kanban-col">
                <div className="card-list">
                  <div className="card-list-header">
                    <h6>Backlog</h6>
                    <div className="dropdown">
                      <button className="btn-options" type="button" id="cardlist-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item text-danger" href="#">Archive List</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-body">
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>A/B testing</h6></a>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Email template</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>-/-</span>
                          </div>
                          <span className="text-small">Unscheduled</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-15" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Adwords</h6></a>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-16" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>DNS changeover</h6></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-footer">
                    <button className="btn btn-link btn-sm text-small">Add task</button>
                  </div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="card-list">
                  <div className="card-list-header">
                    <h6>Waiting</h6>
                    <div className="dropdown">
                      <button className="btn-options" type="button" id="cardlist-dropdown-button-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item text-danger" href="#">Archive List</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-body">
                    <div className="card card-kanban">
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '12%'}} aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>HTML / CSS templates</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>1/8</span>
                          </div>
                          <span className="text-small">Due 10 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Photography</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kerri-Anne">
                              <img alt="Kerri-Anne Banks" className="avatar" src="assets/img/avatar-female-5.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Masimba">
                              <img alt="Masimba Sibanda" className="avatar" src="assets/img/avatar-male-5.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>0/5</span>
                          </div>
                          <span className="text-small">Due 12 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Illustrations</h6></a>
                        </div>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>0/6</span>
                          </div>
                          <span className="text-small">Due 12 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Device testing</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Masimba">
                              <img alt="Masimba Sibanda" className="avatar" src="assets/img/avatar-male-5.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kerri-Anne">
                              <img alt="Kerri-Anne Banks" className="avatar" src="assets/img/avatar-female-5.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>0/18</span>
                          </div>
                          <span className="text-small">Due 16 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-footer">
                    <button className="btn btn-link btn-sm text-small">Add task</button>
                  </div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="card-list">
                  <div className="card-list-header">
                    <h6>Doing</h6>
                    <div className="dropdown">
                      <button className="btn-options" type="button" id="cardlist-dropdown-button-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item text-danger" href="#">Archive List</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-body">
                    <div className="card card-kanban">
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Copywriting</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img alt="Peggy Brown" className="avatar" src="assets/img/avatar-female-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>2/4</span>
                          </div>
                          <span className="text-small">Due 4 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Hi-fidelity mockups</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="David">
                              <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kristina">
                              <img alt="Kristina Van Der Stroem" className="avatar" src="assets/img/avatar-female-4.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>6/8</span>
                          </div>
                          <span className="text-small">Due Tomorrow</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Source placeholders</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>2/10</span>
                          </div>
                          <span className="text-small">Due 2 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-footer">
                    <button className="btn btn-link btn-sm text-small">Add task</button>
                  </div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="card-list">
                  <div className="card-list-header">
                    <h6>In Review</h6>
                    <div className="dropdown">
                      <button className="btn-options" type="button" id="cardlist-dropdown-button-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item text-danger" href="#">Archive List</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-body">
                    <div className="card card-kanban">
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-17" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Establish build process</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kerri-Anne">
                              <img alt="Kerri-Anne Banks" className="avatar" src="assets/img/avatar-female-5.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>4/4</span>
                          </div>
                          <span className="text-small">Due Today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-footer">
                    <button className="btn btn-link btn-sm text-small">Add task</button>
                  </div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="card-list">
                  <div className="card-list-header">
                    <h6>Done</h6>
                    <div className="dropdown">
                      <button className="btn-options" type="button" id="cardlist-dropdown-button-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item text-danger" href="#">Archive List</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-body">
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Define Scope</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kristina">
                              <img alt="Kristina Van Der Stroem" className="avatar" src="assets/img/avatar-female-4.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Claire">
                              <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>3/3</span>
                          </div>
                          <span className="text-small">18 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Content Audit</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kenny">
                              <img alt="Kenny Tran" className="avatar" src="assets/img/avatar-male-6.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Sally">
                              <img alt="Sally Harper" className="avatar" src="assets/img/avatar-female-3.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>6/6</span>
                          </div>
                          <span className="text-small">17 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Establish CMS</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Sally">
                              <img alt="Sally Harper" className="avatar" src="assets/img/avatar-female-3.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Kerri-Anne">
                              <img alt="Kerri-Anne Banks" className="avatar" src="assets/img/avatar-female-5.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>3/3</span>
                          </div>
                          <span className="text-small">17 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Create mood boards</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img alt="Peggy Brown" className="avatar" src="assets/img/avatar-female-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>8/8</span>
                          </div>
                          <span className="text-small">16 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="card card-kanban">
                      <div className="card-body">
                        <div className="dropdown card-options">
                          <button className="btn-options" type="button" id="kanban-dropdown-button-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item text-danger" href="#">Archive Card</a>
                          </div>
                        </div>
                        <div className="card-title">
                          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Produce mockups</h6></a>
                        </div>
                        <ul className="avatars">
                          <li>
                            <a href="#" data-toggle="tooltip" title="Marcus">
                              <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Peggy">
                              <img alt="Peggy Brown" className="avatar" src="assets/img/avatar-female-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Harry">
                              <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                            </a>
                          </li>
                          <li>
                            <a href="#" data-toggle="tooltip" title="Ravi">
                              <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                            </a>
                          </li>
                        </ul>
                        <div className="card-meta d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <i className="material-icons">playlist_add_check</i>
                            <span>10/10</span>
                          </div>
                          <span className="text-small">15 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-list-footer">
                    <button className="btn btn-link btn-sm text-small">Add task</button>
                  </div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="card-list">
                  <button className="btn btn-link btn-sm text-small">Add list</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal modal-task" id="task-modal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Brand Mood Boards</h5>
                  <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                </div>
                {/*end of modal head*/}
                <div className="modal-body">
                  <div className="page-header">
                    <p className="lead">Assemble three distinct mood boards for client consideration</p>
                    <div className="d-flex align-items-center">
                      <ul className="avatars">
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Claire Connors">
                            <img alt="Claire Connors" className="avatar" src="assets/img/avatar-female-1.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Marcus Simmons">
                            <img alt="Marcus Simmons" className="avatar" src="assets/img/avatar-male-1.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Peggy Brown">
                            <img alt="Peggy Brown" className="avatar" src="assets/img/avatar-female-2.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Harry Xai">
                            <img alt="Harry Xai" className="avatar" src="assets/img/avatar-male-2.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Sally Harper">
                            <img alt="Sally Harper" className="avatar" src="assets/img/avatar-female-3.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Ravi Singh">
                            <img alt="Ravi Singh" className="avatar" src="assets/img/avatar-male-3.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Kristina Van Der Stroem">
                            <img alt="Kristina Van Der Stroem" className="avatar" src="assets/img/avatar-female-4.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="David Whittaker">
                            <img alt="David Whittaker" className="avatar" src="assets/img/avatar-male-4.jpg" />
                          </a>
                        </li>
                      </ul>
                      <button className="btn btn-round flex-shrink-0" data-toggle="modal" data-target="#user-manage-modal">
                        <i className="material-icons">add</i>
                      </button>
                    </div>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-success" style={{width: '42%'}} />
                      </div>
                      <div className="d-flex justify-content-between text-small">
                        <div className="d-flex align-items-center">
                          <i className="material-icons">playlist_add_check</i>
                          <span>3/7</span>
                        </div>
                        <span>Due 14 days</span>
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs nav-fill" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#task" role="tab" aria-controls="task" aria-selected="true">Task</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#files" role="tab" aria-controls="files" aria-selected="false">Files</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activity</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="task" role="tabpanel">
                      <div className="content-list" data-filter-list="checklist">
                        <div className="row content-list-head">
                          <div className="col-auto">
                            <h3>Checklist</h3>
                            <button className="btn btn-round" data-toggle="tooltip" data-title="New item">
                              <i className="material-icons">add</i>
                            </button>
                          </div>
                          <form className="col-md-auto">
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter checklist" aria-label="Filter checklist" />
                            </div>
                          </form>
                        </div>
                        {/*end of content list head*/}
                        <div className="content-list-body">
                          <form className="checklist">
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-1" defaultChecked />
                                  <label className="custom-control-label" htmlFor="checklist-item-1" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Create boards in Matboard" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-2" defaultChecked />
                                  <label className="custom-control-label" htmlFor="checklist-item-2" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Invite team to boards" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-3" defaultChecked />
                                  <label className="custom-control-label" htmlFor="checklist-item-3" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Identify three distinct aesthetic styles for boards" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-4" />
                                  <label className="custom-control-label" htmlFor="checklist-item-4" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Add aesthetic style descriptions as notes" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-5" />
                                  <label className="custom-control-label" htmlFor="checklist-item-5" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Assemble boards using inspiration from Dribbble, Land Book, Nicely Done etc." data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-6" />
                                  <label className="custom-control-label" htmlFor="checklist-item-6" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Gather feedback from project team" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                            <div className="row">
                              <div className="form-group col">
                                <span className="checklist-reorder">
                                  <i className="material-icons">reorder</i>
                                </span>
                                <div className="custom-control custom-checkbox col">
                                  <input type="checkbox" className="custom-control-input" id="checklist-item-7" />
                                  <label className="custom-control-label" htmlFor="checklist-item-7" />
                                  <div>
                                    <input type="text" placeholder="Checklist item" defaultValue="Invite clients to board before next concept meeting" data-filter-by="value" />
                                    <div className="checklist-strikethrough" />
                                  </div>
                                </div>
                              </div>
                              {/*end of form group*/}
                            </div>
                          </form>
                          <div className="drop-to-delete">
                            <div className="drag-to-delete-title">
                              <i className="material-icons">delete</i>
                            </div>
                          </div>
                        </div>
                        {/*end of content list body*/}
                      </div>
                      {/*end of content list*/}
                      <div className="content-list" data-filter-list="content-list-body">
                        <div className="row content-list-head">
                          <div className="col-auto">
                            <h3>Notes</h3>
                            <button className="btn btn-round" data-toggle="modal" data-target="#note-add-modal">
                              <i className="material-icons">add</i>
                            </button>
                          </div>
                          <form className="col-md-auto">
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter notes" aria-label="Filter notes" />
                            </div>
                          </form>
                        </div>
                        {/*end of content list head*/}
                        <div className="content-list-body">
                          <div className="card card-note">
                            <div className="card-header">
                              <div className="media align-items-center">
                                <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar" data-toggle="tooltip" data-title="Peggy Brown" data-filter-by="alt" />
                                <div className="media-body">
                                  <h6 className="mb-0" data-filter-by="text">First meeting notes</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <span data-filter-by="text">Just now</span>
                                <div className="ml-1 dropdown card-options">
                                  <button className="btn-options" type="button" id="note-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">more_vert</i>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body" data-filter-by="text">
                              <p>Here's a quick rundown of companies the client expressed interest in on our call this morning:</p>
                              <ul>
                                <li><a href="#">Commonwealth Bank of Australia</a> for the bright, positive color scheme</li>
                                <li><a href="#">Bupa Health Insurance</a> for the adaptability of their logo around the site's layout</li>
                                <li><a href="#">OPSM</a> again for the color scheme, this time for the softer pallette</li>
                              </ul>
                            </div>
                          </div>
                          <div className="card card-note">
                            <div className="card-header">
                              <div className="media align-items-center">
                                <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" className="avatar" data-toggle="tooltip" data-title="David Whittaker" data-filter-by="alt" />
                                <div className="media-body">
                                  <h6 className="mb-0" data-filter-by="text">Client preference</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <span data-filter-by="text">Yesterday</span>
                                <div className="ml-1 dropdown card-options">
                                  <button className="btn-options" type="button" id="note-dropdown-button-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">more_vert</i>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body" data-filter-by="text">
                              <p>Hi all, just wanted to add that the client has requested that we lean toward a 'friendly' aesthetic. I know this seems a little vague but it does give us a starting point for the mood boards. I recommend we use larger
                                corporates who target 'youthful' audiences as initial inspiration. <a href="#">@Peggy</a> will take the lead from here.</p>
                            </div>
                          </div>
                          <div className="card card-note">
                            <div className="card-header">
                              <div className="media align-items-center">
                                <img alt="Ravi Singh" src="assets/img/avatar-male-3.jpg" className="avatar" data-toggle="tooltip" data-title="Ravi Singh" data-filter-by="alt" />
                                <div className="media-body">
                                  <h6 className="mb-0" data-filter-by="text">Matboard links</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <span data-filter-by="text">Just now</span>
                                <div className="ml-1 dropdown card-options">
                                  <button className="btn-options" type="button" id="note-dropdown-button-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">more_vert</i>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Edit</a>
                                    <a className="dropdown-item text-danger" href="#">Delete</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body" data-filter-by="text">
                              <p>Hey guys, here's the link to the Matboards: <a href="#">https://matboard.io/3928462</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end of tab*/}
                    <div className="tab-pane fade" id="files" role="tabpanel" data-filter-list="dropzone-previews">
                      <div className="content-list">
                        <div className="row content-list-head">
                          <div className="col-auto">
                            <h3>Files</h3>
                          </div>
                          <form className="col-md-auto">
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter files" aria-label="Filter Tasks" />
                            </div>
                          </form>
                        </div>
                        {/*end of content list head*/}
                        <div className="content-list-body">
                          <ul className="d-none dz-template">
                            <li className="list-group-item dz-preview dz-file-preview">
                              <div className="media align-items-center dz-details">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary dz-file-representation">
                                      <i className="material-icons">attach_file</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" className="avatar" data-title="David Whittaker" data-toggle="tooltip" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div className="dz-file-details">
                                    <a href="#" className="dz-filename">
                                      <span data-dz-name />
                                    </a>
                                    <br />
                                    <span className="text-small dz-size" data-dz-size />
                                  </div>
                                  <img alt="Loader" src="assets/img/loader.svg" className="dz-loading" />
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#" data-dz-remove>Delete</a>
                                    </div>
                                  </div>
                                  <button className="btn btn-danger btn-sm dz-remove" data-dz-remove>
                                    Cancel
                                  </button>
                                </div>
                              </div>
                              <div className="progress dz-progress">
                                <div className="progress-bar dz-upload" data-dz-uploadprogress />
                              </div>
                            </li>
                          </ul>
                          <form className="dropzone" action="https://mediumra.re/dropzone/upload.php">
                            <span className="dz-message">Drop files here or click here to upload</span>
                          </form>
                          <ul className="list-group list-group-activity dropzone-previews flex-column-reverse">
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">insert_drive_file</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar" data-title="Peggy Brown" data-toggle="tooltip" data-filter-by="data-title" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <a href="#" data-filter-by="text">client-questionnaire</a>
                                    <br />
                                    <span className="text-small" data-filter-by="text">48kb Text Doc</span>
                                  </div>
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">folder</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" className="avatar" data-title="Harry Xai" data-toggle="tooltip" data-filter-by="data-title" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <a href="#" data-filter-by="text">moodboard_images</a>
                                    <br />
                                    <span className="text-small" data-filter-by="text">748kb ZIP</span>
                                  </div>
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">image</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Ravi Singh" src="assets/img/avatar-male-3.jpg" className="avatar" data-title="Ravi Singh" data-toggle="tooltip" data-filter-by="data-title" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <a href="#" data-filter-by="text">possible-hero-image</a>
                                    <br />
                                    <span className="text-small" data-filter-by="text">1.2mb JPEG image</span>
                                  </div>
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">insert_drive_file</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" className="avatar" data-title="Claire Connors" data-toggle="tooltip" data-filter-by="data-title" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <a href="#" data-filter-by="text">LandingPrototypes</a>
                                    <br />
                                    <span className="text-small" data-filter-by="text">415kb Sketch Doc</span>
                                  </div>
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">insert_drive_file</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" className="avatar" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                  </li>
                                </ul>
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <a href="#" data-filter-by="text">Branding-Proforma</a>
                                    <br />
                                    <span className="text-small" data-filter-by="text">15kb Text Document</span>
                                  </div>
                                  <div className="dropdown">
                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="material-icons">more_vert</i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">Download</a>
                                      <a className="dropdown-item" href="#">Share</a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item text-danger" href="#">Delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*end of content list*/}
                    </div>
                    <div className="tab-pane fade" id="activity" role="tabpanel" data-filter-list="list-group-activity">
                      <div className="content-list">
                        <div className="row content-list-head">
                          <div className="col-auto">
                            <h3>Activity</h3>
                          </div>
                          <form className="col-md-auto">
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter activity" aria-label="Filter activity" />
                            </div>
                          </form>
                        </div>
                        {/*end of content list head*/}
                        <div className="content-list-body">
                          <ol className="list-group list-group-activity">
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">edit</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Peggy" src="assets/img/avatar-female-2.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">Peggy</span>
                                    <span data-filter-by="text">added the note</span><a href="#" data-filter-by="text">Client Meeting Notes</a>
                                  </div>
                                  <span className="text-small" data-filter-by="text">Yesterday</span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">edit</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="David" src="assets/img/avatar-male-4.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">David</span>
                                    <span data-filter-by="text">added the note</span><a href="#" data-filter-by="text">Aesthetic note</a>
                                  </div>
                                  <span className="text-small" data-filter-by="text">Yesterday</span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">person_add</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Marcus" src="assets/img/avatar-male-1.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">Marcus</span>
                                    <span data-filter-by="text">was assigned to the task</span>
                                  </div>
                                  <span className="text-small" data-filter-by="text">4 days ago</span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">person_add</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Ravi" src="assets/img/avatar-male-3.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">Ravi</span>
                                    <span data-filter-by="text">was assigned to the task</span>
                                  </div>
                                  <span className="text-small" data-filter-by="text">5 days ago</span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">playlist_add</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="Claire" src="assets/img/avatar-female-1.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">Claire</span>
                                    <span data-filter-by="text">added to the task checklist</span>
                                  </div>
                                  <span className="text-small" data-filter-by="text">5 days ago</span>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="media align-items-center">
                                <ul className="avatars">
                                  <li>
                                    <div className="avatar bg-primary">
                                      <i className="material-icons">add</i>
                                    </div>
                                  </li>
                                  <li>
                                    <img alt="David" src="assets/img/avatar-male-4.jpg" className="avatar" data-filter-by="alt" />
                                  </li>
                                </ul>
                                <div className="media-body">
                                  <div>
                                    <span className="h6" data-filter-by="text">David</span>
                                    <span data-filter-by="text">started the task</span>
                                  </div>
                                  <span className="text-small" data-filter-by="text">6 days ago</span>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </div>
                      {/*end of content list*/}
                    </div>
                  </div>
                  <form className="modal fade" id="user-manage-modal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Manage Users</h5>
                          <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                            <i className="material-icons">close</i>
                          </button>
                        </div>
                        {/*end of modal head*/}
                        <div className="modal-body">
                          <div className="users-manage" data-filter-list="form-group-users">
                            <div className="mb-3">
                              <ul className="avatars text-center">
                                <li>
                                  <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" className="avatar" data-toggle="tooltip" data-title="Claire Connors" />
                                </li>
                                <li>
                                  <img alt="Marcus Simmons" src="assets/img/avatar-male-1.jpg" className="avatar" data-toggle="tooltip" data-title="Marcus Simmons" />
                                </li>
                                <li>
                                  <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar" data-toggle="tooltip" data-title="Peggy Brown" />
                                </li>
                                <li>
                                  <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" className="avatar" data-toggle="tooltip" data-title="Harry Xai" />
                                </li>
                              </ul>
                            </div>
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members" />
                            </div>
                            <div className="form-group-users">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-1" defaultChecked />
                                <label className="custom-control-label" htmlFor="user-manage-1">
                                  <span className="d-flex align-items-center">
                                    <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Claire Connors</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-2" defaultChecked />
                                <label className="custom-control-label" htmlFor="user-manage-2">
                                  <span className="d-flex align-items-center">
                                    <img alt="Marcus Simmons" src="assets/img/avatar-male-1.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Marcus Simmons</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-3" defaultChecked />
                                <label className="custom-control-label" htmlFor="user-manage-3">
                                  <span className="d-flex align-items-center">
                                    <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Peggy Brown</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-4" defaultChecked />
                                <label className="custom-control-label" htmlFor="user-manage-4">
                                  <span className="d-flex align-items-center">
                                    <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Harry Xai</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-5" />
                                <label className="custom-control-label" htmlFor="user-manage-5">
                                  <span className="d-flex align-items-center">
                                    <img alt="Sally Harper" src="assets/img/avatar-female-3.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Sally Harper</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-6" />
                                <label className="custom-control-label" htmlFor="user-manage-6">
                                  <span className="d-flex align-items-center">
                                    <img alt="Ravi Singh" src="assets/img/avatar-male-3.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Ravi Singh</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-7" />
                                <label className="custom-control-label" htmlFor="user-manage-7">
                                  <span className="d-flex align-items-center">
                                    <img alt="Kristina Van Der Stroem" src="assets/img/avatar-female-4.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Kristina Van Der Stroem</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-8" />
                                <label className="custom-control-label" htmlFor="user-manage-8">
                                  <span className="d-flex align-items-center">
                                    <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">David Whittaker</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-9" />
                                <label className="custom-control-label" htmlFor="user-manage-9">
                                  <span className="d-flex align-items-center">
                                    <img alt="Kerri-Anne Banks" src="assets/img/avatar-female-5.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Kerri-Anne Banks</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-10" />
                                <label className="custom-control-label" htmlFor="user-manage-10">
                                  <span className="d-flex align-items-center">
                                    <img alt="Masimba Sibanda" src="assets/img/avatar-male-5.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Masimba Sibanda</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-11" />
                                <label className="custom-control-label" htmlFor="user-manage-11">
                                  <span className="d-flex align-items-center">
                                    <img alt="Krishna Bajaj" src="assets/img/avatar-female-6.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Krishna Bajaj</span>
                                  </span>
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="user-manage-12" />
                                <label className="custom-control-label" htmlFor="user-manage-12">
                                  <span className="d-flex align-items-center">
                                    <img alt="Kenny Tran" src="assets/img/avatar-male-6.jpg" className="avatar mr-2" />
                                    <span className="h6 mb-0" data-filter-by="text">Kenny Tran</span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end of modal body*/}
                        <div className="modal-footer">
                          <button role="button" className="btn btn-primary" type="submit">
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form className="modal fade" id="task-edit-modal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Edit Task</h5>
                          <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                            <i className="material-icons">close</i>
                          </button>
                        </div>
                        {/*end of modal head*/}
                        <ul className="nav nav-tabs nav-fill" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="task-edit-details-tab" data-toggle="tab" href="#task-edit-details" role="tab" aria-controls="task-edit-details" aria-selected="true">Details</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="task-edit-members-tab" data-toggle="tab" href="#task-edit-members" role="tab" aria-controls="task-edit-members" aria-selected="false">Members</a>
                          </li>
                        </ul>
                        <div className="modal-body">
                          <div className="tab-content">
                            <div className="tab-pane fade show active" id="task-edit-details" role="tabpanel">
                              <h6>General Details</h6>
                              <div className="form-group row align-items-center">
                                <label className="col-3">Name</label>
                                <input className="form-control col" type="text" placeholder="Task name" defaultValue="Create brand mood boards" name="task-name" />
                              </div>
                              <div className="form-group row">
                                <label className="col-3">Description</label>
                                <textarea className="form-control col" rows={3} placeholder="Task description" name="task-description" defaultValue={"Assemble three distinct mood boards for client consideration"} />
                              </div>
                              <hr />
                              <h6>Timeline</h6>
                              <div className="form-group row align-items-center">
                                <label className="col-3">Start Date</label>
                                <input className="form-control col" type="text" name="task-start" placeholder="Select a date" data-flatpickr data-default-date="2021-04-21" data-alt-input="true" />
                              </div>
                              <div className="form-group row align-items-center">
                                <label className="col-3">Due Date</label>
                                <input className="form-control col" type="text" name="task-due" placeholder="Select a date" data-flatpickr data-default-date="2021-09-15" data-alt-input="true" />
                              </div>
                              <div className="alert alert-warning text-small" role="alert">
                                <span>You can change due dates at any time.</span>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="task-edit-members" role="tabpanel">
                              <div className="users-manage" data-filter-list="form-group-users">
                                <div className="mb-3">
                                  <ul className="avatars text-center">
                                    <li>
                                      <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" className="avatar" data-toggle="tooltip" data-title="Claire Connors" />
                                    </li>
                                    <li>
                                      <img alt="Marcus Simmons" src="assets/img/avatar-male-1.jpg" className="avatar" data-toggle="tooltip" data-title="Marcus Simmons" />
                                    </li>
                                    <li>
                                      <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar" data-toggle="tooltip" data-title="Peggy Brown" />
                                    </li>
                                    <li>
                                      <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" className="avatar" data-toggle="tooltip" data-title="Harry Xai" />
                                    </li>
                                  </ul>
                                </div>
                                <div className="input-group input-group-round">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      <i className="material-icons">filter_list</i>
                                    </span>
                                  </div>
                                  <input type="search" className="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members" />
                                </div>
                                <div className="form-group-users">
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-1" defaultChecked />
                                    <label className="custom-control-label" htmlFor="task-user-1">
                                      <span className="d-flex align-items-center">
                                        <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Claire Connors</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-2" defaultChecked />
                                    <label className="custom-control-label" htmlFor="task-user-2">
                                      <span className="d-flex align-items-center">
                                        <img alt="Marcus Simmons" src="assets/img/avatar-male-1.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Marcus Simmons</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-3" defaultChecked />
                                    <label className="custom-control-label" htmlFor="task-user-3">
                                      <span className="d-flex align-items-center">
                                        <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Peggy Brown</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-4" defaultChecked />
                                    <label className="custom-control-label" htmlFor="task-user-4">
                                      <span className="d-flex align-items-center">
                                        <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Harry Xai</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-5" />
                                    <label className="custom-control-label" htmlFor="task-user-5">
                                      <span className="d-flex align-items-center">
                                        <img alt="Sally Harper" src="assets/img/avatar-female-3.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Sally Harper</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-6" />
                                    <label className="custom-control-label" htmlFor="task-user-6">
                                      <span className="d-flex align-items-center">
                                        <img alt="Ravi Singh" src="assets/img/avatar-male-3.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Ravi Singh</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-7" />
                                    <label className="custom-control-label" htmlFor="task-user-7">
                                      <span className="d-flex align-items-center">
                                        <img alt="Kristina Van Der Stroem" src="assets/img/avatar-female-4.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Kristina Van Der Stroem</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-8" />
                                    <label className="custom-control-label" htmlFor="task-user-8">
                                      <span className="d-flex align-items-center">
                                        <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">David Whittaker</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-9" />
                                    <label className="custom-control-label" htmlFor="task-user-9">
                                      <span className="d-flex align-items-center">
                                        <img alt="Kerri-Anne Banks" src="assets/img/avatar-female-5.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Kerri-Anne Banks</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-10" />
                                    <label className="custom-control-label" htmlFor="task-user-10">
                                      <span className="d-flex align-items-center">
                                        <img alt="Masimba Sibanda" src="assets/img/avatar-male-5.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Masimba Sibanda</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-11" />
                                    <label className="custom-control-label" htmlFor="task-user-11">
                                      <span className="d-flex align-items-center">
                                        <img alt="Krishna Bajaj" src="assets/img/avatar-female-6.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Krishna Bajaj</span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="task-user-12" />
                                    <label className="custom-control-label" htmlFor="task-user-12">
                                      <span className="d-flex align-items-center">
                                        <img alt="Kenny Tran" src="assets/img/avatar-male-6.jpg" className="avatar mr-2" />
                                        <span className="h6 mb-0" data-filter-by="text">Kenny Tran</span>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end of modal body*/}
                        <div className="modal-footer">
                          <button role="button" className="btn btn-primary" type="submit">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form className="modal fade" id="note-add-modal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">New Note</h5>
                          <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                            <i className="material-icons">close</i>
                          </button>
                        </div>
                        {/*end of modal head*/}
                        <div className="modal-body">
                          <div className="form-group row align-items-center">
                            <label className="col-3">Title</label>
                            <input className="form-control col" type="text" placeholder="Note title" name="note-name" />
                          </div>
                          <div className="form-group row">
                            <label className="col-3">Text</label>
                            <textarea className="form-control col" rows={6} placeholder="Body text for note" name="note-description" defaultValue={""} />
                          </div>
                        </div>
                        {/*end of modal body*/}
                        <div className="modal-footer">
                          <button role="button" className="btn btn-primary" type="submit">
                            Create Note
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-round btn-floating btn-lg" type="button" data-toggle="collapse" data-target="#floating-chat" aria-expanded="false">
            <i className="material-icons">chat_bubble</i>
            <i className="material-icons">close</i>
          </button>
          <div className="collapse sidebar-floating" id="floating-chat">
            <div className="sidebar-content">
              <div className="chat-module" data-filter-list="chat-module-body">
                <div className="chat-module-top">
                  <form>
                    <div className="input-group input-group-round">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">search</i>
                        </span>
                      </div>
                      <input type="search" className="form-control filter-list-input" placeholder="Search chat" aria-label="Search Chat" />
                    </div>
                  </form>
                  <div className="chat-module-body">
                    <div className="media chat-item">
                      <img alt="Claire" src="assets/img/avatar-female-1.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Claire</span>
                          <span data-filter-by="text">4 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Hey guys, just kicking things off here in the chat window. Hope you're all ready to tackle this great project. Let's smash some Brand Concept &amp; Design!</p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Peggy" src="assets/img/avatar-female-2.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Peggy</span>
                          <span data-filter-by="text">4 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Nice one <a href="#">@Claire</a>, we've got some killer ideas kicking about already.
                            <img src="https://giphy.com/gifs/aTeHNLRLrwwwM" alt="alt text" title="Thinking" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Marcus" src="assets/img/avatar-male-1.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Marcus</span>
                          <span data-filter-by="text">3 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Roger that boss! <a href="#">@Ravi</a> and I have already started gathering some stuff for the mood boards, excited to start! 🔥</p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Ravi" src="assets/img/avatar-male-3.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Ravi</span>
                          <span data-filter-by="text">3 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <h1>😉</h1>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Claire" src="assets/img/avatar-female-1.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Claire</span>
                          <span data-filter-by="text">2 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Can't wait! <a href="#">@David</a> how are we coming along with the <a href="#">Client Objective Meeting</a>?</p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="David" src="assets/img/avatar-male-4.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">David</span>
                          <span data-filter-by="text">Yesterday</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Coming along nicely, we've got a draft for the client questionnaire completed, take a look! 🤓</p>
                        </div>
                        <div className="media media-attachment">
                          <div className="avatar bg-primary">
                            <i className="material-icons">insert_drive_file</i>
                          </div>
                          <div className="media-body">
                            <a href="#" data-filter-by="text">questionnaire-draft.doc</a>
                            <span data-filter-by="text">24kb Document</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Sally" src="assets/img/avatar-female-3.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Sally</span>
                          <span data-filter-by="text">2 hours ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img alt="Peggy" src="assets/img/avatar-female-2.jpg" className="avatar" />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span className="chat-item-author" data-filter-by="text">Peggy</span>
                          <span data-filter-by="text">Just now</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>Well done <a href="#">@all</a>. See you all at 2 for the kick-off meeting. 🤜</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-module-bottom">
                  <form className="chat-form">
                    <textarea className="form-control" placeholder="Type message" rows={1} defaultValue={""} />
                    <div className="chat-form-buttons">
                      <button type="button" className="btn btn-link">
                        <i className="material-icons">tag_faces</i>
                      </button>
                      <div className="custom-file custom-file-naked">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">
                          <i className="material-icons">attach_file</i>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kanban;
