import Image from "next/image";

import { PhotoGrid } from "~/components/photo-grid";

export default function Home() {
  {
    /* @ts-expect-error Async Server Component */
  }
  return <PhotoGrid />;
}
