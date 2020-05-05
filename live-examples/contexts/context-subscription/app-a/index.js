/* eslint-disable no-undef */
const APP_NAME = 'App A';

// Entry point. Initializes Glue42 Web. A Glue42 Web instance will be attached to the global window.
window.startApp({ appName: APP_NAME })
  .then(() => {
    document.getElementById('toggleContextSubscribeBtn')
      .addEventListener('click', toggleContextSubscribeHandler, false);
  })
  .catch(console.error);

let unsubscribeFn;

function toggleContextSubscribeHandler() {
  if (typeof unsubscribeFn === 'function') {
    // Currently subscribed for context updates.
    unsubscribeFn();
    unsubscribeFn = null;

    logger.info(`Unsubscribed from context updates.`);
    changeToggleButtonText('Subscribe');
  } else {
    subscribeForContextUpdates('G42Core');

    changeToggleButtonText('Unsubscribe');
  }
}

async function subscribeForContextUpdates(ctxName) {
  const contextUpdatedHandler = (ctxData) => {
    const data = Object.keys(ctxData).map((key) => ctxData[key]).join(', ');
    logger.info(`Context "${ctxName}" updated to: "${data}".`);
  }

  try {
    unsubscribeFn = await glue.contexts.subscribe(ctxName, contextUpdatedHandler);

    logger.info(`Subscribed to context "${ctxName}".`);
  } catch (error) {
    logger.error(error.message || `Failed to subscribe to context "${ctxName}".`);
  }
}

function changeToggleButtonText(text) {
  const btn = document.getElementById("toggleContextSubscribeBtn");
  btn.textContent = text;
}
