import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { List } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Comment {
  id: number;
  author_name: string;
  content: {
    rendered: string;
  };
  date: string;
}

interface RecentCommentsProps {
  comments: Comment[] | undefined;
  isLoading: boolean;
}

const RecentComments = ({ comments, isLoading }: RecentCommentsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <List className="h-5 w-5" />
          Commentaires Récents
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p>Chargement des commentaires...</p>
        ) : comments?.length ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-2">
                <div className="font-medium">{comment.author_name}</div>
                <div
                  className="text-sm text-muted-foreground line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: comment.content.rendered,
                  }}
                />
                <time className="text-xs text-muted-foreground">
                  {format(new Date(comment.date), "d MMMM yyyy", {
                    locale: fr,
                  })}
                </time>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun commentaire pour le moment</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentComments;