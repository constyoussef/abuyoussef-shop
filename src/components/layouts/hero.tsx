import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="animate-fade-in mb-6 font-serif text-6xl font-bold md:text-8xl">
          Abu Youssef
        </h1>
        <p className="animate-fade-in-up mb-8 text-xl text-gray-200 md:text-2xl">
          حيث يلتقي الأسلوب بالأناقة
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in-up px-8 py-3 text-lg"
        >
          احجز موعدك الآن
        </Button>
      </div>
    </section>
  );
}
