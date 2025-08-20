"use client";

import { ImageModal } from "@/components/image-modal";
import { About } from "@/components/layouts/about";
import { Contact } from "@/components/layouts/contact";
import { Footer } from "@/components/layouts/footer";
import { Gallery } from "@/components/layouts/gallery";
import { Hero } from "@/components/layouts/hero";
import { Moments } from "@/components/layouts/moments";
import { Navbar } from "@/components/layouts/navbar";
import { Services } from "@/components/layouts/services";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <Gallery />

      {/* Moments Section */}
      <Moments />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}
