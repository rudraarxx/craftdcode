export const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Company / Role",
      type: "string",
    },
    {
      name: "image",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
