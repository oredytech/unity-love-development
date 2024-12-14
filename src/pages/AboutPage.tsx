import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Target, Heart, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-fosshid-blue/10 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de FOSSHID</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La Fondation Saidi SHISHOMBO pour le Développement œuvre pour un avenir meilleur en République Démocratique du Congo.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                FOSSHID aspire à créer un impact durable dans les communautés congolaises en promouvant le développement social, économique et culturel.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-fosshid-blue/10 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-fosshid-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Objectifs Clairs</h3>
                    <p className="text-muted-foreground">
                      Nous définissons des objectifs mesurables pour chaque projet communautaire.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-fosshid-yellow/10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-fosshid-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Impact Global</h3>
                    <p className="text-muted-foreground">
                      Notre action s'étend à travers toute la RDC pour un développement équilibré.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png"
                alt="Vision FOSSHID"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-xl">10+</p>
                <p className="text-muted-foreground">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-fosshid-red/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-fosshid-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Amour</h3>
              <p className="text-muted-foreground">
                L'amour guide nos actions et notre engagement envers les communautés.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-fosshid-blue/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-fosshid-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Unité</h3>
              <p className="text-muted-foreground">
                Nous croyons en la force de l'unité et de la collaboration.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-fosshid-yellow/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-fosshid-yellow" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Développement</h3>
              <p className="text-muted-foreground">
                Notre mission est de promouvoir le développement durable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/77ebbff1-a265-4bd7-8192-ca4d28ca855f.png"
                alt="Fondateur FOSSHID"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Fondateur</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Saidi SHISHOMBO, visionnaire et philanthrope, a créé FOSSHID avec la conviction profonde que le développement durable de la RDC passe par l'autonomisation des communautés locales.
              </p>
              <p className="text-lg text-muted-foreground">
                Son engagement inébranlable pour le développement social et économique continue d'inspirer notre travail quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;