type ScrollCallback = (scrollY: number) => void;

class ScrollManager {
  private callbacks: Set<ScrollCallback> = new Set();
  private throttledHandler: (() => void) | null = null;
  private isListening = false;

  private throttle<T extends (...args: never[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null;
    let lastExecTime = 0;

    return (...args: Parameters<T>) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
          timeoutId = null;
        }, delay - (currentTime - lastExecTime));
      }
    };
  }

  private handleScroll = () => {
    const scrollY = window.scrollY;
    this.callbacks.forEach((callback) => callback(scrollY));
  };

  subscribe(callback: ScrollCallback): () => void {
    this.callbacks.add(callback);

    if (!this.isListening) {
      this.throttledHandler = this.throttle(this.handleScroll, 16); // ~60fps
      window.addEventListener('scroll', this.throttledHandler, { passive: true });
      this.isListening = true;
    }

    // Return unsubscribe function
    return () => {
      this.callbacks.delete(callback);

      if (this.callbacks.size === 0 && this.isListening) {
        if (this.throttledHandler) {
          window.removeEventListener('scroll', this.throttledHandler);
        }
        this.isListening = false;
        this.throttledHandler = null;
      }
    };
  }

  getScrollY(): number {
    return window.scrollY;
  }
}

export const scrollManager = new ScrollManager();