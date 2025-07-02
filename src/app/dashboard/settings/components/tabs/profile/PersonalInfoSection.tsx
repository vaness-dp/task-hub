import { SettingsButton } from '../../common/SettingsButton'
import { SettingsCard } from '../../common/SettingsCard'
import { SettingsInput } from '../../common/SettingsInput'

export function PersonalInfoSection() {
	return (
		<SettingsCard
			title="Personal Information"
			description="Update your personal details and contact information"
		>
			<div className="grid grid-cols-2 gap-4">
				<SettingsInput
					label="First Name"
					placeholder="John"
					defaultValue="John"
				/>
				<SettingsInput
					label="Last Name"
					placeholder="Doe"
					defaultValue="Doe"
				/>
				<SettingsInput
					label="Email Address"
					type="email"
					placeholder="john.doe@example.com"
					defaultValue="john.doe@example.com"
					className="col-span-2"
				/>
				<SettingsInput
					label="Job Title"
					placeholder="Product Manager"
					defaultValue="Product Manager"
				/>
				<SettingsInput
					label="Department"
					placeholder="Product"
					defaultValue="Product"
				/>
				<SettingsInput
					label="Phone Number"
					placeholder="+1 (555) 123-4567"
					className="col-span-2"
				/>
			</div>

			<div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
				<div className="flex justify-end space-x-3">
					<SettingsButton variant="secondary">Cancel</SettingsButton>
					<SettingsButton variant="primary">Save Changes</SettingsButton>
				</div>
			</div>
		</SettingsCard>
	)
}
