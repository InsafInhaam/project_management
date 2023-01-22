import React from "react";
import Sidebar from "../components/Sidebar";

const Team = () => {
  return (
    <>
      <div className="layout layout-nav-side">
        <Sidebar/>
        <div className="main-container">
          <div className="navbar bg-white breadcrumb-bar">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Overview</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="pages-app.html#">App Pages</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Team
                </li>
              </ol>
            </nav>
            <div className="dropdown">
              <button
                className="btn btn-round"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons">settings</i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#team-manage-modal"
                >
                  Edit Team
                </a>
                <a className="dropdown-item" href="#">
                  Share
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="#">
                  Leave
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                <div className="page-header">
                  <h1>Medium Rare ☕</h1>
                  <p className="lead">
                    A small web studio crafting lovely template products.
                  </p>
                  <div className="d-flex align-items-center">
                    <ul className="avatars">
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Claire Connors"
                        >
                          <img
                            alt="Claire Connors"
                            className="avatar"
                            src="assets/img/avatar-female-1.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Marcus Simmons"
                        >
                          <img
                            alt="Marcus Simmons"
                            className="avatar"
                            src="assets/img/avatar-male-1.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Peggy Brown"
                        >
                          <img
                            alt="Peggy Brown"
                            className="avatar"
                            src="assets/img/avatar-female-2.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Harry Xai"
                        >
                          <img
                            alt="Harry Xai"
                            className="avatar"
                            src="assets/img/avatar-male-2.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Sally Harper"
                        >
                          <img
                            alt="Sally Harper"
                            className="avatar"
                            src="assets/img/avatar-female-3.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Ravi Singh"
                        >
                          <img
                            alt="Ravi Singh"
                            className="avatar"
                            src="assets/img/avatar-male-3.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kristina Van Der Stroem"
                        >
                          <img
                            alt="Kristina Van Der Stroem"
                            className="avatar"
                            src="assets/img/avatar-female-4.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="David Whittaker"
                        >
                          <img
                            alt="David Whittaker"
                            className="avatar"
                            src="assets/img/avatar-male-4.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kerri-Anne Banks"
                        >
                          <img
                            alt="Kerri-Anne Banks"
                            className="avatar"
                            src="assets/img/avatar-female-5.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Masimba Sibanda"
                        >
                          <img
                            alt="Masimba Sibanda"
                            className="avatar"
                            src="assets/img/avatar-male-5.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Krishna Bajaj"
                        >
                          <img
                            alt="Krishna Bajaj"
                            className="avatar"
                            src="assets/img/avatar-female-6.jpg"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Kenny Tran"
                        >
                          <img
                            alt="Kenny Tran"
                            className="avatar"
                            src="assets/img/avatar-male-6.jpg"
                          />
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-round flex-shrink-0"
                      data-toggle="modal"
                      data-target="#user-invite-modal"
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </div>
                </div>
                <hr />
                <ul className="nav nav-tabs nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#projects"
                      role="tab"
                      aria-controls="projects"
                      aria-selected="true"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#members"
                      role="tab"
                      aria-controls="members"
                      aria-selected="false"
                    >
                      Members
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="projects"
                    role="tabpanel"
                    data-filter-list="content-list-body"
                  >
                    <div className="content-list">
                      <div className="row content-list-head">
                        <div className="col-auto">
                          <h3>Projects</h3>
                          <button
                            className="btn btn-round"
                            data-toggle="modal"
                            data-target="#project-add-modal"
                          >
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
                            <input
                              type="search"
                              className="form-control filter-list-input"
                              placeholder="Filter projects"
                              aria-label="Filter Projects"
                            />
                          </div>
                        </form>
                      </div>
                      {/*end of content list head*/}
                      <div className="content-list-body row">
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "60%" }}
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-1"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">New Website</h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Kenny"
                                  >
                                    <img
                                      alt="Kenny Tran"
                                      className="avatar"
                                      src="assets/img/avatar-male-6.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Peggy"
                                  >
                                    <img
                                      alt="Peggy Brown"
                                      className="avatar"
                                      src="assets/img/avatar-female-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Ravi"
                                  >
                                    <img
                                      alt="Ravi Singh"
                                      className="avatar"
                                      src="assets/img/avatar-male-3.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">6/10</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 4 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">
                                    Company Vision Statement
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Harry"
                                  >
                                    <img
                                      alt="Harry Xai"
                                      className="avatar"
                                      src="assets/img/avatar-male-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Sally"
                                  >
                                    <img
                                      alt="Sally Harper"
                                      className="avatar"
                                      src="assets/img/avatar-female-3.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Kristina"
                                  >
                                    <img
                                      alt="Kristina Van Der Stroem"
                                      className="avatar"
                                      src="assets/img/avatar-female-4.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Kerri-Anne"
                                  >
                                    <img
                                      alt="Kerri-Anne Banks"
                                      className="avatar"
                                      src="assets/img/avatar-female-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets/img/avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Marcus"
                                  >
                                    <img
                                      alt="Marcus Simmons"
                                      className="avatar"
                                      src="assets/img/avatar-male-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">1/8</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 7 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-3"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">
                                    Update Privacy Policy
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets/img/avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">2/8</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 8 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-4"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">
                                    Update Marketing Collateral
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="David"
                                  >
                                    <img
                                      alt="David Whittaker"
                                      className="avatar"
                                      src="assets/img/avatar-male-4.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Masimba"
                                  >
                                    <img
                                      alt="Masimba Sibanda"
                                      className="avatar"
                                      src="assets/img/avatar-male-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Krishna"
                                  >
                                    <img
                                      alt="Krishna Bajaj"
                                      className="avatar"
                                      src="assets/img/avatar-female-6.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Harry"
                                  >
                                    <img
                                      alt="Harry Xai"
                                      className="avatar"
                                      src="assets/img/avatar-male-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">0/5</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 12 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "8%" }}
                                aria-valuenow={8}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-5"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">
                                    Brand Concept &amp; Design
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Ravi"
                                  >
                                    <img
                                      alt="Ravi Singh"
                                      className="avatar"
                                      src="assets/img/avatar-male-3.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Masimba"
                                  >
                                    <img
                                      alt="Masimba Sibanda"
                                      className="avatar"
                                      src="assets/img/avatar-male-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Peggy"
                                  >
                                    <img
                                      alt="Peggy Brown"
                                      className="avatar"
                                      src="assets/img/avatar-female-2.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Marcus"
                                  >
                                    <img
                                      alt="Marcus Simmons"
                                      className="avatar"
                                      src="assets/img/avatar-male-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Kerri-Anne"
                                  >
                                    <img
                                      alt="Kerri-Anne Banks"
                                      className="avatar"
                                      src="assets/img/avatar-female-5.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets/img/avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">1/12</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Due 20 days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-6"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">Company Getaway</h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Claire"
                                  >
                                    <img
                                      alt="Claire Connors"
                                      className="avatar"
                                      src="assets/img/avatar-female-1.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Kristina"
                                  >
                                    <img
                                      alt="Kristina Van Der Stroem"
                                      className="avatar"
                                      src="assets/img/avatar-female-4.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">-/-</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Unscheduled
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card card-project">
                            <div className="card-body">
                              <div className="dropdown card-options">
                                <button
                                  className="btn-options"
                                  type="button"
                                  id="project-dropdown-button-7"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Share
                                  </a>
                                </div>
                              </div>
                              <div className="card-title">
                                <a href="#">
                                  <h5 data-filter-by="text">
                                    Annual Team Meeting
                                  </h5>
                                </a>
                              </div>
                              <ul className="avatars">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="tooltip"
                                    title="Ravi"
                                  >
                                    <img
                                      alt="Ravi Singh"
                                      className="avatar"
                                      src="assets/img/avatar-male-3.jpg"
                                      data-filter-by="alt"
                                    />
                                  </a>
                                </li>
                              </ul>
                              <div className="card-meta d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <i className="material-icons mr-1">
                                    playlist_add_check
                                  </i>
                                  <span className="text-small">-/-</span>
                                </div>
                                <span
                                  className="text-small"
                                  data-filter-by="text"
                                >
                                  Unscheduled
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end of content list body*/}
                    </div>
                    {/*end of content list*/}
                  </div>
                  {/*end of tab*/}
                  <div
                    className="tab-pane fade"
                    id="members"
                    role="tabpanel"
                    data-filter-list="content-list-body"
                  >
                    <div className="content-list">
                      <div className="row content-list-head">
                        <div className="col-auto">
                          <h3>Members</h3>
                          <button
                            className="btn btn-round"
                            data-toggle="modal"
                            data-target="#user-invite-modal"
                          >
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
                            <input
                              type="search"
                              className="form-control filter-list-input"
                              placeholder="Filter members"
                              aria-label="Filter Members"
                            />
                          </div>
                        </form>
                      </div>
                      {/*end of content list head*/}
                      <div className="content-list-body row">
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Claire Connors"
                              src="assets/img/avatar-female-1.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Claire Connors
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Administrator
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Marcus Simmons"
                              src="assets/img/avatar-male-1.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Marcus Simmons
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Administrator
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Peggy Brown"
                              src="assets/img/avatar-female-2.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Peggy Brown
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Project Manager
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Harry Xai"
                              src="assets/img/avatar-male-2.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Harry Xai
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Project Manager
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Sally Harper"
                              src="assets/img/avatar-female-3.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Sally Harper
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Developer
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Ravi Singh"
                              src="assets/img/avatar-male-3.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Ravi Singh
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Developer
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Kristina Van Der Stroem"
                              src="assets/img/avatar-female-4.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Kristina Van Der Stroem
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Developer
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="David Whittaker"
                              src="assets/img/avatar-male-4.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                David Whittaker
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Designer
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Kerri-Anne Banks"
                              src="assets/img/avatar-female-5.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Kerri-Anne Banks
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Marketing
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Masimba Sibanda"
                              src="assets/img/avatar-male-5.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Masimba Sibanda
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Designer
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Krishna Bajaj"
                              src="assets/img/avatar-female-6.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Krishna Bajaj
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Marketing
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-6">
                          <a className="media media-member" href="#">
                            <img
                              alt="Kenny Tran"
                              src="assets/img/avatar-male-6.jpg"
                              className="avatar avatar-lg"
                            />
                            <div className="media-body">
                              <h6 className="mb-0" data-filter-by="text">
                                Kenny Tran
                              </h6>
                              <span data-filter-by="text" className="text-body">
                                Contributor
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end of content list*/}
                  </div>
                </div>
                <form
                  className="modal fade"
                  id="user-invite-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Invite Users</h5>
                        <button
                          type="button"
                          className="close btn btn-round"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                      </div>
                      {/*end of modal head*/}
                      <div className="modal-body">
                        <p>
                          Send an invite link via email to add members to this
                          team
                        </p>
                        <div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">email</i>
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Recipient email address"
                              aria-label="Recipient email address"
                            />
                          </div>
                          <div className="text-right text-small mt-2">
                            <a href="#" role="button">
                              Add another recipient
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end of modal body*/}
                      <div className="modal-footer">
                        <button
                          role="button"
                          className="btn btn-primary"
                          type="submit"
                        >
                          Invite users
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form
                  className="modal fade"
                  id="team-manage-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Manage Team</h5>
                        <button
                          type="button"
                          className="close btn btn-round"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                      </div>
                      {/*end of modal head*/}
                      <ul className="nav nav-tabs nav-fill" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="team-manage-details-tab"
                            data-toggle="tab"
                            href="#team-manage-details"
                            role="tab"
                            aria-controls="team-manage-details"
                            aria-selected="true"
                          >
                            Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="team-manage-members-tab"
                            data-toggle="tab"
                            href="#team-manage-members"
                            role="tab"
                            aria-controls="team-manage-members"
                            aria-selected="false"
                          >
                            Members
                          </a>
                        </li>
                      </ul>
                      <div className="modal-body">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="team-manage-details"
                            role="tabpanel"
                          >
                            <h6>Team Details</h6>
                            <div className="form-group row align-items-center">
                              <label className="col-3">Name</label>
                              <input
                                className="form-control col"
                                type="text"
                                placeholder="Team name"
                                name="team-name"
                                defaultValue="Medium Rare"
                              />
                            </div>
                            <div className="form-group row">
                              <label className="col-3">Description</label>
                              <textarea
                                className="form-control col"
                                rows={3}
                                placeholder="Team description"
                                name="team-description"
                                defaultValue={
                                  "A small web studio crafting lovely template products."
                                }
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="team-manage-members"
                            role="tabpanel"
                          >
                            <div
                              className="users-manage"
                              data-filter-list="form-group-users"
                            >
                              <div className="mb-3">
                                <ul className="avatars text-center">
                                  <li>
                                    <img
                                      alt="Claire Connors"
                                      src="assets/img/avatar-female-1.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Claire Connors"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Marcus Simmons"
                                      src="assets/img/avatar-male-1.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Marcus Simmons"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Peggy Brown"
                                      src="assets/img/avatar-female-2.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Peggy Brown"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Harry Xai"
                                      src="assets/img/avatar-male-2.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Harry Xai"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="input-group input-group-round">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">
                                      filter_list
                                    </i>
                                  </span>
                                </div>
                                <input
                                  type="search"
                                  className="form-control filter-list-input"
                                  placeholder="Filter members"
                                  aria-label="Filter Members"
                                />
                              </div>
                              <div className="form-group-users">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-1"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-1"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Claire Connors"
                                        src="assets/img/avatar-female-1.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Claire Connors
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-2"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-2"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Marcus Simmons"
                                        src="assets/img/avatar-male-1.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Marcus Simmons
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-3"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-3"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Peggy Brown"
                                        src="assets/img/avatar-female-2.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Peggy Brown
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-4"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-4"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Harry Xai"
                                        src="assets/img/avatar-male-2.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Harry Xai
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-5"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-5"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Sally Harper"
                                        src="assets/img/avatar-female-3.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Sally Harper
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-6"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-6"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Ravi Singh"
                                        src="assets/img/avatar-male-3.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Ravi Singh
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-7"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-7"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kristina Van Der Stroem"
                                        src="assets/img/avatar-female-4.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kristina Van Der Stroem
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-8"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-8"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="David Whittaker"
                                        src="assets/img/avatar-male-4.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        David Whittaker
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-9"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-9"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kerri-Anne Banks"
                                        src="assets/img/avatar-female-5.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kerri-Anne Banks
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-10"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-10"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Masimba Sibanda"
                                        src="assets/img/avatar-male-5.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Masimba Sibanda
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-11"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-11"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Krishna Bajaj"
                                        src="assets/img/avatar-female-6.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Krishna Bajaj
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="user-manage-12"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="user-manage-12"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kenny Tran"
                                        src="assets/img/avatar-male-6.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kenny Tran
                                      </span>
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
                        <button
                          role="button"
                          className="btn btn-primary"
                          type="submit"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form
                  className="modal fade"
                  id="project-add-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">New Project</h5>
                        <button
                          type="button"
                          className="close btn btn-round"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="material-icons">close</i>
                        </button>
                      </div>
                      {/*end of modal head*/}
                      <ul className="nav nav-tabs nav-fill" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="project-add-details-tab"
                            data-toggle="tab"
                            href="#project-add-details"
                            role="tab"
                            aria-controls="project-add-details"
                            aria-selected="true"
                          >
                            Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="project-add-members-tab"
                            data-toggle="tab"
                            href="#project-add-members"
                            role="tab"
                            aria-controls="project-add-members"
                            aria-selected="false"
                          >
                            Members
                          </a>
                        </li>
                      </ul>
                      <div className="modal-body">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="project-add-details"
                            role="tabpanel"
                          >
                            <h6>General Details</h6>
                            <div className="form-group row align-items-center">
                              <label className="col-3">Name</label>
                              <input
                                className="form-control col"
                                type="text"
                                placeholder="Project name"
                                name="project-name"
                              />
                            </div>
                            <div className="form-group row">
                              <label className="col-3">Description</label>
                              <textarea
                                className="form-control col"
                                rows={3}
                                placeholder="Project description"
                                name="project-description"
                                defaultValue={""}
                              />
                            </div>
                            <hr />
                            <h6>Timeline</h6>
                            <div className="form-group row align-items-center">
                              <label className="col-3">Start Date</label>
                              <input
                                className="form-control col"
                                type="text"
                                name="project-start"
                                placeholder="Select a date"
                                data-flatpickr
                                data-default-date="2021-04-21"
                                data-alt-input="true"
                              />
                            </div>
                            <div className="form-group row align-items-center">
                              <label className="col-3">Due Date</label>
                              <input
                                className="form-control col"
                                type="text"
                                name="project-due"
                                placeholder="Select a date"
                                data-flatpickr
                                data-default-date="2021-09-15"
                                data-alt-input="true"
                              />
                            </div>
                            <div
                              className="alert alert-warning text-small"
                              role="alert"
                            >
                              <span>You can change due dates at any time.</span>
                            </div>
                            <hr />
                            <h6>Visibility</h6>
                            <div className="row">
                              <div className="col">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="visibility-everyone"
                                    name="visibility"
                                    className="custom-control-input"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="visibility-everyone"
                                  >
                                    Everyone
                                  </label>
                                </div>
                              </div>
                              <div className="col">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="visibility-members"
                                    name="visibility"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="visibility-members"
                                  >
                                    Members
                                  </label>
                                </div>
                              </div>
                              <div className="col">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="visibility-me"
                                    name="visibility"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="visibility-me"
                                  >
                                    Just me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="project-add-members"
                            role="tabpanel"
                          >
                            <div
                              className="users-manage"
                              data-filter-list="form-group-users"
                            >
                              <div className="mb-3">
                                <ul className="avatars text-center">
                                  <li>
                                    <img
                                      alt="Claire Connors"
                                      src="assets/img/avatar-female-1.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Claire Connors"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Marcus Simmons"
                                      src="assets/img/avatar-male-1.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Marcus Simmons"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Peggy Brown"
                                      src="assets/img/avatar-female-2.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Peggy Brown"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      alt="Harry Xai"
                                      src="assets/img/avatar-male-2.jpg"
                                      className="avatar"
                                      data-toggle="tooltip"
                                      data-title="Harry Xai"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="input-group input-group-round">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">
                                      filter_list
                                    </i>
                                  </span>
                                </div>
                                <input
                                  type="search"
                                  className="form-control filter-list-input"
                                  placeholder="Filter members"
                                  aria-label="Filter Members"
                                />
                              </div>
                              <div className="form-group-users">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-1"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-1"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Claire Connors"
                                        src="assets/img/avatar-female-1.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Claire Connors
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-2"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-2"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Marcus Simmons"
                                        src="assets/img/avatar-male-1.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Marcus Simmons
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-3"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-3"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Peggy Brown"
                                        src="assets/img/avatar-female-2.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Peggy Brown
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-4"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-4"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Harry Xai"
                                        src="assets/img/avatar-male-2.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Harry Xai
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-5"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-5"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Sally Harper"
                                        src="assets/img/avatar-female-3.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Sally Harper
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-6"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-6"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Ravi Singh"
                                        src="assets/img/avatar-male-3.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Ravi Singh
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-7"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-7"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kristina Van Der Stroem"
                                        src="assets/img/avatar-female-4.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kristina Van Der Stroem
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-8"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-8"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="David Whittaker"
                                        src="assets/img/avatar-male-4.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        David Whittaker
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-9"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-9"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kerri-Anne Banks"
                                        src="assets/img/avatar-female-5.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kerri-Anne Banks
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-10"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-10"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Masimba Sibanda"
                                        src="assets/img/avatar-male-5.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Masimba Sibanda
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-11"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-11"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Krishna Bajaj"
                                        src="assets/img/avatar-female-6.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Krishna Bajaj
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="project-user-12"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="project-user-12"
                                  >
                                    <span className="d-flex align-items-center">
                                      <img
                                        alt="Kenny Tran"
                                        src="assets/img/avatar-male-6.jpg"
                                        className="avatar mr-2"
                                      />
                                      <span
                                        className="h6 mb-0"
                                        data-filter-by="text"
                                      >
                                        Kenny Tran
                                      </span>
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
                        <button
                          role="button"
                          className="btn btn-primary"
                          type="submit"
                        >
                          Create Project
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-round btn-floating btn-lg"
            type="button"
            data-toggle="collapse"
            data-target="#floating-chat"
            aria-expanded="false"
          >
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
                      <input
                        type="search"
                        className="form-control filter-list-input"
                        placeholder="Search chat"
                        aria-label="Search Chat"
                      />
                    </div>
                  </form>
                  <div className="chat-module-body">
                    <div className="media chat-item">
                      <img
                        alt="Claire"
                        src="assets/img/avatar-female-1.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Claire
                          </span>
                          <span data-filter-by="text">4 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Hey guys, just kicking things off here in the chat
                            window. Hope you're all ready to tackle this great
                            project. Let's smash some Brand Concept &amp;
                            Design!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Peggy"
                        src="assets/img/avatar-female-2.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Peggy
                          </span>
                          <span data-filter-by="text">4 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Nice one <a href="#">@Claire</a>, we've got some
                            killer ideas kicking about already.
                            <img
                              src="https://giphy.com/gifs/aTeHNLRLrwwwM"
                              alt="alt text"
                              title="Thinking"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Marcus"
                        src="assets/img/avatar-male-1.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Marcus
                          </span>
                          <span data-filter-by="text">3 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Roger that boss! <a href="#">@Ravi</a> and I have
                            already started gathering some stuff for the mood
                            boards, excited to start! 🔥
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Ravi"
                        src="assets/img/avatar-male-3.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Ravi
                          </span>
                          <span data-filter-by="text">3 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <h1>😉</h1>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Claire"
                        src="assets/img/avatar-female-1.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Claire
                          </span>
                          <span data-filter-by="text">2 days ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Can't wait! <a href="#">@David</a> how are we coming
                            along with the{" "}
                            <a href="#">Client Objective Meeting</a>?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="David"
                        src="assets/img/avatar-male-4.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            David
                          </span>
                          <span data-filter-by="text">Yesterday</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Coming along nicely, we've got a draft for the
                            client questionnaire completed, take a look! 🤓
                          </p>
                        </div>
                        <div className="media media-attachment">
                          <div className="avatar bg-primary">
                            <i className="material-icons">insert_drive_file</i>
                          </div>
                          <div className="media-body">
                            <a href="#" data-filter-by="text">
                              questionnaire-draft.doc
                            </a>
                            <span data-filter-by="text">24kb Document</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Sally"
                        src="assets/img/avatar-female-3.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Sally
                          </span>
                          <span data-filter-by="text">2 hours ago</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Great start guys, I've added some notes to the task.
                            We may need to make some adjustments to the last
                            couple of items - but no biggie!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-item">
                      <img
                        alt="Peggy"
                        src="assets/img/avatar-female-2.jpg"
                        className="avatar"
                      />
                      <div className="media-body">
                        <div className="chat-item-title">
                          <span
                            className="chat-item-author"
                            data-filter-by="text"
                          >
                            Peggy
                          </span>
                          <span data-filter-by="text">Just now</span>
                        </div>
                        <div className="chat-item-body" data-filter-by="text">
                          <p>
                            Well done <a href="#">@all</a>. See you all at 2 for
                            the kick-off meeting. 🤜
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-module-bottom">
                  <form className="chat-form">
                    <textarea
                      className="form-control"
                      placeholder="Type message"
                      rows={1}
                      defaultValue={""}
                    />
                    <div className="chat-form-buttons">
                      <button type="button" className="btn btn-link">
                        <i className="material-icons">tag_faces</i>
                      </button>
                      <div className="custom-file custom-file-naked">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
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

export default Team;
