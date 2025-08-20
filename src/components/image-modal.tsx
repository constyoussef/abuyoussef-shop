import { Button } from "./ui/button";

export function ImageModal({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={() => setSelectedImage(null)}
    >
      <div className="relative max-h-full max-w-4xl">
        <img
          src={selectedImage || "/placeholder.svg"}
          alt="صورة من المعرض"
          className="max-h-full max-w-full rounded-lg object-contain"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 left-4 border-white/20 bg-white/10 text-white hover:bg-white/20"
          onClick={() => setSelectedImage(null)}
        >
          ×
        </Button>
      </div>
    </div>
  );
}
