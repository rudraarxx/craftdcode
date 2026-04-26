# Content Structure & Schema - CDC Portfolio

## 1. Overview
The CDC Portfolio will primarily be a frontend-driven application. For its initial phase, content will be managed via static JSON files or local MDX to ensure maximum speed and simplicity.

## 2. Project Schema (Projects.json)
```json
{
  "projects": [
    {
      "id": "project-slug",
      "title": "Project Name",
      "subtitle": "Short descriptive text",
      "description": "Full project walkthrough and technical details.",
      "tags": ["React", "GSAP", "Next.js"],
      "media": {
        "hero": "/assets/projects/hero.jpg",
        "gallery": ["/assets/projects/1.jpg", "/assets/projects/2.jpg"],
        "video": "/assets/projects/demo.mp4"
      },
      "links": {
        "live": "https://example.com",
        "repo": "https://github.com/cdc/project"
      },
      "parallaxConfig": {
        "intensity": 0.5,
        "direction": "vertical"
      }
    }
  ]
}
```

## 3. Team Member Schema
```json
{
  "team": [
    {
      "name": "Member Name",
      "role": "Developer / Designer",
      "bio": "Short professional bio.",
      "socials": {
        "github": "...",
        "twitter": "...",
        "linkedin": "..."
      },
      "avatar": "/assets/team/avatar.png"
    }
  ]
}
```

## 4. Metadata (SEO)
- **Title**: CDC | Crafted Developer Collective
- **Description**: A premium portfolio by 2 developers and 1 designer.
- **Keywords**: Portfolio, Next.js, GSAP, Parallax, Designer, Developer.
