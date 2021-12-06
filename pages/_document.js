import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <script
                    data-webpack="restaurant"
                    src="http://localhost:3002/remoteEntry.js"
                />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
