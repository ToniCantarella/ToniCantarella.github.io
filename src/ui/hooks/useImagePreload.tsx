import { useEffect } from "react";

export function usePreloadImage(image: string) {
    usePreloadImages([image])
}

export function usePreloadImages(imageUrls: string[]) {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
}