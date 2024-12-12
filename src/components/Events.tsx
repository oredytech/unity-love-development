import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Formation en entrepreneuriat",
      date: "2024-04-15",
      location: "Kinshasa",
      description: "Une journée de formation pour les jeunes entrepreneurs",
    },
    {
      id: 2,
      title: "Campagne de santé",
      date: "2024-04-20",
      location: "Lubumbashi",
      description: "Consultation médicale gratuite pour les familles",
    },
    {
      id: 3,
      title: "Atelier agricole",
      date: "2024-04-25",
      location: "Goma",
      description: "Techniques modernes d'agriculture durable",
    },
  ];

  return (
    <section className="py-16 bg-fosshid-yellow/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Événements à Venir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <time className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Lieu: {event.location}
              </p>
              <Link
                to={`/events/${event.id}`}
                className="inline-block bg-fosshid-blue text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;