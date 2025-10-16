import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, TrendingUp, Users, FileText, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import businessMeeting from "@/assets/business-meeting.jpg";
import corporateClient from "@/assets/corporate-client.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import professionalDriver from "@/assets/professional-driver.jpg";
import fleetManagement from "@/assets/fleet-management.jpg";

const Business = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Consolidated Billing",
      description: "Single monthly invoice with detailed breakdowns for all company rides.",
    },
    {
      icon: TrendingUp,
      title: "Volume Discounts",
      description: "Custom pricing tiers based on usage with transparent rate structures.",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Admin dashboard to manage employee access and set booking permissions.",
    },
    {
      icon: FileText,
      title: "Detailed Reporting",
      description: "Comprehensive analytics and expense reports for finance teams.",
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "Dedicated account manager and 24/7 priority customer service.",
    },
    {
      icon: Headphones,
      title: "Custom Solutions",
      description: "Tailored services to match your specific business requirements.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete our simple online form with your company details and requirements.",
    },
    {
      number: "02",
      title: "Account Setup",
      description: "Our team reviews and approves your account, typically within 24 hours.",
    },
    {
      number: "03",
      title: "Add Team Members",
      description: "Invite employees and set individual permissions and spending limits.",
    },
    {
      number: "04",
      title: "Start Booking",
      description: "Your team can begin booking premium rides with simplified expense management.",
    },
  ];

  const features = [
    {
      title: "Centralized Admin Dashboard",
      items: [
        "View all company bookings in real-time",
        "Assign cost centers and project codes",
        "Set approval workflows for bookings",
        "Export data for expense management systems",
      ],
    },
    {
      title: "Flexible Billing Options",
      items: [
        "Monthly consolidated invoicing",
        "Multiple payment methods accepted",
        "Custom payment terms available",
        "Automated receipt distribution",
      ],
    },
    {
      title: "Enhanced Control",
      items: [
        "Set individual or department budgets",
        "Define approved routes and destinations",
        "Establish blackout dates or times",
        "Require booking approvals when needed",
      ],
    },
  ];

  const hero = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();
  const section4 = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={businessMeeting} alt="Business meeting in luxury vehicle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h1 className="heading-xl text-primary-foreground mb-6">
                Corporate Transportation Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Streamline your business travel with dedicated corporate accounts, consolidated billing, and priority support. Trusted by leading companies worldwide.
              </p>
              <Link to="/contact" className="btn-hero inline-flex">
                Open a Corporate Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="home-section" ref={section1.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 ${section1.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="heading-lg mb-4">Why Businesses Choose LuxeRide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to simplify corporate travel management.
            </p>
          </div>
          <div className="card-grid-3col">
            {benefits.map((benefit, index) => (
              <div key={index} className={`card ${section1.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-lg w-fit mb-4">
                  <benefit.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section bg-muted/30" ref={section2.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 ${section2.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="heading-lg mb-4">Getting Started</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open your corporate account in four simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`relative ${section2.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-accent/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-section" ref={section3.ref}>
        <div className="container-custom">
          <div className={`text-center mb-16 ${section3.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <h2 className="heading-lg mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to manage your corporate transportation program.
            </p>
          </div>
          <div className="card-grid-3col">
            {features.map((feature, index) => (
              <div key={index} className={`card ${section3.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="home-section bg-muted/30" ref={section4.ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${section4.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="heading-md mb-4">Common Use Cases</h2>
              <p className="text-lg text-muted-foreground">See how companies use LuxeRide to enhance their operations</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`card ${section4.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img src={luxuryInterior} alt="Executive Travel" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Executive Travel</h3>
                <p className="text-muted-foreground mb-3">
                  Ensure your leadership team travels in comfort and arrives on time for critical meetings, presentations, and events.
                </p>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>• Consistent, reliable service</li>
                  <li>• Discreet, professional drivers</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>
              <div className={`card ${section4.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img src={teamPhoto} alt="Client Entertainment" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Entertainment</h3>
                <p className="text-muted-foreground mb-3">
                  Make a lasting impression by providing premium transportation for visiting clients and prospects.
                </p>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>• Airport meet & greet</li>
                  <li>• Multi-stop itineraries</li>
                  <li>• Branded experience</li>
                </ul>
              </div>
              <div className={`card ${section4.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img src={professionalDriver} alt="Employee Commutes" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Employee Commutes</h3>
                <p className="text-muted-foreground mb-3">
                  Provide safe, reliable transportation for late-night work or employees without personal vehicles.
                </p>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>• 24/7 availability</li>
                  <li>• Pre-approved routes</li>
                  <li>• Budget controls</li>
                </ul>
              </div>
              <div className={`card ${section4.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img src={fleetManagement} alt="Event Transportation" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Transportation</h3>
                <p className="text-muted-foreground mb-3">
                  Coordinate group transportation for conferences, team offsites, and corporate events.
                </p>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>• Fleet coordination</li>
                  <li>• Dedicated event manager</li>
                  <li>• Real-time tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-section bg-gradient-to-r from-primary to-primary-glow">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to Elevate Your Corporate Travel?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our corporate sales team to discuss your requirements and receive a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero">
              Request a Proposal
            </Link>
            <a
              href="tel:+15551234567"
              className="btn bg-primary-foreground text-primary hover:opacity-90"
            >
              Call Sales: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
