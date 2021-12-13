const {withFederatedSidecar} = require("@module-federation/nextjs-mf");
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
    webpack5: true,
    webpack(config, options) {
        const {webpack, isServer} = options;
        config.experiments = {topLevelAwait: true};

        config.module.rules.push({
            test: /_app.tsx/,
            loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
        });
        if (isServer) {
            console.log(isServer)
            Object.assign(config.resolve.alias, {
                Restaurant: false,
                Navigation: false,
            });
        } else {
            console.log(isServer)
            config.output.publicPath = "auto";
            config.plugins.push(
                new webpack.container.ModuleFederationPlugin({
                    remoteType: "var",
                    remotes: {
                        Restaurant: "Restaurant",
                        Navigation: "Navigation"
                    },
                    shared: {
                        ...deps,
                        "@module-federation/nextjs-mf/lib/noop": {
                            eager: false,
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