import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BookingModal from "@/components/BookingModal";
import airportImage from "@/assets/airport-transfer.jpg";
import professionalDriver from "@/assets/professional-driver.jpg";
import {
  Plane,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Phone,
  MessageSquare,
} from "lucide-react";

const AirportTransfer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hero = useScrollReveal();
  const features = useScrollReveal();
  const process = useScrollReveal();
  const pricing = useScrollReveal();

  const keyFeatures = [
    {
      icon: Plane,
      title: "Real-Time Flight Tracking",
      description: "We monitor your flight status automatically and adjust pickup times for delays or early arrivals—no extra charge for wait time due to flight changes.",
    },
    {
      icon: Clock,
      title: "Complimentary Wait Time",
      description: "Enjoy 30 minutes of free waiting time for domestic flights and 45 minutes for international arrivals. Perfect for baggage claim and customs.",
    },
    {
      icon: Shield,
      title: "Meet & Greet Service",
      description: "Your professional chauffeur meets you in the arrivals hall with a personalized name board. We'll help with luggage and guide you to the vehicle.",
    },
    {
      icon: CheckCircle,
      title: "Pre-Flight Confirmation",
      description: "Receive driver details and vehicle information 24 hours before pickup. Track your driver in real-time as they approach your location.",
    },
  ];

  const serviceProcess = [
    {
      step: "1",
      title: "Book Your Transfer",
      description: "Enter flight details, pickup time, and destination. We'll provide an instant quote with no hidden fees.",
    },
    {
      step: "2",
      title: "Automatic Flight Monitoring",
      description: "Our system tracks your flight in real-time. If there are delays or early arrivals, we adjust automatically.",
    },
    {
      step: "3",
      title: "Meet Your Chauffeur",
      description: "Your driver waits in arrivals with a personalized sign. They'll assist with luggage and escort you to the vehicle.",
    },
    {
      step: "4",
      title: "Relax and Arrive",
      description: "Enjoy a smooth, direct ride to your destination. Refreshments, WiFi, and climate control included.",
    },
  ];

  const pricingTiers = [
    {
      vehicle: "Executive Sedan",
      passengers: "Up to 3",
      luggage: "2 large bags",
      price: "$85",
      features: ["Complimentary wait time", "Flight tracking", "Premium sedan", "Bottled water"],
    },
    {
      vehicle: "Luxury SUV",
      passengers: "Up to 6",
      luggage: "4 large bags",
      price: "$120",
      features: ["Extra space & comfort", "Flight tracking", "Premium SUV", "Refreshments included"],
      popular: true,
    },
    {
      vehicle: "Premium Van",
      passengers: "Up to 8",
      luggage: "6 large bags",
      price: "$150",
      features: ["Group travel comfort", "Flight tracking", "Spacious van", "WiFi available"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={airportImage}
            alt="Airport transfer service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-8 w-8 text-accent" />
                <span className="text-accent font-semibold text-lg">Premium Airport Service</span>
              </div>
              <h1 className="heading-xl text-primary-foreground mb-6">
                Stress-Free Airport Transfers
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                From curbside to destination, experience seamless airport transportation with flight tracking, meet & greet service, and professional chauffeurs. Perfect for business travelers and executives who value punctuality and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsModalOpen(true)} className="btn-hero group">
                  Book Airport Transfer
                  <Plane className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+15551234567" className="btn bg-primary-foreground text-primary hover:opacity-90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Urgent Pickup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="home-section bg-background">
        <div className="container-custom">
          <div ref={features.ref} className={`${features.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Why Choose Our Airport Service</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed specifically for air travelers—from frequent flyers to first-time visitors. Every detail crafted for a seamless arrival or departure experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-xl h-fit group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div ref={process.ref} className={`${process.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Your Journey, Step by Step</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From booking to arrival, every moment is designed for your convenience and peace of mind.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceProcess.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 relative">
                    <div className="text-7xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                      {item.step}
                    </div>
                    {index < serviceProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-accent/30 to-transparent -translate-x-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="home-section">
        <div className="container-custom">
          <div ref={pricing.ref} className={`${pricing.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                All-inclusive rates with no hidden fees. Price includes flight tracking, wait time, and gratuity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`card-premium relative ${
                    tier.popular ? "ring-2 ring-accent scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" fill="currentColor" />
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.vehicle}</h3>
                    <div className="text-4xl font-bold gradient-text mb-2">{tier.price}</div>
                    <p className="text-sm text-muted-foreground">Base rate to/from airport</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>{tier.passengers} passengers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>{tier.luggage}</span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4 space-y-2">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full mt-6 ${tier.popular ? "btn-accent" : "btn-outline"}`}
                  >
                    Select {tier.vehicle}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="home-section bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Arrive Like a VIP</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're arriving for a crucial business meeting or starting a well-deserved vacation, our airport transfer service ensures your journey begins and ends in comfort and style.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Professional Meet & Greet</strong>
                    <span className="text-muted-foreground">Your chauffeur waits in arrivals with a personalized name board, ready to assist with luggage and navigation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Zero Stress, Zero Rush</strong>
                    <span className="text-muted-foreground">With complimentary wait time and flight tracking, there's no worry about delays or early arrivals.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-1">Direct, Efficient Routes</strong>
                    <span className="text-muted-foreground">Our drivers know the fastest routes and monitor traffic in real-time to ensure punctual arrivals.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={professionalDriver}
                alt="Professional chauffeur service"
                className="rounded-2xl shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-section bg-gradient-to-r from-primary to-primary-glow">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready for a Seamless Airport Experience?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book now or speak with our team for group bookings, special requests, or last-minute arrangements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="btn-hero">
              Book Your Transfer
            </button>
            <a href="/contact" className="btn bg-primary-foreground text-primary hover:opacity-90">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="airport"
        serviceName="Airport Transfer"
      />
    </div>
  );
};

export default AirportTransfer;
