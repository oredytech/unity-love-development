import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RecentComments from "@/components/blog/RecentComments";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CommentForm from "@/components/blog/CommentForm";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleContent from "@/components/blog/ArticleContent";
import SocialShare from "@/components/blog/SocialShare";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
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
  const { slug } = useParams();

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        `https://totalementactus.net/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      return response.data[0];
    },
  });

  const { data: relatedPosts, isLoading: isLoadingRelated } = useQuery({
    queryKey: ["relatedPosts", post?.categories?.[0]],
    enabled: !!post?.categories?.[0],
    queryFn: async () => {
      const response = await axios.get<WordPressPost[]>(
        `https://totalementactus.net/wp-json/wp/v2/posts?categories=${post?.categories[0]}&per_page=3&exclude=${post?.id}&_embed`
      );
      return response.data;
    },
  });

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ["comments", post?.id],
    enabled: !!post?.id,
    queryFn: async () => {
      const response = await axios.get<WordPressComment[]>(
        `https://totalementactus.net/wp-json/wp/v2/comments?post=${post?.id}&per_page=5`
      );
      return response.data;
    },
  });

  if (isLoadingPost) return <div className="text-center py-10">Chargement...</div>;
  if (!post) return null;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0]?.name;
  const shareUrl = window.location.href;
  const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '');

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title.rendered} - FOSSHID</title>
        <meta name="description" content={excerpt} />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title.rendered} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={featuredImage} />
      </Helmet>

      <Navigation />
      <main className="pt-16">
        <ArticleHeader
          title={post.title.rendered}
          author={author}
          date={post.date}
          featuredImage={featuredImage}
        />

        {/* Content Section with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ArticleContent content={post.content.rendered} />
              <SocialShare url={shareUrl} title={post.title.rendered} />

              {/* Comment Form Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Laisser un commentaire</h2>
                <CommentForm postId={post.id} />
              </div>
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