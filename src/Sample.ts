export const dynamicMf = async(s,m) => {
    const container = window[s]

    //@ts-ignore
    await container.init(__webpack_share_scopes__.default);
    //@ts-ignore
    return container.get(m).then((factory) => {
        const Module = factory();
        return Module;
    });
}