//store , next, action

export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      //log actions
      console.log("[LOG]:" +action.type+ " " + new Date().toString);
      // call the next middleware in the pipeline
      next(action);
      //log the modified state of app
      console.log(store.getState());
    };
  };
};
