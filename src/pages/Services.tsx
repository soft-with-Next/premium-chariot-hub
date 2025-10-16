import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import fleetImage from "@/assets/fleet-management.jpg";
import { Plane, MapPin, Clock, Users, Building2, CalendarCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Seamless, stress-free transportation to and from all major airports.",
      features: [
        "Real-time flight tracking with automatic schedule adjustments",
        "Professional meet & greet service in arrivals hall",
        "Complimentary 30-minute wait time for flight delays",
        "24/7 booking and customer support",
      ],
    },
    {
      icon: MapPin,
      title: "City-to-City Travel",
      description: "Long-distance premium transportation between cities and regions.",
      features: [
        "Direct, comfortable travel between locations",
        "Flexible departure times to suit your schedule",
        "Professional drivers with excellent route knowledge",
        "Refreshments and amenities included",
      ],
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur Service",
      description: "Dedicated driver for multiple stops and extended periods.",
      features: [
        "Minimum 2-hour booking, flexible extensions",
        "Perfect for business meetings and shopping trips",
        "Adjust your itinerary on the fly",
        "Premium vehicle at your disposal",
      ],
    },
    {
      icon: Users,
      title: "Event Transportation",
      description: "Special occasion and event transportation for groups and individuals.",
      features: [
        "Weddings, galas, and corporate events",
        "Multiple vehicle coordination for groups",
        "Red carpet treatment and photography assistance",
        "Tailored service to match your event",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Accounts",
      description: "Comprehensive business travel solutions with dedicated support.",
      features: [
        "Consolidated monthly billing and reporting",
        "Priority booking and dedicated account manager",
        "Admin dashboard for team management",
        "Volume discounts and custom pricing",
      ],
    },
    {
      icon: CalendarCheck,
      title: "Executive Travel Plans",
      description: "Recurring transportation arrangements for busy executives.",
      features: [
        "Pre-scheduled rides for weekly or monthly needs",
        "Consistent driver assignment for familiarity",
        "Automated reminders and confirmations",
        "Flexible modifications when plans change",
      ],
    },
  ];

  const hero = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={fleetImage} alt="Premium fleet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h1 className="heading-xl text-primary-foreground mb-6">Our Services</h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                From airport transfers to corporate solutions, we offer premium chauffeur services tailored to your needs. Every journey is handled with professionalism, discretion, and attention to detail.
              </p>
              <Link to="/booking" className="btn-hero">Book a Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="home-section" ref={section1.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 ${section1.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="heading-lg mb-4">Premium Transportation Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of services designed for discerning travelers.
            </p>
          </div>
          <div className="card-grid-3col">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`${section1.isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="home-section bg-muted/30" ref={section2.ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${section2.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="heading-md mb-4">Service Guarantees</h2>
              <p className="text-lg text-muted-foreground">Our commitment to excellence in every detail</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`card ${section2.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-semibold mb-3">Punctuality Promise</h3>
                <p className="text-muted-foreground">
                  We track your flight or appointment in real-time and adjust pickup times automatically. Our drivers arrive early, ensuring you're never late.
                </p>
              </div>
              <div className={`card ${section2.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  All drivers are licensed, background-checked, and extensively trained. Our vehicles undergo rigorous maintenance and safety inspections.
                </p>
              </div>
              <div className={`card ${section2.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
                <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
                <p className="text-muted-foreground">
                  Expect courteous, well-dressed chauffeurs who respect your privacy and provide attentive service without intrusion.
                </p>
              </div>
              <div className={`card ${section2.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees or surge pricing. Get an accurate quote upfront and pay the agreed rate, with receipts provided for every journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
