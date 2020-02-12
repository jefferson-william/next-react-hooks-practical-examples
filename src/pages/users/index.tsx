import React from 'react'
import Link from 'next/link'

export default function() {
  return (
    <div>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Users</h1>
      <ul>
        <li>
          <Link href="/users/joao">
            <a>João</a>
          </Link>
        </li>
        <li>
          <Link href="/users/pedrinho">
            <a>Pedrinho</a>
          </Link>
        </li>
        <li>
          <Link href="/users/maria">
            <a>Maria</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
