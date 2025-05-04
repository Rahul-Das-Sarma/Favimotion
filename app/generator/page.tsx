"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Sparkles,
  Copy,
  RefreshCw,
  Check,
  Mountain,
  AArrowUpIcon as LetterA,
  Rocket,
  MessageCircle,
  Coffee,
  Globe,
  Heart,
  Music,
  Zap,
  ShoppingCart,
  Bell,
  Star,
  Bookmark,
  Home,
  Settings,
  User,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Example queries that users can click on
const EXAMPLE_QUERIES = [
  "A minimalist logo with a mountain that pulses gently",
  "A colorful letter 'A' that bounces up and down",
  "A simple rocket ship that rotates slowly",
  "A chat bubble with a subtle ping animation",
  "A coffee cup with steam that rises and fades",
  "A planet with a moon orbiting around it",
  "A simple heart that beats rhythmically",
  "A music note that gently vibrates",
  "An illustration of a person working on a laptop",
  "A minimalist landscape with mountains and sun",
  "An illustration of a rocket launching to space",
  "A simple city skyline illustration",
];

// Animation types available
const ANIMATION_TYPES = [
  { id: "bounce", name: "Bounce", description: "Bounces up and down" },
  { id: "pulse", name: "Pulse", description: "Fades in and out" },
  { id: "spin", name: "Spin", description: "Rotates 360 degrees" },
  { id: "ping", name: "Ping", description: "Expands and fades out" },
  { id: "shake", name: "Shake", description: "Shakes side to side" },
  { id: "flip", name: "Flip", description: "Flips horizontally" },
];

// Previously created favicons
const PREVIOUS_FAVICONS = [
  {
    id: 1,
    name: "Mountain Logo",
    description: "A minimalist mountain logo",
    animation: "pulse",
    color: "text-violet-500",
    icon: Mountain,
    type: "icon",
  },
  {
    id: 2,
    name: "Letter A",
    description: "Colorful letter A",
    animation: "bounce",
    color: "text-emerald-500",
    icon: LetterA,
    type: "icon",
  },
  {
    id: 3,
    name: "Rocket Ship",
    description: "Simple rocket ship",
    animation: "spin",
    color: "text-orange-500",
    icon: Rocket,
    type: "icon",
  },
  {
    id: 4,
    name: "Chat Bubble",
    description: "Chat bubble with ping",
    animation: "ping",
    color: "text-sky-500",
    icon: MessageCircle,
  },
  {
    id: 5,
    name: "Coffee Cup",
    description: "Coffee cup with steam",
    animation: "pulse",
    color: "text-amber-500",
    icon: Coffee,
  },
  {
    id: 6,
    name: "Planet",
    description: "Planet with orbiting moon",
    animation: "spin",
    color: "text-indigo-500",
    icon: Globe,
  },
];

// Available icons for the generator
const AVAILABLE_ICONS = [
  { icon: Mountain, name: "Mountain" },
  { icon: LetterA, name: "Letter A" },
  { icon: Rocket, name: "Rocket" },
  { icon: MessageCircle, name: "Chat" },
  { icon: Coffee, name: "Coffee" },
  { icon: Globe, name: "Globe" },
  { icon: Heart, name: "Heart" },
  { icon: Music, name: "Music" },
  { icon: Star, name: "Star" },
  { icon: Bookmark, name: "Bookmark" },
  { icon: Home, name: "Home" },
  { icon: Settings, name: "Settings" },
  { icon: User, name: "User" },
  { icon: Bell, name: "Bell" },
  { icon: ShoppingCart, name: "Cart" },
  { icon: Zap, name: "Zap" },
];

// Available illustrations
const ILLUSTRATIONS = [
  {
    id: "working",
    name: "Working",
    description: "Person working on laptop",
    src: "/illustrations/working.png",
  },
  {
    id: "landscape",
    name: "Landscape",
    description: "Mountain landscape",
    src: "/illustrations/landscape.png",
  },
  {
    id: "rocket-launch",
    name: "Rocket Launch",
    description: "Rocket launching to space",
    src: "/illustrations/rocket-launch.png",
  },
  {
    id: "city",
    name: "City",
    description: "City skyline",
    src: "/illustrations/city.png",
  },
  {
    id: "coding",
    name: "Coding",
    description: "Person coding",
    src: "/illustrations/coding.png",
  },
  {
    id: "meeting",
    name: "Meeting",
    description: "Team meeting",
    src: "/illustrations/meeting.png",
  },
  {
    id: "success",
    name: "Success",
    description: "Achievement celebration",
    src: "/illustrations/success.png",
  },
  {
    id: "data",
    name: "Data",
    description: "Data visualization",
    src: "/illustrations/data.png",
  },
];

// Illustration styles
const ILLUSTRATION_STYLES = [
  { id: "minimal", name: "Minimal", description: "Clean and simple" },
  { id: "outlined", name: "Outlined", description: "Line-based illustrations" },
  { id: "colorful", name: "Colorful", description: "Vibrant and colorful" },
  { id: "isometric", name: "Isometric", description: "3D isometric style" },
];

