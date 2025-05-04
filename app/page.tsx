import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  Palette,
  RefreshCw,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <div className="relative w-8 h-8 overflow-hidden rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>FaviMotion</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="#features"
                className="text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
              <Button variant="default" size="sm" className="ml-4">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  AI-Powered Favicon Generator
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bring Your Website to Life with Animated Favicons
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create eye-catching, animated favicons and illustrations in
                  seconds with our AI-powered generator. Stand out from the
                  crowd and enhance your brand identity.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Create Your Favicon
                    <Sparkles className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    See Examples
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No design skills required</span>
                  <Check className="ml-2 h-4 w-4 text-primary" />
                  <span>Export in multiple formats</span>
                  <Check className="ml-2 h-4 w-4 text-primary" />
                  <span>Free to try</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
                  <div className="relative z-10 flex h-full flex-col items-center justify-center rounded-lg bg-white p-6 dark:bg-zinc-950">
                    <div className="mb-4 grid grid-cols-3 gap-4">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="relative h-16 w-16 overflow-hidden rounded-md border bg-muted"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`h-10 w-10 rounded-full bg-gradient-to-br from-violet-${
                                (i % 3) * 100 + 300
                              } to-fuchsia-${
                                (i % 3) * 100 + 300
                              } animate-pulse`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-12 w-12 overflow-hidden rounded-md border bg-muted flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-bounce"></div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      <div className="flex h-12 items-center gap-1 rounded-md border bg-muted px-3">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="ml-2 h-4 w-4 rounded-sm bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Create Stunning Animated Favicons
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform makes it easy to create professional
                  animated favicons that capture attention and enhance your
                  brand.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Generation</h3>
                  <p className="text-muted-foreground">
                    Describe what you want or upload an image, and our AI will
                    create the perfect animated favicon for your brand.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ImageIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Custom Illustrations</h3>
                  <p className="text-muted-foreground">
                    Generate beautiful illustrations in various styles, similar
                    to undraw.io, perfect for modern favicons and branding.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Multiple Animation Styles
                  </h3>
                  <p className="text-muted-foreground">
                    Choose from dozens of animation styles including bounce,
                    pulse, rotate, and custom motion paths.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Customizable Colors</h3>
                  <p className="text-muted-foreground">
                    Match your brand colors perfectly with our advanced color
                    customization tools.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Optimized Performance</h3>
                  <p className="text-muted-foreground">
                    Our favicons are optimized for performance, ensuring they
                    don't slow down your website.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <RefreshCw className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Multiple Export Formats</h3>
                  <p className="text-muted-foreground">
                    Export your animated favicon as ICO, PNG sequence, GIF, SVG,
                    or WebP for maximum compatibility.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">
                    One-Click Implementation
                  </h3>
                  <p className="text-muted-foreground">
                    Get the code snippet to add your animated favicon to your
                    website with just one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your animated favicon in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Describe or Upload</h3>
                <p className="text-muted-foreground">
                  Describe what you want, choose an illustration style, or
                  upload your existing logo or icon.
                </p>
                <div className="mt-4 rounded-xl border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 rounded bg-muted"></div>
                      <div className="h-4 w-1/2 rounded bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Customize</h3>
                <p className="text-muted-foreground">
                  Choose animation style, colors, and timing to match your
                  brand.
                </p>
                <div className="mt-4 rounded-xl border bg-card p-4 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-muted flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20 animate-bounce"></div>
                    </div>
                    <div className="h-16 rounded-lg bg-muted flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20 animate-pulse"></div>
                    </div>
                    <div className="h-16 rounded-lg bg-muted flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20 animate-spin"></div>
                    </div>
                    <div className="h-16 rounded-lg bg-muted flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Export & Implement</h3>
                <p className="text-muted-foreground">
                  Download your favicon and add it to your website with our code
                  snippet.
                </p>
                <div className="mt-4 rounded-xl border bg-card p-4 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded bg-primary/20 animate-pulse"></div>
                      <div className="h-4 flex-1 rounded bg-muted"></div>
                    </div>
                    <div className="h-16 rounded-lg bg-muted p-2">
                      <div className="h-4 w-3/4 rounded bg-background"></div>
                      <div className="mt-2 h-4 w-1/2 rounded bg-background"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  See It In Action
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Animated Favicon Examples
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out these examples of what you can create with
                  FaviMotion
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border bg-background p-2 transition-all hover:shadow-lg"
                >
                  <div className="aspect-square flex items-center justify-center rounded-lg bg-muted p-4">
                    <div
                      className={`h-16 w-16 rounded-lg bg-gradient-to-br from-violet-${
                        (i % 3) * 100 + 300
                      } to-fuchsia-${(i % 3) * 100 + 300}`}
                      style={{
                        animation: [
                          "bounce 2s infinite",
                          "pulse 2s infinite",
                          "spin 2s infinite",
                          "ping 2s infinite",
                          "bounce 1s infinite",
                          "pulse 1s infinite",
                        ][i],
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium">Example {i + 1}</h3>
                    <p className="text-xs text-muted-foreground">
                      {
                        [
                          "Bouncing logo effect",
                          "Pulsing highlight effect",
                          "Rotating spinner",
                          "Ping notification style",
                          "Quick bounce attention",
                          "Subtle pulse branding",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-1.5">
                Create Your Own
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Pricing Plans
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose Your Plan
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple, transparent pricing for everyone
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">
                    Perfect for trying out FaviMotion
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>3 animated favicons</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic animations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>PNG & ICO export</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span>AI generation</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="mt-8">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm ring-2 ring-primary">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs text-primary">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    Perfect for small businesses
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $9
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited favicons</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>All animation styles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>All export formats</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic AI generation</span>
                  </li>
                </ul>
                <Button size="lg" className="mt-8">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Business</h3>
                  <p className="text-muted-foreground">
                    Perfect for agencies and teams
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $29
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced AI generation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom animation paths</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Team collaboration</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="mt-8">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about FaviMotion
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  What browsers support animated favicons?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Most modern browsers including Chrome, Firefox, Edge, and
                  Safari support animated favicons. Our system automatically
                  provides fallbacks for browsers with limited support.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Will animated favicons slow down my website?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  No, our animated favicons are highly optimized for
                  performance. They use minimal resources and won't impact your
                  website's loading speed.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  How do I implement the animated favicon on my website?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We provide a simple code snippet that you can add to the head
                  section of your HTML. It's just a few lines of code, and we
                  provide step-by-step instructions.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Can I convert my existing logo into an animated favicon?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes! You can upload your existing logo or icon, and our AI
                  will help transform it into an animated version while
                  preserving your brand identity.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Do you offer custom animation styles?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, our Business plan includes custom animation paths and
                  styles. You can also work with our design team for completely
                  custom animations.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-bold">
                  Can I change my favicon after creating it?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  You can edit your favicons anytime. All your creations are
                  saved in your account for future modifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Bring Your Website to Life?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Create your first animated favicon in minutes. No design
                  skills required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  See Examples
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex gap-2 items-center text-xl font-bold">
            <div className="relative w-8 h-8 overflow-hidden rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>FaviMotion</span>
          </div>
          <nav className="flex gap-4 sm:gap-6 md:ml-auto">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-2 md:ml-auto">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FaviMotion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
