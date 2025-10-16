import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
}
const ServiceCard = ({ icon: Icon, title, description, features, image, imageAlt, link }: ServiceCardProps) => {
  return (
    <div className="card group">
      {image && (
        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
          <img src={image} alt={imageAlt ?? title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-lg w-fit mb-4 group-hover:shadow-lg transition-shadow">
        <Icon className="h-8 w-8 text-accent-foreground" />
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-accent mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all group"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
