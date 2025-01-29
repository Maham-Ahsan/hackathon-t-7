import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
  *[_type == "car" && name != null && pricePerDay != null] {
    _id,
    name,
    brand,
    seatingCapacity,
    fuelCapacity,
    transmission,
    pricePerDay,
    "imageUrl": image.asset->url,
    tags
  }
`);

export const fourCars = defineQuery(`
  *[_type == "car" && name != null && pricePerDay != null][0..3] {
    _id,
    name,
    brand,
    seatingCapacity,
    fuelCapacity,
    transmission,
    pricePerDay,
    "imageUrl": image.asset->url,
    tags
  }
`);

