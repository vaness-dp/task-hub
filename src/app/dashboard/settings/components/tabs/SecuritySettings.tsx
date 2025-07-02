import { KeyRound, Lock, Shield, Smartphone } from 'lucide-react'

import { SettingsButton } from '../common/SettingsButton'
import { SettingsCard } from '../common/SettingsCard'
import { SettingsInput } from '../common/SettingsInput'
import { SettingsToggle } from '../common/SettingsToggle'

export function SecuritySettings() {
	return (
		<div className="space-y-6">
			<SettingsCard
				title="Change Password"
				description="Update your account password to keep it secure"
			>
				<div className="space-y-4">
					<SettingsInput
						label="Current Password"
						type="password"
						placeholder="Enter current password"
					/>
					<SettingsInput
						label="New Password"
						type="password"
						placeholder="Enter new password"
					/>
					<SettingsInput
						label="Confirm New Password"
						type="password"
						placeholder="Confirm new password"
					/>
				</div>

				<div className="mt-6 flex justify-end">
					<SettingsButton
						variant="primary"
						icon={Lock}
					>
						Update Password
					</SettingsButton>
				</div>
			</SettingsCard>

			<SettingsCard
				title="Two-Factor Authentication"
				description="Add an extra layer of security to your account"
			>
				<div className="space-y-4">
					<SettingsToggle
						icon={Smartphone}
						title="SMS Authentication"
						description="Receive verification codes via text message"
						defaultChecked={false}
					/>
					<SettingsToggle
						icon={Shield}
						title="Authenticator App"
						description="Use an authenticator app like Google Authenticator"
						defaultChecked={true}
					/>
				</div>

				<div className="mt-6 flex space-x-3">
					<SettingsButton variant="secondary">Backup Codes</SettingsButton>
					<SettingsButton
						variant="primary"
						icon={KeyRound}
					>
						Setup 2FA
					</SettingsButton>
				</div>
			</SettingsCard>

			<SettingsCard
				title="Account Security"
				description="Additional security measures for your account"
			>
				<div className="space-y-4">
					<SettingsToggle
						icon={Lock}
						title="Login Alerts"
						description="Get notified of new sign-ins to your account"
						defaultChecked={true}
					/>
					<SettingsToggle
						icon={Shield}
						title="Session Management"
						description="Automatically log out inactive sessions"
						defaultChecked={false}
					/>
				</div>
			</SettingsCard>
		</div>
	)
}
