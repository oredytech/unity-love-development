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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-fosshid-blue mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Notre adresse</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Avenue de la Paix, Kinshasa, RDC</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-fosshid-blue mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@fosshid.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-fosshid-blue mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Téléphone</h3>
                <p className="text-gray-600 dark:text-gray-300">+243 123 456 789</p>
              </div>
            </div>

            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                title="FOSSHID Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.2071796!3d-4.4023936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1624932765784!5m2!1sfr!2scd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Votre nom" 
                    required 
                    className="dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Votre email" 
                    required 
                    className="dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <div>
                <Input 
                  placeholder="Sujet" 
                  required 
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Votre message" 
                  className="min-h-[150px] dark:bg-gray-700 dark:border-gray-600" 
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-fosshid-blue hover:bg-fosshid-blue/90 text-white"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;