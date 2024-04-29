import Navbar from '../ui/Navbar'
import AddAnAdmin from '../ui_components/AddAnAdmin'
import { AdminTable } from '../ui_components/AdminTable'
import React from 'react'

function AdminData() {
    return (
        <div>
            <Navbar />
            <AddAnAdmin />
            <AdminTable />
        </div>
    )
}

export default AdminData