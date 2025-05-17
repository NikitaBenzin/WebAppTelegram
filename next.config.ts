import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	allowedDevOrigins: ['flower-rise.uk', '*.flower-rise.uk'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.telegram.org',
				pathname: '**'
			}
		]
	}
}

export default nextConfig
