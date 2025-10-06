import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/mdx/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureGrid />
      <StatsSection />
      <CTA />
    </div>
  );
}
