import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	allowedDevOrigins: [
		'70cb-78-88-196-154.ngrok-free.app',
		'*.70cb-78-88-196-154.ngrok-free.app'
	],
	images: {
		domains: ['api.telegram.org']
	}
}

export default nextConfig
