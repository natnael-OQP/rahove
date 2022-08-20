import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className=" mx-auto bg-white max-w-8xl font-mont">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
