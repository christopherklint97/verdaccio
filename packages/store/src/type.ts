import { Callback, Config, IPluginStorageFilter, RemoteUser } from '@verdaccio/types';
import { RequestOptions } from '@verdaccio/url';

// @deprecated use IGetPackageOptionsNext
export interface IGetPackageOptions {
  callback: Callback;
  name: string;
  keepUpLinkData?: boolean;
  uplinksLook: boolean;
  // @deprecated
  req: any;
}

export type IGetPackageOptionsNext = {
  name: string;
  version?: string;
  keepUpLinkData?: boolean;
  remoteUser?: RemoteUser;
  uplinksLook: boolean;
  requestOptions: RequestOptions;
};

export interface ISyncUplinks {
  uplinksLook?: boolean;
  etag?: string;
  req?: Request;
}

export type Users = {
  [key: string]: string;
};
export interface StarBody {
  _id: string;
  _rev: string;
  users: Users;
}

export type IPluginFilters = IPluginStorageFilter<Config>[];
