export const dynamicFederation = async (scope, module) => {
    const container = window[scope]; // or get the container somewhere else

    return container.get(module).then((factory) => {
        const Module = factory();
        return Module.default;
    });
};

export const dynamicFederationModule = async (scope, module) => {
    const container = window[scope];

    await container.init(__webpack_share_scopes__.default);
    return container.get(module).then((factory) => {
        const Module = factory();
        return Module;
    });
};