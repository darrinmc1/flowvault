// =============================================================================
// SITE CONFIGURATION — FLOWVAULT
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions (shared across all empire sites)
// -----------------------------------------------------------------------------

type FiveTuple<T> = [T, T, T, T, T]

export interface NavLink {
  label: string
  href: string
}

export interface DashboardNavLink extends NavLink {
  icon: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  description: string
  color: string
}

export interface ThemeConfig {
  id: string
  emoji: string
  primaryColor: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  heroGradient: string
  darkMode: boolean
  bgClass: string
  textClass: string
  cardBg: string
  cardBorder: string
}

export interface BadgeConfig {
  tierNames: FiveTuple<string>
  tierEmojis: FiveTuple<string>
  tierColors: FiveTuple<string>
  xpPerTier: FiveTuple<number>
  lessonsPerTier: FiveTuple<number>
}

export interface NavConfig {
  marketing: NavLink[]
  dashboard: DashboardNavLink[]
}

export interface CopyConfig {
  heroTitle: string
  heroSubtitle: string
  ctaButton: string
  ctaSecondary: string
  loginTitle: string
  signupTitle: string
  foundingMemberHeading: string
  emailCaptureHeading: string
  emailCaptureSubheading: string
  feedbackPlaceholder: string
}

export interface PricingConfig {
  founder: { monthly: number; yearly: number }
  standard: { monthly: number; yearly: number }
  premium: { monthly: number; yearly: number }
}

export interface ContactConfig {
  email: string
  github: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  domain: string
  theme: ThemeConfig
  badges: BadgeConfig
  categories: Category[]
  nav: NavConfig
  copy: CopyConfig
  pricing: PricingConfig
  contact: ContactConfig
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getBadgeTier(config: SiteConfig, xp: number): number {
  const tiers = config.badges.xpPerTier
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i]) return i
  }
  return 0
}

export function getTierProgress(config: SiteConfig, xp: number): number {
  const tier = getBadgeTier(config, xp)
  const currentThreshold = config.badges.xpPerTier[tier]
  const nextThreshold = config.badges.xpPerTier[tier + 1]
  if (nextThreshold === undefined) return 100
  const progressInTier = xp - currentThreshold
  const tierRange = nextThreshold - currentThreshold
  return Math.min(Math.round((progressInTier / tierRange) * 100), 100)
}

export function getBadgeDisplay(config: SiteConfig, xp: number) {
  const tier = getBadgeTier(config, xp)
  return {
    tier,
    name: config.badges.tierNames[tier],
    emoji: config.badges.tierEmojis[tier],
    color: config.badges.tierColors[tier],
    progress: getTierProgress(config, xp),
    isMaxTier: tier === config.badges.tierNames.length - 1,
  }
}

// =============================================================================
// FLOWVAULT CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  name: "FlowVault",
  tagline: "Your Library of Done-For-You Business Automations",
  description:
    "Pre-built n8n workflows that save you weeks of trial and error. Content drafting, Telegram capture, QA review — download the JSON, import, and run.",
  domain: "flowvault-brown.vercel.app",

  theme: {
    id: "flowvault",
    emoji: "\u{1F5C2}️",
    primaryColor: "orange",
    accentColor: "amber",
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-600",
    heroGradient:
      "bg-gradient-to-br from-slate-950 via-orange-950/40 to-amber-950/60",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border border-white/10",
  },

  badges: {
    tierNames: ["Observer", "Tinkerer", "Builder", "Architect", "Automator"],
    tierEmojis: ["\u{1F441}️", "\u{1F527}", "\u{1F3D7}️", "\u{1F4D0}", "⚡"],
    tierColors: ["slate", "orange", "amber", "yellow", "emerald"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  categories: [
    {
      id: "content",
      name: "Content Automation",
      emoji: "✍️",
      description: "Draft blog posts, social threads, and newsletters on autopilot.",
      color: "orange",
    },
    {
      id: "capture",
      name: "Data Capture",
      emoji: "\u{1F4E5}",
      description: "Pipe ideas from Telegram, Slack, and email straight into your CMS.",
      color: "amber",
    },
    {
      id: "review",
      name: "QA & Review",
      emoji: "\u{1F50D}",
      description: "Automated proofreading, link checking, and publishing gates.",
      color: "yellow",
    },
  ],

  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "Blog", href: "/blog" },
      { label: "Updates", href: "/updates" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Lessons", href: "/dashboard/lessons", icon: "BookOpen" },
      { label: "Progress", href: "/dashboard/progress", icon: "TrendingUp" },
      { label: "Badges", href: "/dashboard/badges", icon: "Award" },
      { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
    ],
  },

  copy: {
    heroTitle: "Done-for-you n8n workflows",
    heroSubtitle:
      "Pre-built templates for content drafting, Telegram capture, and QA review. Download the JSON, import into n8n, and start saving hours today.",
    ctaButton: "Browse Templates",
    ctaSecondary: "See How It Works",
    loginTitle: "Welcome back",
    signupTitle: "Create your account",
    foundingMemberHeading: "Founding Member — Lock In Early Access Pricing",
    emailCaptureHeading: "New Workflows Every Week",
    emailCaptureSubheading:
      "Get n8n automation tips and new template drops in your inbox.",
    feedbackPlaceholder: "Which workflow should we build next?",
  },

  pricing: {
    founder: { monthly: 9, yearly: 84 },
    standard: { monthly: 15, yearly: 144 },
    premium: { monthly: 29, yearly: 276 },
  },

  contact: {
    email: "hello@flowvault.io",
    github: "https://github.com/darrinmc1",
  },
} as const satisfies SiteConfig
