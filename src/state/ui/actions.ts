export enum ActionTypes {
  SHOW_LOADER = "UI/SHOW_LOADER",
  HIDE_LOADER = "UI/HIDE_LOADER",
  SHOW_MODAL = "UI/SHOW_MODAL",
  HIDE_MODAL = "UI/HIDE_MODAL",
}

export type ShowLoaderAction = {
  type: ActionTypes.SHOW_LOADER;
};

export type HideLoaderAction = {
  type: ActionTypes.HIDE_LOADER;
};

export type ShowModal = {
  type: ActionTypes.SHOW_MODAL;
};

export type HideModal = {
  type: ActionTypes.HIDE_MODAL;
};

export const showLoaderAction = (): ShowLoaderAction => ({
  type: ActionTypes.SHOW_LOADER,
});

export const hideLoaderAction = (): HideLoaderAction => ({
  type: ActionTypes.HIDE_LOADER,
});

export const showModalAction = (): ShowModal => ({
  type: ActionTypes.SHOW_MODAL,
});

export const hideModalAction = (): HideModal => ({
  type: ActionTypes.HIDE_MODAL,
});

export type ActionTypesUnion =
  | ShowLoaderAction
  | HideLoaderAction
  | ShowModal
  | HideModal;
