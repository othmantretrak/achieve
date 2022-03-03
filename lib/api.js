import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const testimonialFields = `
  _id,
  fullName,
  'date': publishedAt,
  message,
  profession
`;

const faqFields = `
  _id,
  question,
  answer,
`;
const priceFields = `
_id,name,b_price,service1,service2,service3,service4,service5,service6,service7,p_price,s_price
`;

const caseFields = `
  _id,
  title,
  'slug': slug.current,
  'coverImage': mainImage,
  'date': publishedAt,
  "categories": categories[]->{_id, title,'catslug': slug.current,} ,
  body,
`;
const siteInfoFields = `
  _id,
  title,
  email,
  phone,
  address,
  facebook,
  twitter,
  instagram,

`;

const teamFields = `
  _id,
  name,
  profession,
  'coverImage': mainImage,
  email,
  twitter,
  instagram,
`;
const categoryFields = `
  _id,
  title,
  'slug': slug.current,
  description
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllTestimonials(preview) {
  const results = await getClient(preview).fetch(`*[_type == "testimonial"] {
      ${testimonialFields}
    }`);
  return results;
}
export async function getAllCases(preview) {
  const results = await getClient(preview).fetch(`*[_type == "case"] {
      ${caseFields}
    }`);
  return results;
}
export async function getAllPrice(preview) {
  const results = await getClient(preview).fetch(`*[_type == "tarieven"] {
      ${priceFields}
    }`);
  return results;
}
export async function getAllFaq(preview) {
  const results = await getClient(preview).fetch(`*[_type == "faq"] {
      ${faqFields}
    }`);
  return results;
}
export async function getAllTeams(preview) {
  const results = await getClient(preview).fetch(`*[_type == "team"] {
      ${teamFields}
    }`);
  return results;
}
export async function getAllSiteInfo(preview) {
  const results = await getClient(preview).fetch(`*[_type == "siteInfo"] {
      ${siteInfoFields}
    }`);
  return results;
}
export async function getAllCategories(preview) {
  const results = await getClient(preview).fetch(`*[_type == "category"] {
      ${categoryFields}
    }`);
  return results;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview).fetch(`*[_type == "case"] `);
  return results;
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
