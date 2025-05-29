import { PUBLIC_PAGE } from '@/config/public-page.config'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {}

export function Header({}: Props) {
	const pathname = usePathname()
	return (
		<header className="text-center p-4">
			{pathname === PUBLIC_PAGE.HOME ? (
				// <h1 className="text-4xl font-bold">Choose flower</h1>
				<nav>
					<ul className="flex justify-between items-center">
						<li className="self-start w-fit">
							{/* <button className="w-fit hover:scale-105 transition-all duration-300 cursor-pointer">
								<Image
									alt="Back arrow"
									src="/arrow-icon.png"
									width={45}
									height={45}
									className="rotate-180"
									draggable="false"
								/>
							</button> */}
						</li>
						<li className="flex gap-4">
							<button className="w-fit hover:scale-105 transition-all duration-300 cursor-pointer">
								<Image
									alt="FAQ"
									src="/faq.png"
									width={45}
									height={45}
									draggable="false"
								/>
							</button>
							<button className="w-fit hover:scale-105 transition-all duration-300 cursor-pointer">
								<Image
									alt="Info"
									src="/info.png"
									width={45}
									height={45}
									draggable="false"
								/>
							</button>
						</li>
					</ul>
				</nav>
			) : (
				<nav>
					<ul className="grid grid-cols-[auto_1fr_auto] items-center">
						<li className="self-start w-fit">
							<Link href={PUBLIC_PAGE.HOME}>
								<Image
									alt="Back arrow"
									src="/arrow-icon.png"
									width={45}
									height={45}
									className="rotate-180"
									draggable="false"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}
