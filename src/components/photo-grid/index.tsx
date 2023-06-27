import {
  getAllItemsFromCollection,
  getSingleItemFromCollection,
} from "~/firebase/queries";
import { Grid } from "./grid";

export async function PhotoGrid() {
  const [images, header] = await Promise.all([
    getAllItemsFromCollection("images"),
    getSingleItemFromCollection("photo-header"),
  ]);

  return <Grid images={images} header={header} />;
}
