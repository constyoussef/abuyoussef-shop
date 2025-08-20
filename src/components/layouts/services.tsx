import { Card, CardContent } from "@/components/ui/card";
import { Clock, Scissors, Star } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "قصات شعر فاخرة",
      description: "قصات دقيقة مصممة خصيصاً لتناسب أسلوبك وشكل وجهك",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "تهذيب اللحية",
      description: "خدمات تهذيب وتصفيف اللحية بخبرة عالية",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "حلاقة بالمنشفة الساخنة",
      description: "حلاقة تقليدية بالموس مع علاج المنشفة الساخنة",
    },
  ];
  return (
    <section id="services" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
            خدماتنا
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            خدمات العناية الفاخرة المصممة للرجل العصري
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-card-foreground mb-4 font-serif text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
