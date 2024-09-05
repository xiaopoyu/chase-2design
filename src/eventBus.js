// eventBus.js
class EventBus extends EventTarget {
  constructor() {
    super();
  }
}

const eventBus = new EventBus();

export default eventBus;