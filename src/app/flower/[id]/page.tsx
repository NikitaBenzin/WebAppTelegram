import { FlowerHomePage } from './FlowerHomePage'

export default async function Page({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<section>
			<FlowerHomePage id={id} />
		</section>
	)
}
