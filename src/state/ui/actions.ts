export enum ActionTypes {
  SHOW_LOADER = "SHOW_LOADER",
  HIDE_LOADER = "HIDE_LOADER",
}

export type ShowLoaderAction = {
  type: ActionTypes.SHOW_LOADER;
};

export type HideLoaderAction = {
  type: ActionTypes.HIDE_LOADER;
};

export const showLoaderAction = (): ShowLoaderAction => ({
  type: ActionTypes.SHOW_LOADER,
});

export const hideLoaderAction = (): HideLoaderAction => ({
  type: ActionTypes.HIDE_LOADER,
});

export type ActionTypesUnion = ShowLoaderAction | HideLoaderAction;
