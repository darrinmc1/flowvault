export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🔐", "📦", "🔐", "🧩", "🔐"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-violet-200",
  dark: true,
  cardBorder: "border-slate-700",
  cardBg: "bg-slate-800/80",
  eyebrowColor: "text-amber-400",
  label: "Flow break",
  punchColor: "text-slate-300",
  buttonBg: "bg-amber-600",
  footerNote: "Even processes need a process",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "I streamlined my workflow.",
      punchline: "Now I have 40% more time to admire how streamlined it is.",
    },
    {
      setup: "My process has a process.",
      punchline: "The process's process is mostly 'email Karen.'",
    },
    {
      setup: "Automation is great until it automates the wrong thing.",
      punchline: "Then it's a very efficient way to make the same mistake 400 times.",
    },
    {
      setup: "I documented my workflow.",
      punchline: "Reading it back, I have no idea what I do either. But it looks professional.",
    },
  ],
  workflow: [
    {
      setup: "My team's workflow has 17 steps.",
      punchline: "Three of them are 're-upload the file.' It's tradition now.",
    },
    {
      setup: "The bottleneck in my process is the part where a human has to think.",
      punchline: "We're working on automating that. It's going great.",
    },
    {
      setup: "I made a flow chart of our process.",
      punchline: "It's mostly diamonds. Nobody told me life would be this complicated.",
    },
    {
      setup: "Standard operating procedures: because 'I'll remember next time' is not a system.",
    },
  ],
  automation: [
    {
      setup: "I automated our status emails.",
      punchline: "Now everyone gets 47 'still processing' emails a day, and nobody reads any of them.",
    },
    {
      setup: "My automation script failed.",
      punchline: "Which is the one thing it wasn't automated to tell me.",
    },
    {
      setup: "The rule is: if you do a task twice, automate it.",
      punchline: "The corollary: if you automate it twice, you've created two bugs.",
    },
    {
      setup: "I trust my automated reports.",
      punchline: "Until I see a number I like, at which point I distrust them enough to check.",
    },
  ],
}
