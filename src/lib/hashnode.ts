const HASHNODE_API_URL = "https://gql.hashnode.com/";

export type PostNode = {
  title: string;
  url: string;
  content: {
    text: string;
  };
  publishedAt: string;
  views: number;
  tags: {
    id: string;
    name: string;
  }[];
};
export type Post = {
  node: PostNode;
};

export async function getPosts(): Promise<Post[]> {
  const query = `
  query Publication{
  publication(host: "theshanumalik.hashnode.dev") {
    id
    title
  	posts(first: 5) {
      edges {
        node {
          title
          url
          content {
            text
          }
          slug
          publishedAt
          views
          tags {
            id
            name
          }
        }
      }
    }
  }
}
`;

  const response = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: HASHNODE_API_TOKEN,
    },
    body: JSON.stringify({
      operationName: "Publication",
      query,
    }),
  });

  const json = await response.json();

  return json.data.publication.posts.edges as Post[];
}
