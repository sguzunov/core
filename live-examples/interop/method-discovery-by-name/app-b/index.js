/* eslint-disable no-undef */
const APP_NAME = 'App-B';

// Entry point. Initializes GlueWeb. GlueWeb instance will be attached to the global window.
window.startApp({ appName: APP_NAME })
  .then(() => {
    document.getElementById("registerGlueMethodBtn")
      .addEventListener('click', registerGlueMethodHandler);
  })
  .catch(console.error);

async function registerGlueMethod(methodName) {
  const methodDefinition = { name: methodName };

  const invocationHandler = () => {
    logger.info(`${methodDefinition.name} invoked`);

    return {
      result: `Hello from "${methodDefinition.name}" in application "${APP_NAME}"`
    };
  };

  try {
    await glue.interop.register(methodDefinition, invocationHandler)

    logger.info(`"${methodDefinition.name}" registered`);
  } catch (error) {
    console.error(`Failed to register "${methodDefinition.name}". Error: `, error);
    logger.error(`Failed to register "${methodDefinition.name}"`);
  }
}

function registerGlueMethodHandler() {
  const methodNameInput = document.getElementById('methodNameInput');
  registerGlueMethod(methodNameInput.value);
}
