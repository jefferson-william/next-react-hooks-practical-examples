import React from 'react'
import Link from 'next/link'
import { Title } from '~/components/SecondaryPage/styles'

const Secondary = () => {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <Title>Secondary Page</Title>
      <ul>
        <li>
          <Link href="/secondary/bar">
            <a>bar</a>
          </Link>
        </li>
        <li>
          <Link href="/secondary/baz">
            <a>baz</a>
          </Link>
        </li>
        <li>
          <Link href="/secondary/xyz">
            <a>xyz</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Secondary
