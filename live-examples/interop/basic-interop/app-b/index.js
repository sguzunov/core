/* eslint-disable no-undef */
const APP_NAME = 'App B';

// Entry point. Initializes Glue42 Web. А Glue42 Web instance will be attached to the global window.
window.startApp({ appName: APP_NAME })
  .then(registerGlueMethod)
  .catch(console.error);

async function registerGlueMethod() {
  const methodDefinition = { name: 'G42Core.Basic' };

  const invocationHandler = () => {
    logger.info(`Method "${methodDefinition.name}" invoked.`);
    return {
      result: `Hello from "${APP_NAME}"!`
    };
  };

  try {
    await glue.interop.register(methodDefinition, invocationHandler);

    logger.info(`Method "${methodDefinition.name}" registered.`);
  } catch (error) {
    console.error(`Failed to register method "${methodDefinition.name}". Error: `, error);
    logger.error(error.message || `Failed to register "${methodDefinition.name}".`);
  }
}
