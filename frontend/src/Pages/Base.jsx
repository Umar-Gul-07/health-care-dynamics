import React, { useEffect } from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    useEffect(() => {
        if (window.initTheme) {
            window.initTheme();
        }
    }, []);

    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}

export default Base