import React from 'react'
import Link from 'next/link'

export default function() {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Env Page</h1>
      <p>
        <strong>customKey:</strong> {process.env.customKey}
      </p>
    </>
  )
}
