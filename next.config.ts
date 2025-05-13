import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// swcMinify: true,
	allowedDevOrigins: ['185.70.196.187:8880', '*.185.70.196.187:8880'],
	images: {
		domains: ['api.telegram.org']
	}
}

export default nextConfig
