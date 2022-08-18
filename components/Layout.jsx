import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className="max-w-8xl mx-auto font-Pop">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
