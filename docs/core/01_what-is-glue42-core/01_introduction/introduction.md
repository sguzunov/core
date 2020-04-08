## Overview

**Glue42 Core** is a toolkit that enables integration of same-origin (protocol, host and port) web applications. This means that multiple applications can share data between each other, expose functionality, open and manipulate windows. **Glue42 Core** is mainly targeted for use with Progressive Web Applications. By combining PWAs with **Glue42 Core** you will not only leverage the advantages of PWAs (native-like feel, working offline, enhanced performance, etc.), but you will also be able to incorporate an interoperability layer in your web application ecosystem. 

In industries and businesses that depend on tens (even hundreds) of different applications for processing information (like financial market data, client data, etc.) interoperability between applications has become an urgent necessity. Enabling applications to expose functionality, share data between each other and control other windows allows you to create meaningful window arrangements and define coherent workflows for the user. **Glue42 Core** helps you to solve user-oriented problems like errors from copy/pasting between apps, wasting time in finding and launching the right app, constant switching between many already running apps or utilizing screen real estate, which increases dramatically task completion times and user satisfaction. On a larger scale, enhancing employee productivity by eliminating these issues means reduced costs and higher customer satisfaction.

## High Level Structure

A **Glue42 Core** project consists of an [**Environment**](../core-concepts/environment/index.html) and one or more [**Clients**](../core-concepts/glue42-client/index.html), all of which share the same origin - protocol, host and port.

### Environment

This is the engine behind **Glue42 Core** - a collection of resources, which once hosted the browser will execute on a separate thread, allowing the [**Environment**](../core-concepts/environment/index.html) to be accessible by all applications on the same host and port, even if they run in different windows. Once connected, the inter-app communication is conducted via the [**Environment**](../core-concepts/environment/index.html). To achieve that we utilized the [**Shared Web Worker Interface**](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker), which is widely adopted by all major browsers. This means no additional software is required to run your **Glue42 Core** project.

### Glue42 Client

A [**Glue42 Client**](../core-concepts/glue42-client/index.html) is any application which connects to the [**Environment**](../core-concepts/environment/index.html), we also called them **glue-enabled apps**. This is done by our `@glue42/web` JavaScript library. The Glue42 Web library also exposes an [API](../../../reference/core/latest/glue42%20web/index.html) for utilizing the **Glue42 Core** functionalities.

### Glue42 Core CLI

The [**Glue42 Core CLI**](../core-concepts/cli/index.html) is a development tool, which makes extending your existing project or starting a new one with **Glue42 Core** a breeze. The CLI can:
- set up your development environment
- host your applications under the same host and port - by either serving them from the file system or proxying to a live server listening on `localhost`
- bundle the **Glue42 Core** Environment in a package ready for deployment

## Requirements

The only requirement for the users of your **Glue42 Core** project is a modern browser. That's it, no additional software is required.

Developing a **Glue42 Core** project requires:
- installed `Node.js` greater than version 10.14.X and `npm`
- general JavaScript knowledge
- general web development knowledge

If all of this sounds awesome to you, why don't you check out our [**Quick Start**](../../getting-started/quick-start/index.html) page or the [**Capabilities**](../capabilities/index.html) page for more information on the **Glue42 Core** functionality.
