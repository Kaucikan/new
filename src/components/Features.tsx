import { Link } from "react-router-dom"; 
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

import { 
  Calculator, 
  FileText, 
  PieChart, 
  Shield, 
  Smartphone, 
  Clock,
  Brain,
  Download,
  Bell
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "Smart Tax Calculator",
      description: "Automatically calculate income tax and GST with AI-powered precision.",
      color: "text-primary",
      link: "/calculator"
    },
    {
      icon: FileText,
      title: "Auto-Fill Forms",
      description: "Pre-filled tax forms with intelligent suggestions and deductions.",
      color: "text-accent",
      link: "/autofill"
    },
    {
      icon: PieChart,
      title: "Interactive Dashboard",
      description: "Visual insights into income, expenses, and tax liabilities.",
      color: "text-primary",
      link: "/dashboard"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption ensures your financial data stays protected.",
      color: "text-accent",
      link: "/bankInfo"
    },
    {
      icon: Brain,
      title: "AI Tax Advisor",
      description: "Get personalized tax-saving tips and planning recommendations.",
      color: "text-primary",
      link: "/ai"
    },
    {
      icon: Download,
      title: "Export Reports",
      description: "Download detailed reports in PDF and Excel formats.",
      color: "text-accent",
      link: "/ExportReport"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss filing deadlines with intelligent notifications.",
      color: "text-primary",
      link: "/SmartReminders"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      description: "Access your tax data anywhere with cloud sync and mobile support.",
      color: "text-accent",

    },
    {
      icon: Clock,
      title: "Quick Filing",
      description: "Complete your tax filing in minutes, not hours.",
      color: "text-primary",
 
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smart Tax Filing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make tax filing simple, accurate, and stress-free
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="no-underline">
              <Card className="relative group hover:shadow-float transition-all duration-300 bg-gradient-card border-border/50 cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-background to-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
