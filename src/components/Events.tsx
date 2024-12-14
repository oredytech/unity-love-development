import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Événement 1",
      date: "2023-10-01",
      description: "Description de l'événement 1",
    },
    {
      id: 2,
      title: "Événement 2",
      date: "2023-10-15",
      description: "Description de l'événement 2",
    },
    {
      id: 3,
      title: "Événement 3",
      date: "2023-11-01",
      description: "Description de l'événement 3",
    },
  ];

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a943ea3f-e85c-4bd0-95f8-37dfd5de55ef.png')"
        }}
      />
      <div className="absolute inset-0 bg-fosshid-yellow/40 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Événements à venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={event.id} className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
              <Button className="mt-4">En savoir plus</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
