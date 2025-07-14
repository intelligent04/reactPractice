import React from 'react'
import Link from 'next/link'

const Navitem = () => {
  return (
    <div>
      <Link href="/admin">Admin</Link>
      <br></br>
      <Link href="/user">User</Link>
    </div>
  )
}

export default Navitem