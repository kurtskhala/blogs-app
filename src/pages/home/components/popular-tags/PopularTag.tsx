import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tags } from "../../../../../data.json";

const PopularTag = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularTag;
