import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import customerService from "@/assets/customer-service.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hero = useScrollReveal();
  const section1 = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567", subtext: "24/7 Support Line" },
    { icon: Mail, title: "Email", content: "support@luxeride.com", subtext: "Response within 2 hours" },
    { icon: MapPin, title: "Office", content: "123 Premium Avenue", subtext: "New York, NY 10001" },
    { icon: Clock, title: "Hours", content: "24/7 Operations", subtext: "Always here for you" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={customerService} alt="Customer service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl" ref={hero.ref}>
            <div className={`${hero.isVisible ? "animate-fade-up" : "opacity-0"}`}>
              <h1 className="heading-xl text-primary-foreground mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Have questions or need assistance? We're here 24/7 to help with your premium transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" ref={section1.ref}>
        <div className="container-custom">
          <div className="card-grid-2col lg:grid-cols-4 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className={`card text-center ${section1.isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
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
            <div>
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required value={formData.name} onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))} className="mt-1.5 min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full btn-accent" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="text-muted-foreground">Whether you're planning a single journey or need comprehensive corporate transportation solutions, our team is ready to assist.</p>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Response Times</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Phone Support:</span><span className="font-medium text-foreground">Immediate</span></li>
                  <li className="flex justify-between"><span>Email Inquiries:</span><span className="font-medium text-foreground">Within 2 hours</span></li>
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
