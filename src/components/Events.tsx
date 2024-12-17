import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

const YouTubeVideos = () => {
  const videos = [
    {
      id: "VIDEO_ID_1",
      title: "Action FOSSHID 1",
      description: "Description de l'action 1",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      id: "VIDEO_ID_2",
      title: "Action FOSSHID 2",
      description: "Description de l'action 2",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      id: "VIDEO_ID_3",
      title: "Action FOSSHID 3",
      description: "Description de l'action 3",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
  ];

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a943ea3f-e85c-4bd0-95f8-37dfd5de55ef.png')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fosshid-blue/60 to-fosshid-yellow/40 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nos actions en vidéos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="p-4">
              <div className="aspect-video mb-4">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="mt-2 text-gray-600">{video.description}</p>
              <Button 
                className="mt-4 w-full"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
              >
                Voir sur YouTube <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;