import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BookingModal from "@/components/BookingModal";
import cityImage from "@/assets/city-to-city.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import {
  MapPin,
  Route,
  Coffee,
  Wifi,
  CheckCircle,
  Star,
  Phone,
} from "lucide-react";

const CityToCity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hero = useScrollReveal();
  const features = useScrollReveal();
  const destinations = useScrollReveal();
  const pricing = useScrollReveal();

  const keyFeatures = [
    {
      icon: Route,
      title: "Direct Long-Distance Travel",
      description: "Skip the hassle of train stations, bus terminals, or rental cars. Enjoy door-to-door service with a professional chauffeur handling all navigation and routing.",
    },
    {
      icon: Coffee,
      title: "Comfort-Focused Journey",
      description: "Premium vehicles equipped with climate control, adjustable seating, refreshments, and entertainment. Request stops for meals or rest breaks along the way.",
    },
    {
      icon: Wifi,
      title: "Productive Travel Time",
      description: "Stay connected with onboard WiFi, charging ports, and a quiet cabin. Turn travel time into work time or simply relax and enjoy the scenery.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Scheduling",
      description: "Book trips days or weeks in advance, or arrange same-day service when available. Adjust departure times to match your schedule, not ours.",
    },
  ];

  const popularRoutes = [
    {
      from: "New York City",
      to: "Boston",
      distance: "~215 miles",
      duration: "~4 hours",
      price: "Starting at $450",
    },
    {
      from: "Los Angeles",
      to: "San Francisco",
      distance: "~380 miles",
      duration: "~6 hours",
      price: "Starting at $650",
    },
    {
      from: "Chicago",
      to: "Detroit",
      distance: "~280 miles",
      duration: "~5 hours",
      price: "Starting at $500",
    },
    {
      from: "Miami",
      to: "Orlando",
      distance: "~235 miles",
      duration: "~4 hours",
      price: "Starting at $475",
    },
  ];

  const amenities = [
    "Premium leather seating with lumbar support",
    "Climate-controlled cabin temperature",
    "Complimentary bottled water and snacks",
    "WiFi connectivity throughout journey",
    "USB and wireless charging ports",
    "Privacy partition available on request",
    "Fresh towels and hand sanitizer",
    "Newspaper and magazine selection",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cityImage}
            alt="City to city luxury travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-8 w-8 text-accent" />
                <span className="text-accent font-semibold text-lg">Long-Distance Luxury</span>
              </div>
              <h1 className="heading-xl text-primary-foreground mb-6">
                City-to-City Premium Travel
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Travel between cities in comfort and style. Perfect for business trips, weekend getaways, or avoiding the stress of trains and flights. Your private chauffeur, your schedule, your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsModalOpen(true)} className="btn-hero group">
                  Book City Transfer
                  <Route className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+15551234567" className="btn bg-primary-foreground text-primary hover:opacity-90">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Custom Quote
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
              <h2 className="heading-lg mb-4">Why Choose City-to-City Service</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether it's a business trip to a neighboring city or a weekend escape, our long-distance service offers unmatched comfort and convenience.
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

      {/* Popular Routes */}
      <section className="home-section bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div ref={destinations.ref} className={`${destinations.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Popular Routes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Frequently traveled routes with transparent pricing. Don't see your destination? We cover all major cities—contact us for a custom quote.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {popularRoutes.map((route, index) => (
                <div
                  key={index}
                  className="card-premium group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{route.from}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Route className="h-4 w-4 text-accent" />
                        <span className="text-lg">{route.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{route.price}</div>
                      <div className="text-xs text-muted-foreground">All-inclusive</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground">Distance</div>
                      <div className="font-semibold">{route.distance}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{route.duration}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-4 btn-accent group-hover:scale-105 transition-transform"
                  >
                    Book This Route
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Need a different route or multiple stops? We customize every journey.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-outline">
                Request Custom Route
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Comfort */}
      <section className="home-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={luxuryInterior}
                alt="Luxury vehicle interior"
                className="rounded-2xl shadow-premium"
              />
            </div>
            <div className="order-1 md:order-2" ref={pricing.ref}>
              <div className={`${pricing.isVisible ? "animate-fade-up" : "opacity-0"}`}>
                <h2 className="heading-md mb-6">Travel in Complete Comfort</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every long-distance journey includes premium amenities designed for your comfort and productivity. Whether you need to work, relax, or simply enjoy the ride, we've thought of everything.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-accent flex-shrink-0 mt-1" fill="currentColor" />
                    <div>
                      <strong className="block mb-2">Rest Stop Flexibility</strong>
                      <p className="text-sm text-muted-foreground">
                        Need to stretch your legs, grab a meal, or make a phone call? Your chauffeur can stop at designated rest areas or restaurants along the route. Just let us know your preferences when booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Leisure */}
      <section className="home-section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Perfect For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Travel</h3>
              <p className="text-muted-foreground">
                Arrive refreshed and prepared for meetings. Use travel time productively with WiFi and a quiet workspace.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Coffee className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Weekend Getaways</h3>
              <p className="text-muted-foreground">
                Start your vacation the moment you leave home. Relax, enjoy the scenery, and skip the driving stress.
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Route className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Events</h3>
              <p className="text-muted-foreground">
                Weddings, concerts, sporting events—arrive in style without worrying about parking or navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-section bg-gradient-to-r from-primary to-primary-glow">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to Travel in Luxury?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your city-to-city transfer today and experience the difference of premium long-distance travel.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="btn-hero">
            Book Your Journey
          </button>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType="city-to-city"
        serviceName="City-to-City Transfer"
      />
    </div>
  );
};

export default CityToCity;
