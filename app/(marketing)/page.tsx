import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { SiteConfig } from "@/config/site.config";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Unlock Your Potential with FlowVault
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  FlowVault is your all-in-one platform for mastering skills, tracking progress, and achieving your goals. From learning new subjects to building habits, we provide the tools you need to succeed.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Button size="lg" asChild>
                    <a href="/sign-up">Get Started Free</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#how-it-works">See How It Works</a>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="/images/hero-image.svg"
                  alt="FlowVault Hero"
                  className="w-full max-w-md lg:max-w-lg rounded-lg shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <img src="/icons/learn.svg" alt="Learn Icon" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn Anything</h3>
                <p className="text-muted-foreground">Access a vast library of lessons and resources to acquire new knowledge and skills.</p>
              </div>
              <div className="text-center p-6 border rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <img src="/icons/track.svg" alt="Track Icon" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                <p className="text-muted-foreground">Visualize your learning journey with detailed progress reports and analytics.</p>
              </div>
              <div className="text-center p-6 border rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <img src="/icons/achieve.svg" alt="Achieve Icon" className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Achieve Your Goals</h3>
                <p className="text-muted-foreground">Set personalized goals and stay motivated with our intuitive goal-setting tools.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of learners who are transforming their lives with FlowVault. Sign up today and take the first step towards achieving your dreams.
            </p>
            <Button size="lg" asChild>
              <a href="/sign-up">Sign Up for Free</a>
            </Button>
          </div>
        </section>

        <Suspense>
          <NewsletterForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
