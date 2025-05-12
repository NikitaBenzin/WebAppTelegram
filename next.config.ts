import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	allowedDevOrigins: [
		'b80d-78-88-196-154.ngrok-free.app',
		'*.b80d-78-88-196-154.ngrok-free.app'
	],
	images: {
		domains: ['api.telegram.org']
	}
}

export default nextConfig
