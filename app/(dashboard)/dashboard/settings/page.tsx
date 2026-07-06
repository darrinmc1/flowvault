"use client"

import { useUser } from "@clerk/nextjs"

export default function SettingsPage() {
  const { user, isLoaded } = useUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="glass-card p-6 rounded-2xl">
        {isLoaded && user && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400">Name</p>
              <p className="text-white font-medium">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white font-medium">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
