import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("unique");
  const { toast } = useToast();

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment processing
    toast({
      title: "Merci pour votre don!",
      description: "Nous vous contacterons bientôt pour finaliser votre don.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Faire un don</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Votre soutien nous aide à réaliser notre mission pour le développement de la RDC
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Choisissez votre don</CardTitle>
              <CardDescription>
                Tous les dons sont déductibles des impôts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonation} className="space-y-6">
                <div className="space-y-4">
                  <Label>Type de don</Label>
                  <RadioGroup
                    defaultValue="unique"
                    onValueChange={setDonationType}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unique" id="unique" />
                      <Label htmlFor="unique">Don unique</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mensuel" id="mensuel" />
                      <Label htmlFor="mensuel">Don mensuel</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label>Montant du don (USD)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["10", "25", "50", "100"].map((value) => (
                      <Button
                        key={value}
                        type="button"
                        variant={amount === value ? "default" : "outline"}
                        onClick={() => setAmount(value)}
                      >
                        {value}$
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Autre montant"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      $
                    </span>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Faire un don de {amount}$
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex-col space-y-4 text-sm text-muted-foreground">
              <p>
                Votre don sera utilisé pour soutenir nos projets de développement
                en République Démocratique du Congo.
              </p>
              <p>
                Pour plus d'informations sur l'utilisation des dons, contactez-nous
                à donations@fosshid.org
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;