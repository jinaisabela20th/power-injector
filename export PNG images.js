export const HOMEPAGE_URL:string="https://www.pylons.tech/"

import '@testing-library/jest-dom/extend-expect'
import { setConfig } from 'next/config'
import config from './next.config'

const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true
  },
// sellecting whitch images will be sorted //
      "go.lintTool": "golangci-lint",
    "go.inferGopath": false,


module.exports = nextConfig

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io']
  },
