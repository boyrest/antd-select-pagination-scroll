export class EventBus {
  events: any = {};
  constructor() {}

  /**
   * Adds listener to EventBus
   * @param {string} type The name of the event to listen for
   * @param {function} callback Callback to call when event was triggered
   */
  on(type: string, callback: any) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push({ callback }); // Finally push new event to events array
  }

  /**
   * Removes listener from EventBus
   * @param {string} type The name of the event to remove
   * @param {function} callback Callback of the event to remove
   * @param {object} scope The scope of the to be removed event
   */
  off(type: string, callback: any) {
    // keep all elements that aren't equal to the passed event
    const filterFn = (event: any) => event.callback !== callback;
    this.events[type] = this.events[type].filter(filterFn);
  }

  /**
   * Emits an event on the EventBus
   * @param {string} type Type of event to emit
   * @param emitData
   */
  emit(type: string, emitData: any) {
    if (typeof this.events[type] === 'undefined') {
      // Check if any event of the passed type exists
      return; // If not, quit method
    }

    const events = this.events[type].slice(); // Little hack to clone array

    for (const event of events) {
      // Iterate all events
      if (event && event.callback) {
        // Check if callback of event is set
        event.callback({ type }, emitData); // Call callback
      }
    }
  }
}

export default new EventBus();
