export function Navbar() {
  return (
    <nav className="bg-card/95 border-border fixed top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-card-foreground font-serif text-2xl font-bold">
          Abu Youssef
        </div>
        <div className="hidden space-x-8 space-x-reverse md:flex">
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
      </div>
    </nav>
  );
}
