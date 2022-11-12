import React from 'react'

const AddInstitute = () => {
    return (
        <>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Contact</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Pages</li>
                            <li class="breadcrumb-item active">Institute Add </li>
                        </ol>
                    </nav>
                </div>
                <section class="section contact">
                    <div class="row gy-4">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Institute Registration Form</h5>

                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingName" placeholder="Your Name"/>
                                                    <label for="floatingName">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingName" placeholder="Your Name"/>
                                                    <label for="floatingName">Institute Owner</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="floatingEmail" placeholder="Your Email"/>
                                                    <label for="floatingEmail">Email</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-floating">
                                                <input type="Phone" class="form-control" id="floatingPhone" placeholder="Your Phone"/>
                                                    <label for="floatingPhone">Phone</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                    <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Address" id="floatingTextarea" style={{height: '100px'}}></textarea>
                                                <label for="floatingTextarea">Address</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="col-md-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="floatingCity" placeholder="City"/>
                                                        <label for="floatingCity">City</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-floating mb-3">
                                                <select class="form-select" id="floatingSelect" aria-label="State">
                                                    <option selected="">New York</option>
                                                    <option value="1">Oregon</option>
                                                    <option value="2">DC</option>
                                                </select>
                                                <label for="floatingSelect">State</label>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingZip" placeholder="Zip"/>
                                                    <label for="floatingZip">Zip</label>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary me-2">Submit</button>
                                            <button type="reset" class="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AddInstitute