import React from "react";
import Head from "@docusaurus/Head";

export default function JsonLd({ data }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
