export class Util{
    static trimString(string: string): string{
        return `${string.substr(0, 20)}...`;
    }
}