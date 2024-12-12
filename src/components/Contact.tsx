import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <section className="py-20 bg-fosshid-blue/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-gray-800 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Notre adresse</h3>
                <p className="text-gray-600">123 Avenue de la Paix, Kinshasa, RDC</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-gray-800 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@fosshid.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-gray-800 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Téléphone</h3>
                <p className="text-gray-600">+243 123 456 789</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Votre nom" required />
              </div>
              <div>
                <Input type="email" placeholder="Votre email" required />
              </div>
            </div>
            <div>
              <Input placeholder="Sujet" required />
            </div>
            <div>
              <Textarea placeholder="Votre message" className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full bg-fosshid-green hover:bg-green-100 text-gray-800">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;