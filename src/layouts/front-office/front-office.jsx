import React from 'react'
import { Outlet } from 'react-router-dom'

const FrontOffice = () => {
  return (
    <div className='w-full h-screen bg-backOfficePrimary'>
      <Outlet />
    </div>
  )
}

export default FrontOffice;