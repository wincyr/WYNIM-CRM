import React from "react";
import { Settings, UserRoundCog, LogOut, Search, LayoutDashboard } from 'lucide-react';

function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 border-b-2 rounded-btn shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"> 
                <div className="w-8 rounded">
                    <img src="/Wynim-removebg-preview.png" alt="Wynim-Logo" />
                </div>
                WYNIM CRM System </a>
            </div>
            <div className="navbar-start hidden lg:flex gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li><a> Dashboard <LayoutDashboard /> </a></li>
                    <li>
                        <details>
                        <summary> Statuses </summary>
                        <ul className="p-2">
                            <li><a> Accepted </a></li>
                            <li><a> Rejected </a></li>
                            <li><a> Pending </a></li>
                        </ul>
                        </details>
                    </li>
                    <li> <a> Programs and Schools <Search /> </a> </li>
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a>
                            <UserRoundCog /> Profile
                        </a>
                    </li>
                    <li><a> < Settings /> Settings </a></li>
                    <li><a> <LogOut /> Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar