import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function() {
  return (
    <div>
      <Head>
        <title>Root Pages</title>
      </Head>
      <h1>Root Pages</h1>
      <p>
        <Link href="/basic">
          <a>Basic</a>
        </Link>
      </p>
      <p>
        <Link href="/primary">
          <a>Primary</a>
        </Link>
      </p>
      <p>
        <Link href="/secondary">
          <a>Secondary</a>
        </Link>
      </p>
      <p>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </p>
      <p>
        <Link href="/numbers/123">
          <a>Numbers</a>
        </Link>
      </p>
      <p>
        <Link href="/hocs">
          <a>Hocs</a>
        </Link>
      </p>
      <p>
        <Link href="/env">
          <a>Env</a>
        </Link>
      </p>
      <p>
        <Link href="/runtime-configuration">
          <a>Runtime Configuration</a>
        </Link>
      </p>
      <p>
        <Link href="/not-exist">
          <a>Error</a>
        </Link>
      </p>
      <p>
        <Link href="/data-fetching">
          <a>Data Fetching</a>
        </Link>
      </p>
      <p>
        <Link href="/use-state">
          <a>useState()</a>
        </Link>
      </p>
      <p>
        <Link href="/use-callback">
          <a>useCallback()</a>
        </Link>
      </p>
      <p>
        <Link href="/use-memo">
          <a>useMemo()</a>
        </Link>
      </p>
      <p>
        <Link href="/use-effect">
          <a>useEffect()</a>
        </Link>
      </p>
    </div>
  )
}
