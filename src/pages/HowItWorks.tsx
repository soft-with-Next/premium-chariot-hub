import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Calendar, CreditCard, Navigation, Star } from "lucide-react";
import bookingApp from "@/assets/booking-app.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import corporateClient from "@/assets/corporate-client.jpg";
import customerService from "@/assets/customer-service.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Choose Your Ride",
      description: "Select from our premium fleet of vehicles based on your needs—sedans for business meetings, SUVs for family travel, or vans for groups.",
      details: [
        "Browse vehicle classes with clear pricing",
        "View photos and amenities for each option",
        "Filter by passenger count and luggage capacity",
      ],
    },
    {
      icon: Calendar,
      title: "Pick Time & Location",
      description: "Enter your pickup and drop-off addresses, then select your preferred date and time. We offer flexible scheduling from immediate bookings to months in advance.",
      details: [
        "Address auto-complete for accuracy",
        "Real-time availability checking",
        "Option to add multiple stops",
        "Flexible cancellation policies",
      ],
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description: "Complete your booking with our encrypted payment system. Accept all major credit cards, corporate accounts, and digital wallets.",
      details: [
        "Bank-level encryption for all transactions",
        "Save payment methods for faster checkout",
        "Apply promo codes and corporate discounts",
        "Instant booking confirmation via email/SMS",
      ],
    },
    {
      icon: Navigation,
      title: "Get Driver Details",
      description: "Once your ride is confirmed, you'll receive your driver's information including name, photo, vehicle details, and license plate.",
      details: [
        "Driver profile with ratings and experience",
        "Real-time vehicle tracking on map",
        "Direct messaging with your chauffeur",
        "ETA updates as pickup time approaches",
      ],
    },
    {
      icon: Star,
      title: "Track & Rate",
      description: "Monitor your ride in real-time and receive notifications at key points. After your journey, rate your experience to help us maintain our high standards.",
      details: [
        "Live GPS tracking during your ride",
        "Automatic receipts sent to email",
        "Rate driver and service quality",
        "Access ride history and invoices",
      ],
    },
  ];

  const hero = useScrollReveal();
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const featureImages = [teamPhoto, corporateClient, bookingApp, customerService];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bookingApp} alt="Booking app interface" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h1 className="heading-xl text-primary-foreground mb-6">How It Works</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Booking premium chauffeur service has never been easier. Five simple steps from booking to arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" ref={section1.ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center ${section1.isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-accent to-accent/80 p-8 rounded-2xl">
                      <step.icon className="h-12 w-12 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="heading-sm mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section bg-muted/30" ref={section2.ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${section2.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="heading-md mb-4">Additional Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {["Guest Booking", "Account Benefits", "Modification & Cancellation", "Customer Support"].map((title, index) => (
                <div key={index} className={`card ${section2.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img src={featureImages[index]} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground">Professional service tailored to your needs with flexible options and 24/7 support.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
