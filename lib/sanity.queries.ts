export const projectsQuery = `*[_type == "project"] | order(year desc) {
  title,
  "slug": slug.current,
  category,
  year,
  thumbnail,
  description,
  role,
  services,
  challenge,
  solution,
  methodology,
  stats
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  year,
  thumbnail,
  description,
  role,
  services,
  challenge,
  solution,
  methodology,
  stats
}`;

export const teamQuery = `*[_type == "teamMember"] | order(name asc) {
  name,
  initials,
  role,
  superpower,
  image
}`;

export const testimonialsQuery = `*[_type == "testimonial"] {
  quote,
  author,
  company,
  image
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  title,
  description,
  icon,
  order
}`;
