import { AvatarSection, BioSection, PersonalInfoSection } from './profile'

export function ProfileSettings() {
	return (
		<div className="space-y-6">
			<AvatarSection />
			<PersonalInfoSection />
			<BioSection />
		</div>
	)
}
