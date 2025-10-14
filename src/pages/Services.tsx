import ServiceCard from "@/components/ServiceCard";
import {
  Plane,
  MapPin,
  Clock,
  Users,
  Building2,
  CalendarCheck,
} from "lucide-react";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            From airport transfers to corporate solutions, we offer premium chauffeur services tailored to your needs. Every journey is handled with professionalism, discretion, and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="home-section">
        <div className="container-custom">
          <div className="card-grid-3col">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="home-section bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Service Guarantees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Punctuality Promise</h3>
                <p className="text-muted-foreground">
                  We track your flight or appointment in real-time and adjust pickup times automatically. Our drivers arrive early, ensuring you're never late.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  All drivers are licensed, background-checked, and extensively trained. Our vehicles undergo rigorous maintenance and safety inspections.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Professional Standards</h3>
                <p className="text-muted-foreground">
                  Expect courteous, well-dressed chauffeurs who respect your privacy and provide attentive service without intrusion.
                </p>
              </div>
              <div className="card">
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
