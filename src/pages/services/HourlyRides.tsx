import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BookingModal from "@/components/BookingModal";
import hourlyImage from "@/assets/hourly-service.jpg";
import corporateClient from "@/assets/corporate-client.jpg";
import { Clock, Calendar, MapPin, CheckCircle } from "lucide-react";

const HourlyRides = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hero = useScrollReveal();

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hourlyImage} alt="Hourly chauffeur service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-8 w-8 text-accent" />
                <span className="text-accent font-semibold text-lg">Flexible Chauffeur Service</span>
              </div>
              <h1 className="heading-xl text-primary-foreground mb-6">Hourly Chauffeur Service</h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Your dedicated driver and vehicle for as long as you need. Perfect for business meetings, shopping trips, or days requiring multiple stops.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-hero">Book Hourly Service</button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Complete Flexibility</h2>
              <p className="text-lg text-muted-foreground mb-6">Minimum 2-hour booking with vehicle and driver at your disposal.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent mt-1" /><span>Multiple stops without additional fees</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent mt-1" /><span>Flexible itinerary adjustments</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent mt-1" /><span>Professional wait service at each location</span></li>
              </ul>
            </div>
            <img src={corporateClient} alt="Corporate client" className="rounded-2xl shadow-premium" />
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceType="hourly" serviceName="Hourly Chauffeur" />
    </div>
  );
};

export default HourlyRides;
