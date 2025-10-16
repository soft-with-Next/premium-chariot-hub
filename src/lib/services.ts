import { Plane, MapPin, Clock, Users, Building2, CalendarCheck } from "lucide-react";
import airportTransfer from "@/assets/airport-transfer.jpg";
import cityToCity from "@/assets/city-to-city.jpg";
import hourlyService from "@/assets/hourly-service.jpg";
import professionalDriver from "@/assets/professional-driver.jpg";
import corporateClient from "@/assets/corporate-client.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";

export const services = [
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
    image: airportTransfer,
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
    image: cityToCity,
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
    image: hourlyService,
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
    image: professionalDriver,
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
    image: corporateClient,
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
    image: luxuryInterior,
  },
];