import Head from "next/head";

const MetaTags = ({ title, keywords, desc, image, url }) => {
  let img = image
    ? image
    : "https://res.cloudinary.com/tretrak/image/upload/v1654093091/achieve/achieve-scennshot_nvqi3n.jpg";
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{`Achieve – ${title}`}</title>
      <meta name="title" content={`Achieve – ${title}`} />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`Achieve – ${title}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" itemProp="image" content={img} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`Achieve – ${title}`} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
};
export default MetaTags;
