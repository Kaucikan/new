import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TaxSmart
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to='/dashboard'> 
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              DashBoard
            </a></Link>
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
           <Link to='/AboutWebsite'>
           <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a></Link>
            
            <Link to="./login"><Button variant="outline">Login</Button></Link>
            <Link to="./register"><Button variant="hero">Sign In</Button></Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button variant="hero" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;