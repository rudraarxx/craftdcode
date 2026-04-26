export const service = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "icon",
      title: "Icon Name",
      description: "Lucide icon name (e.g., Code, Layers, Smartphone)",
      type: "string",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};
