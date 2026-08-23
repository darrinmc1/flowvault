import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Switched from spreadsheets and saved 15 hours a week. The automated workflows alone paid for itself in the first month.",
    author: "Sarah K.",
    role: "Operations Manager",
    metric: "15 hrs/week saved",
  },
  {
    quote: "Our team's project delivery rate jumped 40% after adopting this tool. The visibility into bottlenecks was a game-changer.",
    author: "Marcus T.",
    role: "Engineering Lead",
    metric: "40% faster delivery",
  },
  {
    quote: "Onboarded 3 new clients in a single week without any extra headcount. The templates made setup ridiculously fast.",
    author: "Priya M.",
    role: "Founder, Agency",
    metric: "3x client onboarding",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Trusted by early adopters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Real results from real teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-violet-500/40 hover:bg-white/8 transition-all duration-300"
            >
              {/* Metric badge */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-violet-500/15 border border-violet-500/30 px-3 py-1">
                <span className="text-xs font-bold text-violet-300">{t.metric}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-slate-500 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            Setup in under 5 minutes
          </span>
        </div>
      </div>
    </section>
  );
}
