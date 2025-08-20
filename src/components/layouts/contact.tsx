import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
            تواصل معنا
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            مستعد لترقية أسلوبك؟ احجز موعدك اليوم
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-card-foreground mb-6 font-serif text-2xl font-semibold">
                  أرسل لنا رسالة
                </h3>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="اسمك"
                      className="bg-input border-border text-right"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      className="bg-input border-border text-right"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="الموضوع"
                      className="bg-input border-border text-right"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="رسالتك"
                      rows={4}
                      className="bg-input border-border text-right"
                    />
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-foreground mb-2 font-semibold">زورنا</h4>
                <p className="text-muted-foreground">
                  شارع الأناقة 123
                  <br />
                  حي وسط المدينة
                  <br />
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-foreground mb-2 font-semibold">اتصل بنا</h4>
                <p className="text-muted-foreground">+966 11 123 4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="text-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-foreground mb-2 font-semibold">راسلنا</h4>
                <p className="text-muted-foreground">info@abuyoussef.sa</p>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-foreground mb-4 font-semibold">تابعنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
