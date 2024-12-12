import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Formation en agriculture durable",
      excerpt: "Découvrez comment notre programme aide les agriculteurs locaux",
      image: "/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "Projet d'assainissement des routes",
      excerpt: "Un nouveau projet pour améliorer l'accès aux villages",
      image: "/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png",
      date: "2024-03-10",
    },
    {
      id: 3,
      title: "Initiative de santé communautaire",
      excerpt: "Bilan de notre campagne de vaccination",
      image: "/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png",
      date: "2024-03-05",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Derniers Articles</h2>
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to={`/blog/${article.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;