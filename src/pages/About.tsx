import { Shield, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety & Reliability",
      description: "Every journey prioritizes your security with vetted drivers and maintained vehicles.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We set the highest standards in service quality and client satisfaction.",
    },
    {
      icon: Users,
      title: "Discretion",
      description: "Your privacy and confidentiality are paramount in every interaction.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Consistent premium service across major cities and regions worldwide.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Satisfied Clients" },
    { number: "500+", label: "Professional Drivers" },
    { number: "15+", label: "Years of Excellence" },
    { number: "99.8%", label: "On-Time Record" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-6">About LuxeRide</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Premium chauffeur services built on trust, professionalism, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="home-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2009, LuxeRide began with a simple mission: to provide the most reliable, comfortable, and discreet chauffeur service for discerning travelers. What started as a small fleet serving a single city has grown into a trusted name in premium transportation across major metropolitan areas.
              </p>
              <p>
                We recognized that busy executives, VIP travelers, and corporate clients needed more than just a ride—they needed a seamless, stress-free experience. Every detail, from vehicle selection to driver training, was designed with that goal in mind.
              </p>
              <p>
                Today, LuxeRide serves thousands of clients annually, maintaining the same commitment to excellence that defined our first day in business. Our reputation is built on punctuality, professionalism, and the trust our clients place in us for their most important journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-section bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="home-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and every journey.
            </p>
          </div>
          <div className="card-grid-2col lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-xl w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="home-section bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Quality Guarantees</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Driver Excellence</h3>
                <p className="text-muted-foreground">
                  Every chauffeur undergoes extensive background checks, professional training, and ongoing performance reviews. They possess deep local knowledge, defensive driving certifications, and customer service expertise.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Fleet Maintenance</h3>
                <p className="text-muted-foreground">
                  Our vehicles are inspected before every journey and serviced according to manufacturer schedules. We replace vehicles regularly to ensure you always ride in modern, immaculate transportation.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">24/7 Operations</h3>
                <p className="text-muted-foreground">
                  Our support team monitors every ride in real-time, ready to assist with any request or adjustment. Whether it's 3 AM or 3 PM, you have direct access to professional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="home-section">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">Global Coverage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We operate in major cities across North America, Europe, and Asia, with partnerships in additional regions. Wherever your business takes you, LuxeRide provides the same premium experience you trust.
          </p>
          <div className="inline-block bg-muted/50 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">North America</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>New York</li>
                  <li>Los Angeles</li>
                  <li>Chicago</li>
                  <li>Toronto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Europe</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>London</li>
                  <li>Paris</li>
                  <li>Frankfurt</li>
                  <li>Zurich</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Asia Pacific</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Singapore</li>
                  <li>Hong Kong</li>
                  <li>Tokyo</li>
                  <li>Sydney</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Middle East</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Dubai</li>
                  <li>Abu Dhabi</li>
                  <li>Doha</li>
                  <li>Riyadh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
