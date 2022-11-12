import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const columns = [
        {
            name: 'S.No',
            selector: (row) => row.SNo,
            sortable: true
        },
        {
            name: 'Student Name',
            selector: (row) => row.Student_Name
        },
        {
            name: 'Mobile',
            selector: (row) => row.Mobile,
            sortable: true
        },
        {
            name: 'Address',
            selector: (row) => row.Address,
            sortable: true
        },
        {
            name: 'LOCATION',
            selector: (row) => row.location,
            sortable: true
        },
        {
            name: <p className='text-end'>Action</p>,
            cell: row => <>
                <Link to={`/student-details`}
                    className="btn btn-sm btn-info">View</Link>

            </>

        }
    ]

    const data = [
        {
            "SNo": '#1',
            'Student_Name': 'Praveen',
            "Mobile": '9876543210',
            "Address": 'Testing Address',
        },
        {
            "SNo": '#2',
            'Student_Name': 'Ashok',
            "Mobile": '3452345345',
            "Address": 'Testing Address',
        }
    ]
    return (
        <>
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Contact</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item">Pages</li>
                            <li class="breadcrumb-item active">Student List</li>
                        </ol>
                    </nav>
                </div>
                <section class="section contact">
                    <div class="row">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div className="tbl_heading_box d-flex justify-content-between">
                                        <h5 class="card-title">Student Data</h5>
                                        <div className="box">
                                            <div className="row">
                                                <div className="col-6">
                                                    <input type="text" value={''} onChange={(e) => alert(e.target.value)} className='form-control' placeholder='Search By Mobile No ...' />
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" value={''} onChange={(e) => alert(e.target.value)} className='form-control' placeholder='Search By Name ...' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <DataTable
                                        columns={columns}
                                        // data={filter}
                                        data={data}
                                        pagination
                                        // selectableRows
                                        // selectableRowsHighlight
                                        highlightOnHover
                                        subHeader
                                    // subHeaderComponent={
                                    //     <>
                                    //         <div className="col-12">

                                    //         </div>
                                    //     </>
                                    // }
                                    // subHeaderAlign='right'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default StudentList