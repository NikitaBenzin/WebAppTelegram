import { Button } from '../ui/Button'
import { Popup } from '../ui/Popup'
import { usePetNameForm } from './useChangeNameForm'

export function ChangeName() {
	const { register, handleSubmit, isLoading, onSubmit } = usePetNameForm()

	return (
		<Popup>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="relative z-10 bg-zinc-200 w-2xs h-36 flex justify-center flex-col rounded-xl p-6 gap-2"
			>
				<label htmlFor="name" className="font-semibold pt-4">
					Name
				</label>
				<input
					id="name"
					type="text"
					maxLength={12}
					placeholder="Enter the name"
					autoComplete="off"
					className="border rounded px-2 py-1"
					{...register('name', { required: true })}
				/>
				<Button isLoading={isLoading} type="submit">
					Save
				</Button>
			</form>
		</Popup>
	)
}
