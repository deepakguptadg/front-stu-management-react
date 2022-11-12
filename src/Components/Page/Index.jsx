import React from 'react'
import Login from './Login'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
const Index = ({ getvalue }) => {
    let navigate = useNavigate();
    const [showLoginPage, setShowLoginPage] = useState(false);
    const LoginCall = (type) => {
        setShowLoginPage(true)
        getvalue(type)
    }
    return (
        <>
            {
                showLoginPage ?
                    <Login setShowLoginPage={setShowLoginPage}/>
                    :
                    <>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div class="card text-white bg-danger mb-3" >
                                        <div class="card-header">Admin</div>
                                        <div class="card-body text-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: "70px" }} alt="" />
                                            <h5 class="card-title mt-2" style={{cursor : 'pointer'}} onClick={() => LoginCall('Admin')}>Login As Admin</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <div class="card text-white bg-danger mb-3">
                                        <div class="card-header">Institute</div>
                                        <div class="card-body text-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: "70px" }} alt="" />
                                            <h5 class="card-title mt-2" style={{cursor : 'pointer'}}  onClick={() => LoginCall('Institute')}>Login As Institute</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4">
                                    <div class="card text-white bg-danger mb-3" >
                                        <div class="card-header">Student</div>
                                        <div class="card-body text-center">
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: "70px" }} alt="" />
                                            <h5 class="card-title mt-2" style={{cursor : 'pointer'}} onClick={() => LoginCall('Student')}>Login As Student</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Index