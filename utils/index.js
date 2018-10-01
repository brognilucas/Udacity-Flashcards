export function idGenerator() {
    return Math.floor((1 + Math.random()) * Date.now())
        .toString(16)
        .substring(1)
}