import { LayoutDashboard, Search, TrendingUp } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "../../router";
import { ShieldEllipsis } from 'lucide-react';
import { Files } from 'lucide-react';
import React from 'react'

export default function DashboardLayout() {
    return (
        <div>
            <div className="drawer lg:drawer-open shadow-md">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className={`drawer-content flex flex-col mx-4`}>
                    <Outlet />
                </div>
                <div className="drawer-side rounded-md ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
                        <a className="btn btn-ghost text-xl">
                            <div className="w-8 rounded">
                                <img src="/Wynim-removebg-preview.png" alt="Wynim-Logo" />
                            </div>
                            WYNIM CRM System
                        </a>
                        <div className='divider divider-neutral'></div>
                        <li className='mb-2'><Link to={Routes.admin.dashboard}> <LayoutDashboard /> Dashboard </Link></li>
                        <li className='mb-2'>
                            <details>
                                <summary> <TrendingUp /> Statuses </summary>
                                <ul className="p-2">
                                    <li><a> Accepted </a></li>
                                    <li><a> Rejected </a></li>
                                    <li><a> Pending </a></li>
                                </ul>
                            </details>
                        </li>
                        <li className='mb-2'> <Link to={Routes.admin.programsandschools}> <Search /> Programs and Schools </Link> </li>
                        <li className='mb-2'><Link to={Routes.admin.addanadmin}> <ShieldEllipsis /> Admin Data </Link></li>
                        <li className='mb-2'><Link to={Routes.admin.collectionofdocuments}> <Files /> Collection of Documents </Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}