import Navbar from '../ui/Navbar'
import Heading from '../ui/Heading'
import Cards from '../ui/Cards'
import Charts from '../ui/Charts'
import TableData from '../ui/TableData'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Cards />
      <Charts />
      <TableData />
    </div>
  )
}

export default Dashboard