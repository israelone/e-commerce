import { Image } from "./image";

export interface Product {
  id:number,
  name: string,
  header:string,
  description:string,
  price: number,
  discount: number,
  quantity: number,
  mainImages: Image[],
  thumbnails: Image[]
}
