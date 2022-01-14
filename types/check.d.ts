declare const defaultOptions: {
    path: string;
    callback: (latestVersion: string, currentVersion: string) => void;
    prodOnly: boolean;
};
declare type TCheckOptions = Partial<typeof defaultOptions>;
export default function check(version: string, _options?: TCheckOptions): void;
export {};
