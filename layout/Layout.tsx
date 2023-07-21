import React, { Children, ReactNode } from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


interface Props {
    children: ReactNode;
}

export function Layout({children}:Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            
        </>
    )
}

export default Layout;