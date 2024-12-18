import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecentComments from "@/components/blog/RecentComments";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CommentForm from "@/components/blog/CommentForm";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  categories: number[];
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

interface WordPressComment {
  id: number;
  author_name: string;
  content: {
    rendered: string;
  };
  date: string;
}

const SinglePostPage = () => {
  const { id } = useParams();

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get<WordPressPost>(
        `https://totalementactus.net/wp-json/wp/v2/posts/${id}?_embed`
      );
      return response.data;
    },
  });

  const { data: relatedPosts, isLoading: isLoadingRelated } = useQuery({
    queryKey: ["relatedPosts", post?.categories?.[0]],
    enabled: !!post?.categories?.[0],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        `https://totalementactus.net/wp-json/wp/v2/posts?categories=${post?.categories[0]}&per_page=3&exclude=${id}&_embed`
      );
      return response.data;
    },
  });

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const response = await axios.get<WordPressComment[]>(
        `https://totalementactus.net/wp-json/wp/v2/comments?post=${id}&per_page=5`
      );
      return response.data;
    },
  });

  if (isLoadingPost) return <div className="text-center py-10">Chargement...</div>;
  if (!post) return null;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0]?.name;
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: fr });

  const shareUrl = window.location.href;
  const shareTitle = post.title.rendered;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

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
                className="text-4xl md:text-5xl font-bold text-white mb-6"
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

        {/* Content Section with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article>
                <div
                  className="prose prose-lg dark:prose-invert mx-auto [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:mt-4 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6 [&>blockquote]:border-l-4 [&>blockquote]:border-fosshid-blue [&>blockquote]:pl-4 [&>blockquote]:italic"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                
                {/* Social Sharing Buttons */}
                <div className="mt-8 flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("linkedin")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>

                {/* Comment Form Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Laisser un commentaire</h2>
                  <CommentForm postId={id} />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <RecentComments comments={comments} isLoading={isLoadingComments} />
              <RelatedPosts posts={relatedPosts} isLoading={isLoadingRelated} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SinglePostPage;
