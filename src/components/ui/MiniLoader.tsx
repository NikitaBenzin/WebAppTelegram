import Image from 'next/image'

interface Props {
	width?: number
	height?: number
}

export function MiniLoader({ height = 80, width = 80, ...rest }: Props) {
	return (
		<Image
			src={'/loader.png'}
			width={width}
			height={height}
			priority
			alt=""
			className="mx-auto animate-spin"
			{...rest}
		/>
	)
}
