import React from 'react'
import getConfig from 'next/config'
import Link from 'next/link'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

console.log(serverRuntimeConfig?.mySecret)

console.log(publicRuntimeConfig?.staticFolder)

export default function() {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Runtime Configuration Page</h1>
      <p>
        <strong>customKey:</strong> {process.env.customKey}
      </p>
      <p>
        <strong>serverRuntimeConfig.mySecret:</strong> {serverRuntimeConfig?.mySecret}
      </p>
      <p>
        <strong>serverRuntimeConfig.secondSecret:</strong> {serverRuntimeConfig?.secondSecret}
      </p>
      <p>
        <strong>publicRuntimeConfig.staticFolder:</strong> {publicRuntimeConfig?.staticFolder}
      </p>
    </>
  )
}
