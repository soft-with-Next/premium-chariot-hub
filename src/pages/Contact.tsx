import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtext: "24/7 Support Line",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@luxeride.com",
      subtext: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Premium Avenue",
      subtext: "New York, NY 10001",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Operations",
      subtext: "Always here for you",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions or need assistance? We're here 24/7 to help with your premium transportation needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="home-section">
        <div className="container-custom">
          <div className="card-grid-2col lg:grid-cols-4 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-lg w-fit mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-foreground mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="heading-md mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're planning a single journey or need comprehensive corporate transportation solutions, our team is ready to assist. We pride ourselves on responsive, personalized service.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Booking Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For immediate booking assistance or quote requests, call our 24/7 support line or use our online booking system.
                </p>
                <Button className="btn-accent w-full">Book Now</Button>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Corporate Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in opening a business account? Our corporate team can discuss custom solutions and volume pricing.
                </p>
                <Button className="btn-outline w-full">Learn More</Button>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Response Times</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Phone Support:</span>
                    <span className="font-medium text-foreground">Immediate</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Email Inquiries:</span>
                    <span className="font-medium text-foreground">Within 2 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quote Requests:</span>
                    <span className="font-medium text-foreground">Within 1 hour</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
