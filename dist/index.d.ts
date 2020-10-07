import { ResponseType, AxiosResponse } from "axios";
import React, { MutableRefObject, Component, ReactNode } from "react";
type QueryType = string | number | boolean;
type Queries = {
    [key: string]: QueryType | QueryType[];
};
type Headers = {
    [key: string]: string;
};
type DataTypeValues = string | number | boolean | null;
type DataType = {
    [key: string]: DataTypeValues | MutableRefObject<HTMLElement | null> | DataType;
};
type Data = DataType | (() => DataType) | string;
interface FxApiRequest {
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url: string;
    cacheMaxAge?: number;
    throttle?: boolean;
    delay?: number;
    responseType?: ResponseType;
    query?: Queries;
    headers?: Headers;
    data?: Data;
}
type DoneDelegate<T> = (res: T | null, error: Error | null, resp?: AxiosResponse | null) => void;
type SucceedDelegate<T> = (res: T, resp: AxiosResponse) => void;
type ErrorDelegate = (error: Error) => void;
interface FxButtonProps<T> {
    children?: ReactNode;
    className?: string;
    label?: string;
    api: FxApiRequest;
    done?: DoneDelegate<T>;
    success?: SucceedDelegate<T>;
    error?: ErrorDelegate;
}
interface FxButtonStates {
    busy: boolean;
}
export class FxButton<T = any> extends Component<FxButtonProps<T>, FxButtonStates> {
    constructor(props: FxButtonProps<T>);
    handleClick(): void;
    render(): JSX.Element;
}
type Renderer<T> = (data: T) => React.ReactNode;
interface FxGuardProps<T> {
    api: FxApiRequest;
    render: Renderer<T>;
    done?: ReleaseDelegate;
}
type ReleaseDelegate = (succeed?: boolean) => void;
interface FxGuardStates {
    refreshId: number;
    reloadId: number;
    busy: boolean;
}
export class FxGuard<T = any> extends Component<FxGuardProps<T>, FxGuardStates> {
    constructor(props: FxGuardProps<T>);
    reload(silent?: boolean): void;
    releaseBusy(succeed: boolean): void;
    render(): JSX.Element;
}

//# sourceMappingURL=index.d.ts.map
