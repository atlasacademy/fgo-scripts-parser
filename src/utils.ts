export enum Region {
    JP = "JP",
    NA = "NA",
    CN = "CN",
    KR = "KR",
    TW = "TW",
}

export const AssetHost = "https://static.atlasacademy.io";

export function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Return a list of the words in the string, using sep as the delimiter string.
 * If maxsplit is given, at most maxsplit splits are done (thus, the list
 * will have at most maxsplit+1 elements). If maxsplit is not specified or -1,
 * then there is no limit on the number of splits (all possible splits are made).
 * https://docs.python.org/3/library/stdtypes.html#str.split
 */
export const splitString = (
    inputString: string,
    sep: string,
    maxsplit?: number
) => {
    if (maxsplit === undefined || maxsplit < 0) {
        return inputString.split(sep);
    } else if (maxsplit === 0) {
        return [inputString];
    } else {
        const splitted = inputString.split(sep);
        if (maxsplit + 1 >= splitted.length) {
            return splitted;
        }
        return splitted
            .slice(0, maxsplit)
            .concat(splitted.slice(maxsplit).join(sep));
    }
};
