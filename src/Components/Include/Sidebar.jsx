import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to={'/dashboard'}>
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span>Institute</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/add-institute">
                                    <i className="bi bi-circle"></i><span>Add Institute</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/institute-list">
                                    <i className="bi bi-circle"></i><span>Institute List</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Student</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/student-list">
                                    <i className="bi bi-circle"></i><span>Student List</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to={'/contact'}>
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to={'/permission'}>
                            <i className="bi bi-envelope"></i>
                            <span>Permission</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to={'#'}>
                            <i class="bi bi-box-arrow-right"></i>
                            {/* <span></span> */}
                            <span type="button" data-bs-toggle="modal" data-bs-target="#verticalycentered">
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </aside>

            <div class="modal fade" id="verticalycentered" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="box pt-2 pe-2  text-end">
                            {/* <span class="modal-title">Student Management Say</span> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            {/* <i class="fa fa-question-circle" aria-hidden="true"></i> */}
                            <i class="fa fa-info-circle" style={{ fontSize: '45px', color: '#ffb5a7' }} aria-hidden="true"></i>
                            <h5 className='mt-3'>Do You Want to Logout</h5>
                        </div>
                        <div class="row justify-content-center pb-4">
                            <div className="col-3">
                                <button type="button" class="btn btn-sm btn-secondary w-100" data-bs-dismiss="modal">No</button>
                            </div>
                            <div className="col-3">
                                <button type="button" class="btn btn-sm btn-primary w-100">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar