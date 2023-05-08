import Head from 'next/head';
import React, { useEffect } from 'react';

type MetaProps = {
  description?: string;
  lang?: string;
  noindex?: boolean;
  src?: string;
  title?: string;
};

const Meta = (props: MetaProps) => {
  const getTitle = React.useCallback(() => (props.title ? `${props.title} - Kayn.ooo` : 'Kayn.ooo'), [props.title]);
  const getDesc = React.useCallback(
    () =>
      props.description
        ? props.description
        : 'A website by Kevyn Fyleyssant. A place to share my projects and random things.',
    [props.description],
  );

  useEffect(() => {
    document.querySelector('html')?.setAttribute('lang', props.lang || 'en');
  }, [props.lang, props.noindex]);

  return (
    <Head>
      <title>{getTitle()}</title>

      {props.noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#363636" />

      <meta name="description" content={getDesc()} />

      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDesc()} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kayn.ooo" />
      <meta property="og:site_name" content="Kayn.ooo" />
      <meta property="og:image" content={props.src || 'https://kayn.ooo/images/og-image.png'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:title" content={getTitle()} />
      <meta property="twitter:description" content={getDesc()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kayn_ooo" />
      <meta name="twitter:creator" content="@kayn_ooo" />
      <meta name="twitter:image" content={props.src || 'https://kayn.ooo/images/og-image.png'} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
