export enum AlertType {
  SUCCESS, ERROR, WARNING
}


export const messageText = (msg: string, first: boolean = true): string => {
  const i = first ? 0 : 1;
  return msg.split('|')[i];
}
export const alertError = () =>  AlertType.ERROR;

export const alertSuccess = () => AlertType.SUCCESS;

export const alertWarning = () => AlertType.WARNING;
