import { client } from '../../lib/microcms';

export async function getStaticPaths() {
  const data = await client.get({ endpoint: 'blog' });
  return data.contents.map((content) => ({
    params: { slug: content.id },
    props: { post: content },
  }));
}

export async function get({ props }) {
  return {
    body: JSON.stringify(props.post),
  };
}
