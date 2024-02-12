import React from 'react'
import { Outlet } from 'react-router-dom'
import './DocumentationLayout.css'

const DocumentationLayout = () => {
  return (
    <div className='docs'><Outlet/></div>
  )
}

export default DocumentationLayout