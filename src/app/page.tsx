import Image from "next/image";
import { PhotoGrid } from "~/components/photo-grid";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <PhotoGrid />
    </>
  );
}
