import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "SC",
    rating: 5,
    quote:
      "We cut our deployment time by 60% in the first month. The automation features alone saved us over 20 hours per week across our engineering team.",
    metric: "60% faster deployments",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "ScaleUp Labs",
    avatar: "MR",
    rating: 5,
    quote:
      "Switching to this platform reduced our infrastructure costs by $4,200/month. The ROI was clear within the first two weeks of using it.",
    metric: "$4,200/mo saved",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Manager",
    company: "Nexus Digital",
    avatar: "PP",
    rating: 5,
    quote:
      "Our team went from spending 3 days on manual reporting to having everything automated. It's transformed how we make decisions.",
    metric: "3 days → 30 minutes",
  },
  {
    id: 4,
    name: "James Whitfield",
    role: "Founder & CEO",
    company: "Orbit SaaS",
    avatar: "JW",
    rating: 5,
    quote:
      "As a solo founder, I needed something that could scale with me. This platform handled our 10x growth without any hiccups or extra overhead.",
    metric: "10x growth, zero friction",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {testimonial.metric}
        </span>
      </div>
      <StarRating rating={testimonial.rating} />
      <blockquote className="text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Stories
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by teams who ship faster
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how beta users are saving time and cutting costs with real
            results from real teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-muted-foreground">Beta users</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold">$2.1M</p>
            <p className="text-sm text-muted-foreground">Saved by users</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-muted-foreground">Would recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