export default function GeneratorPage() {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedFavicon, setGeneratedFavicon] = useState<null | {
    animation: string;
    color: string;
    type: "icon" | "illustration";
  }>(null);
  const [selectedAnimation, setSelectedAnimation] = useState("bounce");
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [showCode, setShowCode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0); // Index of the selected icon
  const [selectedIllustration, setSelectedIllustration] = useState(0); // Index of the selected illustration
  const [selectedIllustrationStyle, setSelectedIllustrationStyle] =
    useState("minimal");
  const [activeTab, setActiveTab] = useState<"icon" | "illustration">("icon");

  // Function to handle query submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation with a timeout
    setTimeout(() => {
      // In a real implementation, this would call an AI model
      const randomAnimation =
        ANIMATION_TYPES[Math.floor(Math.random() * ANIMATION_TYPES.length)].id;

      // Determine if we should generate an icon or illustration based on the query
      const shouldGenerateIllustration =
        query.toLowerCase().includes("illustration") || Math.random() > 0.5; // 50% chance for illustration for demo purposes

      if (shouldGenerateIllustration) {
        setActiveTab("illustration");
        setSelectedIllustration(
          Math.floor(Math.random() * ILLUSTRATIONS.length)
        );
        setGeneratedFavicon({
          animation: randomAnimation,
          color: "text-violet-500",
          type: "illustration",
        });
      } else {
        setActiveTab("icon");
        setSelectedIcon(Math.floor(Math.random() * AVAILABLE_ICONS.length));
        setGeneratedFavicon({
          animation: randomAnimation,
          color: "text-violet-500",
          type: "icon",
        });
      }

      setIsGenerating(false);
    }, 2000);
  };

  // Function to handle example query click
  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  // Function to copy implementation code
  const handleCopyCode = () => {
    const code = `<!-- Add this to your HTML head section -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="alternate icon" href="/favicon.ico">

<!-- Add this script to your HTML head section -->
<script>
  // This script handles the animated favicon
  (function() {
    const favicon = document.querySelector('link[rel="icon"]');
    // Animation logic would be here
  })();
</script>`;

    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "The implementation code has been copied to your clipboard.",
    });
  };

  // Function to download the favicon
  const handleDownload = () => {
    toast({
      title: "Favicon downloaded!",
      description: "Your animated favicon has been downloaded.",
    });
  };

  // Function to get animation style
  const getAnimationStyle = (animationType: string, speed: number) => {
    switch (animationType) {
      case "bounce":
        return { animation: `bounce ${speed}s infinite` };
      case "pulse":
        return { animation: `pulse ${speed}s infinite` };
      case "spin":
        return { animation: `spin ${speed}s infinite` };
      case "ping":
        return { animation: `ping ${speed}s infinite` };
      case "shake":
        return { animation: `shake ${speed}s infinite` };
      case "flip":
        return { animation: `flip ${speed}s infinite` };
      default:
        return {};
    }
  };

  // Function to render the preview based on type (icon or illustration)
  const renderPreview = () => {
    if (!generatedFavicon) {
      return (
        <div className="text-center text-muted-foreground text-sm">
          {isGenerating ? (
            <div className="flex flex-col items-center">
              <RefreshCw className="h-8 w-8 animate-spin mb-2" />
              <span>Generating...</span>
            </div>
          ) : (
            <span>Generate a favicon to see preview</span>
          )}
        </div>
      );
    }

    const animationStyle = getAnimationStyle(selectedAnimation, animationSpeed);

    if (generatedFavicon.type === "icon") {
      return (
        <div
          className="flex items-center justify-center"
          style={animationStyle}
        >
          {React.createElement(AVAILABLE_ICONS[selectedIcon].icon, {
            className: `w-20 h-20 ${generatedFavicon.color}`,
          })}
        </div>
      );
    } else {
      // Illustration preview
      return (
        <div
          className="flex items-center justify-center"
          style={animationStyle}
        >
          <img
            src={
              ILLUSTRATIONS[selectedIllustration].src ||
              "/placeholder.svg?height=96&width=96"
            }
            alt={ILLUSTRATIONS[selectedIllustration].name}
            className="w-24 h-24 object-contain"
          />
        </div>
      );
    }
  };

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
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Favicon Generator
            </h1>
            <p className="mt-2 text-muted-foreground">
              Describe what you want or choose from examples to create your
              animated favicon or illustration
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <div className="space-y-8">
              {/* Query Input Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="query">
                    Describe your favicon or illustration
                  </Label>
                  <Textarea
                    id="query"
                    placeholder="Describe what you want to create (e.g., 'A minimalist mountain logo' or 'An illustration of a person working on a laptop')..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" disabled={isGenerating || !query.trim()}>
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate with AI
                    </>
                  )}
                </Button>
              </form>

              {/* Example Queries */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Example Queries</h2>
                <p className="text-sm text-muted-foreground">
                  Click on any example to use it
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {EXAMPLE_QUERIES.map((example, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => handleExampleClick(example)}
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Previously Created Favicons */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  Previously Created Favicons & Illustrations
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {PREVIOUS_FAVICONS.map((favicon) => (
                    <Card key={favicon.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                            {React.createElement(favicon.icon!, {
                              className: `w-10 h-10 ${favicon.color}`,
                              style: getAnimationStyle(favicon.animation, 2),
                            })}
                          </div>
                          <div className="text-center">
                            <h3 className="font-medium text-sm">
                              {favicon.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {favicon.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview and Customization Panel */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-semibold">Preview</h2>
                    <div className="w-32 h-32 rounded-lg bg-muted flex items-center justify-center">
                      {renderPreview()}
                    </div>

                    {generatedFavicon && (
                      <div className="w-full space-y-4">
                        <Tabs
                          value={activeTab}
                          onValueChange={(value) =>
                            setActiveTab(value as "icon" | "illustration")
                          }
                          className="w-full"
                        >
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger
                              value="icon"
                              className="flex items-center gap-2"
                            >
                              <Zap className="h-4 w-4" />
                              Icon
                            </TabsTrigger>
                            <TabsTrigger
                              value="illustration"
                              className="flex items-center gap-2"
                            >
                              <ImageIcon className="h-4 w-4" />
                              Illustration
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="icon" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium">Icon</h3>
                              <div className="grid grid-cols-4 gap-2 max-h-[120px] overflow-y-auto p-1">
                                {AVAILABLE_ICONS.map((icon, index) => (
                                  <Button
                                    key={index}
                                    variant={
                                      selectedIcon === index
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    className="h-auto p-2 flex flex-col items-center gap-1"
                                    onClick={() => setSelectedIcon(index)}
                                  >
                                    {React.createElement(icon.icon, {
                                      className: "h-5 w-5",
                                    })}
                                    <span className="text-[10px]">
                                      {icon.name}
                                    </span>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="illustration"
                            className="space-y-4 mt-4"
                          >
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium">
                                Illustration Style
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                {ILLUSTRATION_STYLES.map((style) => (
                                  <Button
                                    key={style.id}
                                    variant={
                                      selectedIllustrationStyle === style.id
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    className="h-auto py-1 px-2"
                                    onClick={() =>
                                      setSelectedIllustrationStyle(style.id)
                                    }
                                  >
                                    <span className="text-xs">
                                      {style.name}
                                    </span>
                                  </Button>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium">
                                Illustration
                              </h3>
                              <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto p-1">
                                {ILLUSTRATIONS.map((illustration, index) => (
                                  <Button
                                    key={index}
                                    variant={
                                      selectedIllustration === index
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    className="h-auto p-2 flex flex-col items-center gap-1"
                                    onClick={() =>
                                      setSelectedIllustration(index)
                                    }
                                  >
                                    <img
                                      src={
                                        illustration.src ||
                                        "/placeholder.svg?height=40&width=40"
                                      }
                                      alt={illustration.name}
                                      className="h-10 w-10 object-contain"
                                    />
                                    <span className="text-[10px]">
                                      {illustration.name}
                                    </span>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">
                            Animation Type
                          </h3>
                          <div className="grid grid-cols-3 gap-2">
                            {ANIMATION_TYPES.map((animation) => (
                              <Button
                                key={animation.id}
                                variant={
                                  selectedAnimation === animation.id
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                className="h-auto py-1 px-2"
                                onClick={() =>
                                  setSelectedAnimation(animation.id)
                                }
                              >
                                <span className="text-xs">
                                  {animation.name}
                                </span>
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="speed">Animation Speed</Label>
                            <span className="text-xs text-muted-foreground">
                              {animationSpeed}s
                            </span>
                          </div>
                          <Slider
                            id="speed"
                            min={0.5}
                            max={3}
                            step={0.1}
                            value={[animationSpeed]}
                            onValueChange={(value) =>
                              setAnimationSpeed(value[0])
                            }
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            id="show-code"
                            checked={showCode}
                            onCheckedChange={setShowCode}
                          />
                          <Label htmlFor="show-code">
                            Show implementation code
                          </Label>
                        </div>

                        {showCode && (
                          <div className="relative mt-2">
                            <div className="bg-muted rounded-md p-3 text-xs font-mono overflow-x-auto max-h-[150px]">
                              <pre>
                                {`<!-- Add this to your HTML head section -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="alternate icon" href="/favicon.ico">

<!-- Add this script to your HTML head section -->
<script>
  // This script handles the animated favicon
  (function() {
    const favicon = document.querySelector('link[rel="icon"]');
    // Animation logic would be here
  })();
</script>`}
                              </pre>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute top-2 right-2"
                              onClick={handleCopyCode}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button className="w-full" onClick={handleDownload}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          <Button variant="outline" className="w-full">
                            Save to Library
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-2">
                    Tips for Great Favicons
                  </h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>
                        Keep it simple and recognizable at small sizes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>
                        Use subtle animations that don't distract users
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Match your brand colors for consistency</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Test your favicon in different browsers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FaviMotion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
