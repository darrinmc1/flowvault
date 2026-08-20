import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Star, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for individuals and small projects getting started.',
    badge: null,
    icon: Zap,
    features: [
      'Up to 3 projects',
      '1 team member',
      'Basic analytics',
      '5GB storage',
      'Community support',
    ],
    cta: 'Get Started Free',
    ctaHref: '/sign-up',
    variant: 'outline' as const,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power and collaboration.',
    badge: 'Most Popular',
    icon: Star,
    features: [
      'Unlimited projects',
      'Up to 10 team members',
      'Advanced analytics',
      '50GB storage',
      'Priority email support',
      'Custom integrations',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/sign-up',
    variant: 'default' as const,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced security and compliance needs.',
    badge: null,
    icon: Building2,
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Enterprise analytics',
      'Unlimited storage',
      'Dedicated support',
      'SSO & SAML',
      'SLA guarantee',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    variant: 'outline' as const,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 px-4 text-center">
        <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm font-medium">
          🚀 Early Access — Lock in Founding Member Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Start free, scale as you grow. No hidden fees, no surprises.
          Early access members lock in these rates forever.
        </p>
        <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-2 text-sm text-amber-800 dark:text-amber-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <strong>Early Access:</strong> Pricing shown is our founding member rate — available until launch.
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.badge
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1 text-xs font-semibold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="text-sm mt-1">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    asChild
                    variant={plan.variant}
                    className="w-full"
                    size="lg"
                  >
                    <Link href={plan.ctaHref}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Early Access Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">🎉 Join Our Early Access Program</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We&apos;re currently in pre-launch. Sign up now to lock in founding member pricing,
            get early access to new features, and help shape the product roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/sign-up">Claim Early Access</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            No credit card required to start. Cancel anytime.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'What is the Early Access program?',
                a: 'Early access members sign up before our official launch and lock in the founding member pricing shown above — permanently, even after we raise prices post-launch.',
              },
              {
                q: 'Can I change plans later?',
                a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a free trial?',
                a: 'The Starter plan is free forever. Pro and Enterprise plans include a 14-day free trial — no credit card required.',
              },
              {
                q: 'What happens after the early access period?',
                a: 'Pricing may increase after our official launch. Early access members keep their locked-in rate as long as they remain subscribed.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
