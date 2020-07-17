import RaygunClient from '@hunteva/raygun4reactnative';

const throwUndefinedError = () => {
  //@ts-ignore
  global.undefinedFn();
};

const throwCustomError = (msg: string) => {
  throw new Error(msg);
};

const promiseRejection = async () => {
  throw Error('Rejection');
};

const reInitialize = () => {
  RaygunClient.init({
    apiKey: 't2IwCSF44QbvhJLwDKL7Kw',
    version: 'version',
  });
};

export {throwUndefinedError, throwCustomError, promiseRejection, reInitialize};
