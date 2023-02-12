type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item[] = [
  {
    name: "Think Globally",
    items: [
      {
        name: "Stream Video from the Edge",
        slug: "video",
        description: "Create UI that is shared across routes"
      },
      {
        name: "Grouped Layouts",
        slug: "route-groups",
        description: "Organize routes without affecting URL paths",
        isDisabled: true
      },
      {
        name: "Streaming with Suspense",
        slug: "streaming",
        description:
          "Streaming data fetching from the server with React Suspense",
        isDisabled: true
      },
      {
        name: "Root Layouts",
        slug: "root-layouts",
        description: "Create top-level layouts that apply to all routes",
        isDisabled: true
      }
    ]
  },
  {
    name: "File Conventions",
    items: [
      {
        name: "Loading",
        slug: "loading",
        description:
          "Create meaningful loading UI for specific parts of an app",
        isDisabled: true
      },
      {
        name: "Error",
        slug: "error-handling",
        description: "Create error UI for specific parts of an app",
        isDisabled: true
      }
    ]
  },
  {
    name: "Data Fetching",
    items: [
      {
        name: "Static-Site Generation",
        slug: "ssg",
        description: "Generate static pages",
        isDisabled: true
      },
      {
        name: "Server-Side Rendering",
        slug: "ssr",
        description: "Server-render pages",
        isDisabled: true
      },
      {
        name: "Incremental Static Regeneration",
        slug: "isr",
        description: "Get the best of both worlds between static & dynamic",
        isDisabled: true
      }
    ]
  },
  {
    name: "Components",
    items: [
      {
        name: "Client Context",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
        isDisabled: true
      }
    ]
  },
  {
    name: "Styling",
    items: [
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
        isDisabled: true
      }
    ]
  }
];
