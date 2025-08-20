export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 font-serif text-3xl font-bold">أبو يوسف</div>
          <p className="text-muted-foreground mb-6">
            حيث يلتقي الأسلوب بالأناقة
          </p>
          <div className="mb-8 flex justify-center space-x-6 space-x-reverse">
            <a
              href="#home"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              الرئيسية
            </a>
            <a
              href="#gallery"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              المعرض
            </a>
            <a
              href="#moments"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              لحظاتنا
            </a>
            <a
              href="#services"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              الخدمات
            </a>
            <a
              href="#about"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              من نحن
            </a>
            <a
              href="#contact"
              className="text-card-foreground hover:text-accent transition-colors"
            >
              تواصل معنا
            </a>
          </div>
          <div className="border-border border-t pt-8">
            <p className="text-muted-foreground">
              © 2024 أبو يوسف. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
