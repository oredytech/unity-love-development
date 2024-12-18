import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

const GalleryPage = () => {
  const images = [
    {
      src: "/lovable-uploads/77ebbff1-a265-4bd7-8192-ca4d28ca855f.png",
      alt: "Action FOSSHID 1",
      description: "Distribution de matériel scolaire"
    },
    {
      src: "/lovable-uploads/a943ea3f-e85c-4bd0-95f8-37dfd5de55ef.png",
      alt: "Action FOSSHID 2",
      description: "Réunion communautaire"
    },
    {
      src: "/lovable-uploads/e8f4d173-dd5a-4746-83f4-3b9621150f80.png",
      alt: "Action FOSSHID 3",
      description: "Formation professionnelle"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Galerie des Actions FOSSHID</h1>
          
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 py-2 text-lg">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;