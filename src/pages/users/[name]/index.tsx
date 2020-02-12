import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const User = () => {
  const { query } = useRouter()

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>User Page</h1>
      <p>
        <strong>Name:</strong> {query.name}
      </p>
    </>
  )
}

export default User
