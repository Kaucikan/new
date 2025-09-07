import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, FileText } from "lucide-react";
import heroImage from "@/assets/hero-tax-image.jpg";
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Simplify Your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Tax Filing
                </span>{" "}
                Journey
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Smart Tax Filing Web makes income tax and GST filing effortless. 
                Track income, manage expenses, and file taxes with confidence.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Auto-Fill Forms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/taxReportForm">
              <Button variant="hero" size="lg" className="group">
                Start Filing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-muted-foreground">
              ✓ Trusted by 50,000+ users • ✓ Government approved • ✓ 24/7 support
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img
                src={heroImage}
                alt="Professional tax filing dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-gradient-card rounded-xl p-4 shadow-card border">
              <div className="text-sm font-semibold text-accent">GST Filed</div>
              <div className="text-2xl font-bold">98%</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-card rounded-xl p-4 shadow-card border">
              <div className="text-sm font-semibold text-primary">Tax Saved</div>
              <div className="text-2xl font-bold">₹2.5L</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;