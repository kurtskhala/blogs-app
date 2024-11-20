import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { authors } from "../../../../../data.json";

const FeaturedAuthors = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="mb-4 text-lg font-semibold">Featured Authors</h3>
        <div className="space-y-4">
          {authors.map((author) => (
            <Link key={author.id} to={`author/${author.id}`}>
              <div className="flex cursor-pointer items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={author.src} alt={author.name} />
                  <AvatarFallback>{author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{author.job}</h4>
                  <p className="text-sm text-muted-foreground">{author.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedAuthors;
