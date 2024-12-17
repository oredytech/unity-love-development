import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, Heart, Users } from "lucide-react";

const opportunities = [
  {
    title: "Soutien Éducatif",
    description: "Aidez les enfants dans leur parcours scolaire",
    icon: Users,
    commitment: "2-4 heures par semaine",
    duration: "Minimum 3 mois",
  },
  {
    title: "Projets Communautaires",
    description: "Participez à l'organisation d'événements locaux",
    icon: Heart,
    commitment: "4-6 heures par semaine",
    duration: "Selon les projets",
  },
  {
    title: "Support Administratif",
    description: "Assistez l'équipe dans les tâches administratives",
    icon: Calendar,
    commitment: "Flexible",
    duration: "Minimum 1 mois",
  },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  availability: string;
};

const VolunteerPage = () => {
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Formulaire envoyé",
      description: "Nous vous contacterons bientôt pour discuter des opportunités de bénévolat.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Devenir Bénévole</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Rejoignez notre équipe de bénévoles et contribuez au développement de la RDC
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.title}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <opportunity.icon className="h-5 w-5 text-fosshid-blue" />
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{opportunity.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Formulaire de Candidature</CardTitle>
              <CardDescription>
                Remplissez ce formulaire pour nous rejoindre en tant que bénévole
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre prénom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="votre@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+243 ..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Centre d'intérêt</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez les domaines dans lesquels vous souhaitez vous investir..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Disponibilité</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Indiquez vos disponibilités (jours, heures)..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Envoyer ma candidature
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerPage;