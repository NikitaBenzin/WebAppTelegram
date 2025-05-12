'use client'

import { Button } from '../ui/Button'
import { useSettingsForm } from './useSettingsForm'

export function SettingsForm() {
	const { register, handleSubmit, isLoading, onSubmit } = useSettingsForm()

	return (
		<div>
			<h2 className="text-4xl font-bold mb-7 text-center">Settings</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
				<div className="mb-4 flex space-x-4 flex-col gap-2">
					<label className="text-2xl font-bold">Name</label>
					<input
						className="border-[1px] border-text-primary w-full rounded-xl p-3 text-xl focus:outline-none"
						type="text"
						maxLength={12}
						placeholder="Enter the name"
						autoComplete="off"
						{...register('name', { required: true })}
					/>
				</div>

				<div className="w-full flex justify-center">
					<Button isLoading={isLoading} type="submit">
						Save
					</Button>
				</div>
			</form>
		</div>
	)
}
