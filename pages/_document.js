import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head />
                <body>
                <script
                    src="http://localhost:3001/remoteEntry.js"
                />
                <script
                    src="http://localhost:3003/remoteEntry.js"
                />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
