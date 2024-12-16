import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const fetchLatestPosts = async () => {
  const response = await axios.get<WordPressPost[]>(
    "https://totalementactus.net/wp-json/wp/v2/posts?_embed&per_page=3"
  );
  return response.data;
};

const LatestArticles = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["latestPosts"],
    queryFn: fetchLatestPosts,
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">Chargement des articles...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-600">
            Erreur lors du chargement des articles
          </div>
        </div>
      </section>
    );
  }

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
          {articles?.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={
                  article._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/placeholder.svg"
                }
                alt={article.title.rendered}
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
                <h3 
                  className="text-xl font-semibold text-gray-800 mt-2 mb-3"
                  dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                />
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
                />
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