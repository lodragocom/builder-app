import { builder } from "@builder.io/react";


export async function getStaticProps() {
  const links = await builder.getAll("nav-link", {
    // Add options for queries, sorting, and targeting here
  });

  return {
    props: {
      links: links || null,
    },
  };
}
