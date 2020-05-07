/* eslint-disable no-undef */
const APP_NAME = 'App A';

// Entry point. Initializes Glue42 Web. А Glue42 Web instance will be attached to the global window.
window.startApp({ appName: APP_NAME })
  .then(() => {
    document.getElementById("discoverServersBtn")
      .addEventListener('click', discoverServersHandler);
  })
  .catch(console.error);

function discoverServersHandler() {
  const methodNameInput = document.getElementById('methodNameInput');
  discoverServers(methodNameInput.value);
}

async function discoverServers(methodName) {
  const filter = { name: methodName };
  const servers = glue.interop.servers(filter);

  if (servers.length === 0) {
    logger.info(`Method "${methodName}" has not been registered by any application.`);
  } else {
    servers.forEach(({ application }) => {
      logger.info(`Method "${methodName}" registered by "${application}".`);
    });
  }
}
