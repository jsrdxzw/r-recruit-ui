export function sample<T>(arr: Array<T>): T {
    if (!arr) return arr;
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);
    return arr[randomIndex];
}