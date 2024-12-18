import { Link } from "react-router-dom";
import { List } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

interface RelatedPostsProps {
  posts: WordPressPost[] | undefined;
  isLoading: boolean;
}

const RelatedPosts = ({ posts, isLoading }: RelatedPostsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <List className="h-5 w-5" />
          Articles Similaires
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p>Chargement des articles...</p>
        ) : posts?.length ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="space-y-3">
                  <img
                    src={
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "/placeholder.svg"
                    }
                    alt={post.title.rendered}
                    className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                  <h3
                    className="font-medium line-clamp-2 group-hover:text-fosshid-blue transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>Aucun article similaire trouvé</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RelatedPosts;