import { Users, Briefcase } from "lucide-react";

interface VehicleCardProps {
  name: string;
  category: string;
  image: string;
  passengers: number;
  luggage: number;
  features: string[];
}

const VehicleCard = ({ name, category, image, passengers, luggage, features }: VehicleCardProps) => {
  return (
    <div className="card-premium">
      <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="heading-sm">{name}</h3>
        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{passengers} passengers</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          <span>{luggage} bags</span>
        </div>
      </div>
      <ul className="space-y-1.5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-accent mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleCard;
