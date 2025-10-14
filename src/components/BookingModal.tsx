import { useState } from "react";
import { X, MapPin, Calendar, Clock, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: "airport" | "city-to-city" | "hourly" | "general";
  serviceName: string;
}

const BookingModal = ({ isOpen, onClose, serviceType, serviceName }: BookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
    luggage: "1",
    vehicle: "",
    flightNumber: "",
    hours: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you shortly to confirm your premium ride.",
    });
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-2xl shadow-premium max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-glow p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="heading-sm text-primary-foreground mb-1">Book {serviceName}</h2>
              <p className="text-primary-foreground/80 text-sm">
                Complete the form and we'll confirm your booking within minutes
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pickup Location */}
          <div>
            <Label htmlFor="pickup" className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-accent" />
              Pickup Location
            </Label>
            <Input
              id="pickup"
              placeholder={serviceType === "airport" ? "Enter airport name" : "Enter pickup address"}
              value={formData.pickup}
              onChange={(e) => handleChange("pickup", e.target.value)}
              required
            />
          </div>

          {/* Dropoff Location */}
          {serviceType !== "hourly" && (
            <div>
              <Label htmlFor="dropoff" className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-accent" />
                Drop-off Location
              </Label>
              <Input
                id="dropoff"
                placeholder="Enter destination address"
                value={formData.dropoff}
                onChange={(e) => handleChange("dropoff", e.target.value)}
                required
              />
            </div>
          )}

          {/* Flight Number for Airport */}
          {serviceType === "airport" && (
            <div>
              <Label htmlFor="flightNumber" className="mb-2 block">
                Flight Number (Optional)
              </Label>
              <Input
                id="flightNumber"
                placeholder="e.g., AA1234"
                value={formData.flightNumber}
                onChange={(e) => handleChange("flightNumber", e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                We'll track your flight for automatic pickup adjustments
              </p>
            </div>
          )}

          {/* Hours for Hourly Service */}
          {serviceType === "hourly" && (
            <div>
              <Label htmlFor="hours" className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-accent" />
                Duration (Hours)
              </Label>
              <Select value={formData.hours} onValueChange={(value) => handleChange("hours", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 hours (minimum)</SelectItem>
                  <SelectItem value="3">3 hours</SelectItem>
                  <SelectItem value="4">4 hours</SelectItem>
                  <SelectItem value="6">6 hours</SelectItem>
                  <SelectItem value="8">8 hours (full day)</SelectItem>
                  <SelectItem value="12">12 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-accent" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-accent" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Passengers and Luggage */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="passengers" className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-accent" />
                Passengers
              </Label>
              <Select value={formData.passengers} onValueChange={(value) => handleChange("passengers", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="luggage" className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-accent" />
                Luggage
              </Label>
              <Select value={formData.luggage} onValueChange={(value) => handleChange("luggage", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Bag" : "Bags"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Vehicle Selection */}
          <div>
            <Label htmlFor="vehicle" className="mb-2 block">
              Preferred Vehicle Class
            </Label>
            <Select value={formData.vehicle} onValueChange={(value) => handleChange("vehicle", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Executive Sedan - Starting at $85</SelectItem>
                <SelectItem value="suv">Luxury SUV - Starting at $120</SelectItem>
                <SelectItem value="van">Premium Van - Starting at $150</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 btn-accent">
              Request Booking
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our terms of service. We'll contact you to confirm pricing and details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
