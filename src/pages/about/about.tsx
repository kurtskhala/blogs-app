import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("about-page.about-us")}</h1>
        <p className="text-lg text-muted-foreground">
          {t("about-page.about-us-text")}
        </p>
      </div>

      <div className="mb-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            {t("about-page.our-mission")}
          </h2>
          <p className="mb-4 text-muted-foreground">
            {t("about-page.our-mission-text")}
          </p>
        </div>
        <div className="rounded-lg bg-muted p-6">
          <div className="flex h-64 items-center justify-center">
            <img
              src="/api/placeholder/400/320"
              alt="Mission illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {t("about-page.rich-content")}
            </h3>
            <p className="text-muted-foreground">
              {t("about-page.rich-content-text")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {t("about-page.vibrant-community")}
            </h3>
            <p className="text-muted-foreground">
              {t("about-page.vibrant-community-text")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {t("about-page.cutting-edge-topics")}
            </h3>
            <p className="text-muted-foreground">
              {t("about-page.cutting-edge-topics-text")}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-16">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-2xl font-bold">
            {t("about-page.our-story")}
          </h2>
          <p className="mb-4 text-muted-foreground">
            {t("about-page.our-story-text")}
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">{t("about-page.join-us")}</h2>
        <p className="mb-6 text-muted-foreground">
          {t("about-page.join-us-text")}
        </p>
        <Button size="lg">{t("about-page.join-us-button")}</Button>
      </div>
    </div>
  );
};

export default About;
