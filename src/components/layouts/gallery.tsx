"use client";

import { useState } from "react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "قصة فيد عصرية",
      title: "فيد كلاسيكي",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "تصفيف اللحية",
      title: "نحت اللحية",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "تسريحة البومبادور",
      title: "بومبادور",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "قصة الأندركت",
      title: "أندركت",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "تصفيف الشارب",
      title: "تهذيب الشارب",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "قصة الباز",
      title: "باز كت",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "قصة محكمة",
      title: "كروب محكم",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "شعر مسحوب للخلف",
      title: "سليك باك",
    },
  ];

  return (
    <section id="gallery" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
            أعمالنا
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            اكتشف تسريحاتنا المميزة وقصاتنا الدقيقة التي تحدد الرجولة العصرية
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative transform cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute right-4 bottom-4 text-white">
                  <h3 className="font-serif text-lg font-semibold">
                    {image.title}
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
