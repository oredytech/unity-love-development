import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ArticleHeaderProps {
  title: string;
  author?: string;
  date: string;
  featuredImage?: string;
}

const ArticleHeader = ({ title, author, date, featuredImage }: ArticleHeaderProps) => {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: fr });

  return (
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
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex items-center text-white/80 space-x-4">
            {author && <span>Par {author}</span>}
            <span>•</span>
            <time>{formattedDate}</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;