import("node-fetch").then(async ({ default: fetch }) => {
  const data = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation createArticle {
          createArticle(data: {title: "GraphQL JS!", content: "<p>Hi :)</p>"}) {
            data {
              id
              attributes {
                title
                content
              }
            }
          }
        }`,
    }),
  });
  const text = await data.text();
  console.log(text);
});
