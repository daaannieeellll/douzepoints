import '../styles/globals.css';
import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import type { AppRouter } from '@/backend/router';
/**
 * @param {AppProps} {Component, pageProps}
 * @return {JSX.Element} The 'base component'
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/**
 * @return {String} Base url
 */
function getBaseURL(): String {
  if (process.browser) return ''; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseURL()}/api/trcp`;

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
