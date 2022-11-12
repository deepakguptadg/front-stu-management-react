import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
const InstituteList = () => {

    const columns = [
        {
            name: 'S.No',
            selector: (row) => row.SNo,
            sortable: true
        },
        {
            name: 'Institute Name',
            selector: (row) => row.Institute_Name,
            sortable: true
        },
        {
            name: 'Institute Owener',
            selector: (row) => row.Institute_Owener,
            sortable: true
        },
        {
            name: 'Institute ID',
            selector: (row) => row.Institute_ID
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
            name: <p className='text-end'>Action</p>,
            cell: row => <>
                <Link to={`/institute-details`} className="btn btn-sm btn-info me-1"><i className='fa fa-eye'></i></Link>
                <Link to={`#`} className="btn btn-sm btn-danger me-1"><i class="fa fa-toggle-off" aria-hidden="true"></i></Link>
                <Link to={`#`} className="btn btn-sm btn-success me-1"><i className='fa fa-toggle-on'></i></Link>
                <Link to={`#`} className="btn btn-sm btn-warning me-1"><i className='fa fa-edit'></i></Link>
            </>

        }
    ]

    const data = [
        {
            "SNo": '#1',
            'Institute_Name': 'PRivate Institute',
            'Institute_Owener': 'Praveen',
            'Institute_ID': '8545SCF4',
            "Mobile": '9876543210',
            "Address": 'Testing Address',
        },
        {
            "SNo": '#2',
            'Institute_Name': 'PRivate Institute',
            'Institute_Owener': 'Ashok',
            'Institute_ID': '8545SCF4',
            "Mobile": '9876543210',
            "Address": 'Testing Address',
        },
        {
            "SNo": '#3',
            'Institute_Name': 'PRivate Institute',
            'Institute_Owener': 'Lokesh',
            'Institute_ID': '8545SCF4',
            "Mobile": '9876543210',
            "Address": 'Testing Address',
        },
        {
            "SNo": '#4',
            'Institute_Name': 'PRivate Institute',
            'Institute_Owener': 'Deepak',
            'Institute_ID': '8545SCF4',
            "Mobile": '9876543210',
            "Address": 'Testing Address',
        },
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
                            <li class="breadcrumb-item active">Institute List</li>
                        </ol>
                    </nav>
                </div>
                <section class="section contact">
                    <div class="row gy-4">
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

export default InstituteList