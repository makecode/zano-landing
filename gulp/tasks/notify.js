import notify from 'gulp-notify';

const errorHandler = (error) => {
  notify.onError({
    title: `Error in ${error.plugin}`,
    message: error.message
  })(error);
};

export default errorHandler;
