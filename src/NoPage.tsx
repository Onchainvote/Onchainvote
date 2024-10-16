import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <>
      <div style={
        {
          fontSize: "10rem",
          marginTop: "10rem"
        }
      }>404 Not found</div>
      <p>Back to <Link style={
        {
          color: "black !important"
        }
      } to="/">Accreditation</Link></p>
    </>
  )
}

export default NoPage