import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, role, rating }: TestimonialCardProps) => {
  return (
    <div className="card">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-accent text-accent" : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground mb-4 italic">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
