const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;

// module.exports = withFederatedSidecar({
//     shared: {
//         react: {
//             // Notice shared are NOT eager here.
//             requiredVersion: false,
//             singleton: true,
//         },
//     },
// })
module.exports = ({
    future :{
        webpack5: true
    },
    webpack(config, options) {
        const { webpack, isServer } = options;
        config.experiments = { topLevelAwait: true };

        config.module.rules.push({
            test: /_app.js/,
            loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
        });
        if (isServer) {
            Object.assign(config.resolve.alias, {
                Restaurant: false,
            });
        } else {
            config.output.publicPath = "auto";
            config.plugins.push(
                new webpack.container.ModuleFederationPlugin({
                    remoteType: "var",
                    remotes: {
                        Restaurant:"Restaurant",
                    },
                    shared: {
                        ...deps,
                        "@module-federation/nextjs-mf/lib/noop": {
                            eager: false,
                        },
                        "create-react-class":{
                            eager:true
                        },
                        react: {
                            singleton: true,
                            eager: true,
                            requiredVersion: false,
                        },
                        "react-dom": {
                            singleton: true,
                            eager: true,
                            requiredVersion: false,
                        },
                    },
                })
            );
        }
        return config;
    },
});