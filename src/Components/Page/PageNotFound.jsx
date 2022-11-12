import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../img/not-found.svg'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <main>
                <div class="container">
                    <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <Link class="btn" to="#" onClick={() => navigate(-1)}>Back to home</Link>
                        <img src={img} class="img-fluid py-5" alt="Page Not Found" />
                    </section>
                </div>
            </main>
        </>
    )
}

export default PageNotFound