import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps, ...appProps }) {
    if ([`/login`, `/404`, `/401`].includes(appProps.router.pathname))
        return <Component {...pageProps} />;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}