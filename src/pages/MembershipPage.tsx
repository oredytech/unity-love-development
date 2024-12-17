import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Download } from "lucide-react";

const membershipTypes = [
  {
    type: "founder",
    title: "Membre Fondateur",
    description: "Les membres qui ont participé à la création de la fondation",
  },
  {
    type: "cofounder",
    title: "Membre Co-Fondateur",
    description: "Les membres qui ont rejoint la fondation peu après sa création",
  },
  {
    type: "honorary",
    title: "Membre d'Honneur",
    description: "Les personnalités qui soutiennent activement la fondation",
  },
  {
    type: "active",
    title: "Membre Actif",
    description: "Les membres qui participent régulièrement aux activités",
  },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  motivation: string;
};

const MembershipPage = () => {
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Demande envoyée",
      description: "Nous examinerons votre demande et vous contacterons bientôt.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Devenir Membre</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Rejoignez FOSSHID et participez au développement de la RDC
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {membershipTypes.map((membership) => (
              <Card key={membership.type}>
                <CardHeader>
                  <CardTitle>{membership.title}</CardTitle>
                  <CardDescription>{membership.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Documents Officiels</CardTitle>
              <CardDescription>
                Consultez nos statuts et règlements intérieurs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                <Download className="mr-2" />
                Télécharger les Statuts (PDF)
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2" />
                Télécharger le Règlement Intérieur (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formulaire d'Adhésion</CardTitle>
              <CardDescription>
                Remplissez ce formulaire pour soumettre votre demande d'adhésion
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
                    name="membershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type d'adhésion souhaité</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            {membershipTypes.map((type) => (
                              <div
                                key={type.type}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem value={type.type} id={type.type} />
                                <FormLabel htmlFor={type.type} className="font-normal">
                                  {type.title}
                                </FormLabel>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Motivation</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Expliquez brièvement pourquoi vous souhaitez rejoindre FOSSHID..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Soumettre ma demande
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

export default MembershipPage;