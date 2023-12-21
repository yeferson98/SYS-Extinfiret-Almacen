export interface IBaseResponse {
    message?: string;
    isSuccessful?: boolean;
    result?: number;
    status?: number;
    errors?: string[];
}

export interface IPagedResponse<T> extends IBaseResponse {
    total?: number;
    data?: T[];
}

export interface IPagedRequestDto {
    page?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: number;
    userName?:string;
}

export interface IResponse<T> extends IBaseResponse {
    data?: T;
}
export interface IExecCommandSqlDto extends IResponse<any> {
    data: any[];
    columns: any[];
}

export interface IDropdownListItemDto {
    id?: number
    code?: string;
    value?: number;
    label?: string;
    isDefault?: boolean;
    reasonId?: number;
    isCorrelative?: boolean
}
export interface ISearchListItemDto {
    id?: number;
    code?: string;
    value?: number;
    name?: string;
    isDefault?: boolean;
}
export interface ResponseController<T> {
    body?: T;
    messageAlert?: MessageDetail;
    messageAlerts?: MessageDetail[];
    error?: boolean;
    event?: boolean;
    help?: any;
}
export interface MessageDetail {
    key?: string;
    type?: string;
    alert?: string,
    severity?: string,
    summary?: string
    detail?: any
}
