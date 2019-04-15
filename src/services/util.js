export const getParamsString = (params, baseUrl) => {

    const keys = Object.keys(params);
    if (!keys.length) return baseUrl;

    return keys.reduce((ac, key, index) => {
        let param = `${key}=${params[key]}`;
        if (index === keys.length-1) {return ac += param};
        return ac += `${param}&&`;
    }, `${baseUrl}/?`)
}