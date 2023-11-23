import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>Snapcart</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="Snapcart enables SMBs support customers and manage orders with an AI assistant"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Snapcart: AI powered co-pilot for shops"
      />
      <meta
        property="og:description"
        content="Snapcart is an AI-powered copilot e-commerce tool for SMBs to support customers, sell online & manage orders."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dyzm7pncn/image/upload/v1699691731/preview_image_yvgmhr.png"
      />
      <meta property="og:url" content="https://snapcart.store" />
      <meta property="og:site_name" content="Snapcart" />
      <meta
        name="facebook-domain-verification"
        content="7fdgovrx02wawwt20abifrn28em3os"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="snapcart.store" />
      <meta property="twitter:url" content="https://snapcart.store/" />
      <meta
        name="twitter:title"
        content="Snapcart: AI powered co-pilot for shops"
      />

      <meta
        name="twitter:description"
        content="Snapcart is an AI-powered copilot e-commerce tool for SMBs to support customers, sell online & manage orders."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dyzm7pncn/image/upload/v1699691731/preview_image_yvgmhr.png"
      />
      <link rel="icon" href="/Logo.svg" />
    </Head>
  );
};

export default MetaTags;
