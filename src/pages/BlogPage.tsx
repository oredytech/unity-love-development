
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const fetchPosts = async (page: number) => {
  const response = await axios.get<WordPressPost[]>(
    `https://totalementactus.net/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`
  );
  return {
    posts: response.data,
    totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
  };
};

const BlogPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
  });

  if (isLoading) return <div className="text-center py-10">Chargement...</div>;
  if (error) return <div className="text-center py-10">Erreur de chargement</div>;
  if (!data?.posts) return null;

  const latestPosts = data.posts.slice(0, 5);
  const allPosts = data.posts;
  const currentFeaturedImage = latestPosts[currentSlide]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Carousel */}
      <section 
        className="relative bg-gray-900 py-16"
        style={{
          backgroundImage: `url(${currentFeaturedImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.3s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-black/70 pt-32 pb-16" />
        <div className="container mx-auto px-4 relative z-10">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            onSelect={(index) => setCurrentSlide(index)}
          >
            <CarouselContent>
              {latestPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/placeholder.svg"
                      }
                      alt={post.title.rendered}
                      className="absolute inset-0 w-full h-full object-cover mt-[70px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2
                        className="text-2xl font-bold text-white mb-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <div
                        className="text-gray-200 mb-4 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-white hover:text-fosshid-blue transition-colors"
                      >
                        Lire plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tous les articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/placeholder.svg"
                  }
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-5"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-center"
                  >
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center"
                    >
                      Lire plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Page précédente
            </Button>
            <Button 
              variant="outline"
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage >= (data.totalPages || 1)}
            >
              Page suivante
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
