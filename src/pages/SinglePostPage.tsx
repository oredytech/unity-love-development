import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const SinglePostPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get<WordPressPost>(
        `https://totalementactus.net/wp-json/wp/v2/posts/${id}?_embed`
      );
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center py-10">Chargement...</div>;
  if (error) return <div className="text-center py-10">Erreur de chargement</div>;
  if (!post) return null;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0]?.name;
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: fr });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <div
          className="relative h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${featuredImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <h1
                className="text-4xl font-bold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="flex items-center text-white/80 space-x-4">
                {author && <span>Par {author}</span>}
                <span>•</span>
                <time>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12">
          <div
            className="prose prose-lg dark:prose-invert mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SinglePostPage;