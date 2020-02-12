import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Numbers = () => {
  const { query } = useRouter()

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Numbers Page</h1>
      <p>
        <strong>Numbers:</strong> {query.numbers}
      </p>
    </>
  )
}

export default Numbers
