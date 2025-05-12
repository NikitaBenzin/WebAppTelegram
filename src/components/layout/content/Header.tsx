import { PAGE } from '@/config/public-page.config'
import { useFlowerNameStore } from '@/store/flowerName.store'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {}

export function Header({}: Props) {
	const flowerName = useFlowerNameStore(state => state.name)

	const pathname = usePathname()
	return (
		<header className="text-center p-4 bg-background-secondary">
			{pathname === '/' ? (
				<h1 className="text-4xl font-bold">Choose flower</h1>
			) : (
				<nav>
					<ul className="grid grid-cols-[auto_1fr_auto] items-center">
						<li className="self-start w-fit">
							<Link
								href={
									pathname.includes(PAGE.SETTINGS) ? PAGE.FLOWER : PAGE.HOME
								}
							>
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
						<li>
							<h1 className="text-4xl font-bold">
								{Number(flowerName?.length) > 10
									? flowerName?.slice(0, 10)
									: flowerName}
							</h1>
						</li>
						<li className="justify-self-end">
							<Link href={PAGE.SETTINGS}>
								<Image
									alt="Settings"
									src="/settings-icon.png"
									width={45}
									height={45}
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
