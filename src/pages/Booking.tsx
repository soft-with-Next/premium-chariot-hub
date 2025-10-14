import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Clock, Car } from "lucide-react";
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

const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "1",
  });

  const vehicleOptions = [
    { value: "sedan", label: "Executive Sedan - $85/hr", passengers: 3 },
    { value: "suv", label: "Luxury SUV - $120/hr", passengers: 6 },
    { value: "van", label: "Premium Van - $150/hr", passengers: 8 },
  ];

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: "Booking Confirmed!",
        description: "You'll receive a confirmation email shortly.",
      });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-16">
        <div className="container-custom text-center">
          <h1 className="heading-lg text-primary-foreground mb-4">Book Your Ride</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Complete your booking in three simple steps
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex justify-between max-w-3xl mx-auto">
            {[
              { num: 1, label: "Trip Details" },
              { num: 2, label: "Vehicle Selection" },
              { num: 3, label: "Review & Confirm" },
            ].map((s) => (
              <div
                key={s.num}
                className={`flex items-center gap-3 ${
                  step >= s.num ? "opacity-100" : "opacity-40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s.num
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s.num}
                </div>
                <span className="hidden sm:inline font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="home-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card-premium p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="heading-sm mb-6">Where and When?</h2>
                  
                  <div>
                    <Label htmlFor="pickup" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      Pickup Location
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      className="mt-1.5"
                      value={bookingData.pickup}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, pickup: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="dropoff" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      Drop-off Location
                    </Label>
                    <Input
                      id="dropoff"
                      placeholder="Enter destination address"
                      className="mt-1.5"
                      value={bookingData.dropoff}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, dropoff: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        className="mt-1.5"
                        value={bookingData.date}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, date: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        className="mt-1.5"
                        value={bookingData.time}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, time: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="heading-sm mb-6">Choose Your Vehicle</h2>
                  
                  <div>
                    <Label htmlFor="vehicle" className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-accent" />
                      Vehicle Type
                    </Label>
                    <Select
                      value={bookingData.vehicle}
                      onValueChange={(value) =>
                        setBookingData({ ...bookingData, vehicle: value })
                      }
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {vehicleOptions.map((vehicle) => (
                      <div
                        key={vehicle.value}
                        className={`card cursor-pointer transition-all ${
                          bookingData.vehicle === vehicle.value
                            ? "ring-2 ring-accent"
                            : ""
                        }`}
                        onClick={() =>
                          setBookingData({ ...bookingData, vehicle: vehicle.value })
                        }
                      >
                        <div className="aspect-video bg-muted rounded-lg mb-3" />
                        <h3 className="font-semibold text-sm mb-1">
                          {vehicle.label.split(" - ")[0]}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Up to {vehicle.passengers} passengers
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="heading-sm mb-6">Review Your Booking</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup</span>
                      <span className="font-medium">{bookingData.pickup || "Not set"}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Drop-off</span>
                      <span className="font-medium">{bookingData.dropoff || "Not set"}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Date & Time</span>
                      <span className="font-medium">
                        {bookingData.date} at {bookingData.time}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Vehicle</span>
                      <span className="font-medium">
                        {vehicleOptions.find((v) => v.value === bookingData.vehicle)
                          ?.label || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between py-4 bg-muted/50 rounded-lg px-4">
                      <span className="font-semibold">Estimated Total</span>
                      <span className="font-bold text-xl text-accent">$120.00</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleContinue}
                  className="flex-1 btn-accent"
                >
                  {step === 3 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Need help? Call us at <span className="text-accent font-medium">+1 (555) 123-4567</span> or{" "}
                <a href="/contact" className="text-accent hover:underline">
                  contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
