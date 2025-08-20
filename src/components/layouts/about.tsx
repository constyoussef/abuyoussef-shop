import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mb-6 font-serif text-4xl font-bold md:text-5xl">
              نصنع الأناقة منذ 2015
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              في صالون أبو يوسف، نؤمن بأن كل رجل يستحق أن يبدو ويشعر بأفضل ما
              لديه. يجمع حلاقونا المهرة بين التقنيات التقليدية والتصفيف العصري
              لإبداع إطلالات خالدة وعصرية في آن واحد.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              من القصات الكلاسيكية إلى الأساليب الطليعية، نعمل معك لإيجاد
              الإطلالة المثالية التي تكمل أسلوب حياتك وشخصيتك. اختبر الفرق الذي
              يمكن أن يحدثه الاهتمام بالتفاصيل والحرفية الأصيلة.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              تعرف علينا أكثر
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="حلاق ماهر في العمل"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
