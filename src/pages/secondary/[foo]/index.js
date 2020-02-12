import React from 'react'
import Link from 'next/link'

const Secondary = ({ query }) => {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Secondary Page</h1>
      <p>
        <strong>Foo:</strong> {query.foo}
      </p>
    </>
  )
}

Secondary.getInitialProps = async ({ query }) => {
  return { query }
}

export default Secondary
