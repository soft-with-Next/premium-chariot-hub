import { Search, Calendar, CreditCard, Navigation, Star } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-6">How It Works</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Booking premium chauffeur service has never been easier. Five simple steps from booking to arrival.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="home-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Icon & Number */}
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

                {/* Content */}
                <div className="flex-1">
                  <h2 className="heading-sm mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {step.description}
                  </p>
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

      {/* Additional Info */}
      <section className="home-section bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Additional Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Guest Booking</h3>
                <p className="text-muted-foreground">
                  No account required for one-time bookings. Simply enter your details, complete payment, and receive confirmation. Creating an account is optional but offers benefits like saved addresses and faster checkout.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Account Benefits</h3>
                <p className="text-muted-foreground">
                  Registered users enjoy saved payment methods, address book, ride history, favorite drivers, exclusive promotions, and priority support access. Sign up in seconds with email or social login.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Modification & Cancellation</h3>
                <p className="text-muted-foreground">
                  Need to change your booking? Modify pickup time, location, or vehicle type up until your driver is assigned. Free cancellation available up to 2 hours before scheduled pickup time.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                <p className="text-muted-foreground">
                  Our 24/7 support team is available via phone, email, or live chat. Whether you need booking assistance, have questions about services, or require immediate help during a ride, we're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="home-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Safety & Quality Assurance</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Every aspect of our service is designed with your safety and comfort in mind.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-2">Driver Screening</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive background checks, license verification, and professional training for all chauffeurs.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Vehicle Inspections</h3>
                <p className="text-sm text-muted-foreground">
                  Regular maintenance schedules, pre-ride inspections, and cleanliness standards ensure pristine vehicles.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  GPS tracking, ride monitoring, and instant support access provide peace of mind throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
