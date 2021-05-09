import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Cakes & More By Jazmyn",
  keywords: "cakes small chops wedding traditional marriage eket akwa ibom",
  description: "Get the best cake services in Akwa Ibom",
};

export default Meta;
