import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	allowedDevOrigins: [
		'5cf2-78-88-196-154.ngrok-free.app',
		'*.5cf2-78-88-196-154.ngrok-free.app'
	],
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
