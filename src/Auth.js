import React from 'react'
import Header from './Components/Include/Header'
import Sidebar from './Components/Include/Sidebar'

const Auth = ({ cmp, paths, getvalue }) => {

    const Components = cmp
    return (
        <>
            {
                paths === '/' || paths === '/pageNotFound'?
                    (<></>)
                    :
                    <>
                        <Header />
                        <Sidebar />
                    </>
            }
            <Components getvalue={getvalue}/>
        </>
    )
}

export default Auth