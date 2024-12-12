import { useState } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez bientôt nos dernières actualités.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-fosshid-green/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-gray-800 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
            et mises à jour de nos projets.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-fosshid-blue hover:bg-blue-100 text-gray-800 px-6 py-2 rounded-lg transition-colors duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;