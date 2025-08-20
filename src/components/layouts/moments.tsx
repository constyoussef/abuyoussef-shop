"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export function Moments() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const moments = [
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "لحظة من العمل",
      title: "تحويل كامل",
      isVideo: true,
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "مهارة الحلاقة",
      title: "دقة في التفاصيل",
      isVideo: true,
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "نتيجة مذهلة",
      title: "إطلالة جديدة",
      isVideo: false,
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "خلف الكواليس",
      title: "فن الحلاقة",
      isVideo: true,
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "عميل سعيد",
      title: "رضا العملاء",
      isVideo: false,
    },
  ];

  return (
    <section id="moments" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
            لحظاتنا
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            شاهد أجمل اللحظات من عملنا اليومي وتحويلات عملائنا المذهلة
          </p>
        </div>

        <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="group relative h-96 w-64 flex-shrink-0 transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(moment.src)}
            >
              <img
                src={moment.src || "/placeholder.svg"}
                alt={moment.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {moment.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/50 p-3">
                    <Play className="h-8 w-8 fill-white text-white" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute right-4 bottom-4 text-white">
                  <h3 className="font-serif text-lg font-semibold">
                    {moment.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
