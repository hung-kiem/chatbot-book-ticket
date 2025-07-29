import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ChatBot - Book Ticket</title>
        <meta
          name="description"
          content="A ChatGPT-like interface for booking tickets"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
