import React from 'react';

function Header() {
    return (
        <div className="h-14 w-full shadow-sm bg-white flex flex-row justify-between items-center px-10">
            {/*logo*/}
            <div>
                <h1 className="text-xl text-sky-400 font-Pop">Logo</h1>
            </div>
            {/* navbar*/}
            <div className=" fx space-x-3  ">
                <h1 className="text-lg text-slate-600 font-Pop  ">Home</h1>
                <h1 className="text-lg text-slate-600 font-Pop">About</h1>
                <h1 className="text-lg text-slate-600 font-Pop">service</h1>
                <h1 className="text-lg text-slate-600 font-Pop">Contact</h1>
            </div>
        </div>
    );
}

export default Header;
