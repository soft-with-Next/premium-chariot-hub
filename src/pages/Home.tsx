import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import VehicleCard from "@/components/VehicleCard";
import {
  Plane,
  MapPin,
  Clock,
  Building2,
  Shield,
  Users,
  Award,
  Headphones,
} from "lucide-react";

import airportTransfer from "@/assets/airport-transfer.jpg";
import cityToCity from "@/assets/city-to-city.jpg";
import hourlyService from "@/assets/hourly-service.jpg";
import corporateClient from "@/assets/corporate-client.jpg";

const Home = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Seamless pickup and drop-off services for all major airports.",
      features: [
        "Flight tracking & adjustments",
        "Meet & greet service",
        "Complimentary wait time",
      ],
      image: airportTransfer,
      link: "/services",
    },
    {
      icon: MapPin,
      title: "City Rides",
      description: "Premium transportation for business meetings and personal travel.",
      features: [
        "Real-time booking",
        "Professional drivers",
        "Flexible scheduling",
      ],
      image: cityToCity,
      link: "/services",
    },
    {
      icon: Clock,
      title: "Hourly Chauffeur",
      description: "Dedicated driver service for extended periods and multiple stops.",
      features: [
        "Minimum 2-hour booking",
        "Flexible itinerary",
        "Premium vehicles",
      ],
      image: hourlyService,
      link: "/services",
    },
    {
      icon: Building2,
      title: "Corporate Accounts",
      description: "Tailored solutions for businesses with consolidated billing.",
      features: [
        "Priority support",
        "Admin dashboard",
        "Detailed reporting",
      ],
      image: corporateClient,
      link: "/business",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "100% Reliable",
      description: "Licensed, insured, and thoroughly vetted professional drivers.",
    },
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Immaculately maintained luxury vehicles for your comfort.",
    },
    {
      icon: Users,
      title: "Expert Drivers",
      description: "Professional chauffeurs with local knowledge and discretion.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your peace of mind.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Vehicle",
      description: "Select from our premium fleet to match your needs and style.",
    },
    {
      number: "02",
      title: "Schedule Your Ride",
      description: "Pick your date, time, and destinations with flexible options.",
    },
    {
      number: "03",
      title: "Secure Payment",
      description: "Complete your booking with encrypted, secure payment processing.",
    },
    {
      number: "04",
      title: "Track & Enjoy",
      description: "Receive driver details and track your ride in real-time.",
    },
  ];

  const vehicles = [
    {
      name: "Executive Sedan",
      category: "Business Class",
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800",
      passengers: 3,
      luggage: 2,
      features: ["Leather interior", "Climate control", "Bottled water"],
    },
    {
      name: "Luxury SUV",
      category: "First Class",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
      passengers: 6,
      luggage: 4,
      features: ["Spacious cabin", "Premium sound", "Privacy glass"],
    },
    {
      name: "Premium Van",
      category: "Group Travel",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      passengers: 8,
      luggage: 6,
      features: ["Extra legroom", "USB charging", "Wi-Fi available"],
    },
  ];

  const testimonials = [
    {
      quote: "Exceptional service from start to finish. The driver was punctual, professional, and the vehicle was immaculate.",
      author: "Michael Chen",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote: "I use BLiNX Ride for all my airport transfers. Never disappointed - always on time and stress-free.",
      author: "Sarah Williams",
      role: "Frequent Traveler",
      rating: 5,
    },
    {
      quote: "The corporate account has streamlined our executive transportation. Highly recommended for businesses.",
      author: "David Thompson",
      role: "Operations Director",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Benefits Section */}
      <section className="home-section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose BLiNX Ride</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium chauffeur services designed for discerning travelers who value reliability and comfort.
            </p>
          </div>
          <div className="card-grid-2col lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-section bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your needs.
            </p>
          </div>
          <div className="card-grid-3col">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book your premium ride in four simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                <div className="text-7xl font-bold text-accent/40 mb-4">{step.number}</div>
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

      {/* Fleet Section */}
      <section className="home-section bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of meticulously maintained luxury vehicles.
            </p>
          </div>
          <div className="card-grid-3col">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/booking" className="btn-accent">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by executives, travelers, and businesses worldwide.
            </p>
          </div>
          <div className="card-grid-3col">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-section bg-gradient-to-r from-primary via-primary-glow to-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to Experience Premium Travel?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your ride now or open a corporate account for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-hero">
              Book a Ride Now
            </Link>
            <Link to="/business" className="btn bg-primary-foreground text-primary hover:opacity-90">
              Open Business Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
