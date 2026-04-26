import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "utbonnz3",
  dataset: "production",
  apiVersion: "2024-04-26",
  useCdn: false, // Set to true for production to boost performance
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
