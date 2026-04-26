export const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Creative Development", value: "Creative Development" },
          { title: "Next.js & Web Apps", value: "Next.js & Web Apps" },
          { title: "UI/UX & Design Systems", value: "UI/UX & Design Systems" },
        ],
      },
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "challenge",
      title: "The Challenge",
      type: "text",
    },
    {
      name: "solution",
      title: "The Solution",
      type: "text",
    },
    {
      name: "methodology",
      title: "Methodology / Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    {
      name: "stats",
      title: "Project Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
  ],
};
