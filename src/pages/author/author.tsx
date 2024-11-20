import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BlogCard from "../home/components/blog-card/BlogCard";
import { articles } from "../../../data.json";

interface AuthorProfileProps {
  author: {
    name: string;
    bio: string;
    avatar: string;
    initials: string;
    followers: number;
    following: number;
    skills: string[];
    socialLinks: {
      github?: string;
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
}

const Author = ({ author }: AuthorProfileProps) => {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
        <Avatar className="h-24 w-24 border-2 border-primary">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.initials}</AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-2 text-2xl font-bold">{author.name}</h1>
          <p className="mb-4 text-muted-foreground">{author.bio}</p>

          <div className="mb-4 flex justify-center gap-2 md:justify-start">
            {author.socialLinks.github && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={author.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
            )}
            {author.socialLinks.facebook && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={author.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </Button>
            )}
            {author.socialLinks.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </Button>
            )}
            {author.socialLinks.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>

          <div className="flex justify-center gap-4 text-sm text-muted-foreground md:justify-start">
            <span>{author.followers.toLocaleString()} Followers</span>
            <span>{author.following.toLocaleString()} Following</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="mb-8 w-full">
          <TabsTrigger value="about" className="flex-1">
            About
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex-1">
            Articles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">
                  About {author.name}
                </h2>
                <p className="text-muted-foreground">{author.bio}</p>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {author.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="articles">
          {articles.map((article) => {
            return (
              <BlogCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
                tags={article.tags}
              />
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Author;
