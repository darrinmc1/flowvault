"use client"

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

/**
 * AuthNav — lightweight auth status bar.
 * Shows Sign In / Sign Up buttons when signed out, UserButton when signed in.
 * Gracefully handles unloaded / unconfigured Clerk state.
 */
export function AuthNav({
  className,
  signInLabel = "Log In",
  signUpLabel = "Sign Up",
  showOnSignedIn = true,
}: {
  className?: string
  signInLabel?: string
  signUpLabel?: string
  showOnSignedIn?: boolean
}) {
  const { isSignedIn, isLoaded } = useUser()

  // Clerk not yet loaded or not configured — render nothing gracefully
  if (!isLoaded) return null

  if (isSignedIn && showOnSignedIn) {
    return (
      <div className={cn("flex items-center", className)}>
        <UserButton
          appearance={{
            elements: { avatarBox: "h-8 w-8" },
          }}
        />
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <SignInButton mode="modal">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            {signInLabel}
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            className={cn(
              "px-4 py-1.5 text-sm font-bold rounded-xl text-white",
              "bg-gradient-to-r from-cyan-500 to-blue-600",
              "hover:from-cyan-400 hover:to-blue-500",
              "shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
              "transition-all duration-300 hover:scale-105",
            )}
          >
            {signUpLabel}
          </button>
        </SignUpButton>
      </div>
    )
  }

  return null
}
