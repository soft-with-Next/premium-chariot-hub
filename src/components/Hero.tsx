import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-luxury-car.jpg";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury chauffeur service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up">
            Premium Chauffeur Service
            <span className="block gradient-text mt-2">Redefined</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Experience luxury transportation with professional drivers, immaculate vehicles, and 24/7 reliability. Your journey, perfected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/booking" className="btn-hero group">
              Book a Ride
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/business" className="btn-outline bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Business Solutions
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <div className="text-primary-foreground font-semibold">100% Secure</div>
                <div className="text-primary-foreground/70 text-sm">Licensed & Insured</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <div className="text-primary-foreground font-semibold">24/7 Service</div>
                <div className="text-primary-foreground/70 text-sm">Always Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <div className="text-primary-foreground font-semibold">Top Rated</div>
                <div className="text-primary-foreground/70 text-sm">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
