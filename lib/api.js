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
  "categories": categories[]->{_id, title,'catslug': slug.current,} ,
`;
const seviceFields = `
  _id,
  title,
  'coverImage': mainImage,
  description,
`;
const priceFields = `
_id,name,b_price,service1,service2,service3,service4,service5,service6,service7,
service8,
service9,
service10,
service11,
service12,
service13,
service14,
service15,
service16,
service17,
service18,
service19,
service20,
p_price,s_price,periodp,periodb,periods,p_name,s_name,b_name
`;

const caseFields = `
  _id,
  title,
  youtube,
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
  blackLogo,
whiteLogo,
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
const faqCategoryFields = `
  _id,
  title,
  'slug': slug.current,
  description
`;
const companyFields = `
_id,imagesGallery
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
export async function getAllCompanies(preview) {
  const results = await getClient(preview).fetch(`*[_type == "companies"] {
      ${companyFields}
    }`);
  return results;
}
export async function getAllPrice(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "tarieven"] | order(order asc){
      ${priceFields}
    }`);
  return results;
}
export async function getAllServices(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "service"] | order(order asc){
      ${seviceFields}
    }`);
  return results;
}
export async function getAllFaq(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "faq"] | order(order asc){
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
  const results = await getClient(preview)
    .fetch(`*[_type == "category"] | order(order asc) {
      ${categoryFields}
    }`);
  return results;
}
export async function getAllFaqCategories(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "faqcategory"] | order(order asc) {
      ${faqCategoryFields}
    }`);
  return results;
}
export async function getAllPrivacy(preview) {
  const results = await getClient(preview).fetch(`*[_type == "privacy"]`);
  return results;
}
export async function getAllTerms(preview) {
  const results = await getClient(preview).fetch(`*[_type == "terms"]`);
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
export async function getOneCase(slug) {
  const results = await getClient().fetch(
    `*[_type == "case" && slug.current == $slug] {
    ${caseFields}
  }`,
    { slug }
  );
  return results;
}
