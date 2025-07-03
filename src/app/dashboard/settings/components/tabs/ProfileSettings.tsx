import { AvatarSection } from './profile/AvatarSection'
import { BioSection } from './profile/BioSection'
import { PersonalInfoSection } from './profile/PersonalInfoSection'

export function ProfileSettings() {
	return (
		<div className="space-y-6">
			<AvatarSection />
			<PersonalInfoSection />
			<BioSection />
		</div>
	)
}
