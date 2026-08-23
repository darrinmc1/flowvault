"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

const heroEmailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type HeroEmailFormValues = z.infer<typeof heroEmailSchema>

export function HeroEmailCapture() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeroEmailFormValues>({
    resolver: zodResolver(heroEmailSchema),
  })

  async function onSubmit(data: HeroEmailFormValues) {
    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      })

      if (!response.ok) {
        const json = await response.json()
        throw new Error(json?.message ?? "Something went wrong. Please try again.")
      }

      setIsSubmitted(true)
      reset()
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when we launch with your exclusive early access.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 w-full max-w-md">
        <div className="flex items-center gap-2 rounded-full bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 px-6 py-3 text-green-700 dark:text-green-300">
          <Icons.check className="h-5 w-5" />
          <span className="font-medium">You&apos;re on the early access list!</span>
        </div>
        <p className="text-sm text-muted-foreground">
          We&apos;ll email you when we launch.{" "}
          <button
            onClick={() => setIsSubmitted(false)}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Sign up another email
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-lg">
      <div className="rounded-lg border bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
        🚀 <span className="font-medium text-foreground">Early access</span> — Get exclusive templates &amp; a launch discount
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2 sm:flex-row"
      >
        <div className="flex-1">
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className={cn(
              "h-11 text-base",
              errors.email && "border-destructive focus-visible:ring-destructive"
            )}
            disabled={isLoading}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-left text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 shrink-0 px-6"
          )}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Get Early Access"
          )}
        </button>
      </form>
      <p className="text-xs text-muted-foreground">
        No spam, ever. Unsubscribe at any time.{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
          Privacy policy
        </Link>
      </p>
    </div>
  )
}
