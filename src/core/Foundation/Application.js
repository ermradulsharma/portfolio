import AppServiceProvider from '@/providers/AppServiceProvider';

/**
 * The Core Application Container
 * Responsible for registering and booting all framework service providers.
 */
class Application {
    constructor() {
        this.serviceProviders = [];
        this.hasBooted = false;
        this.providers = [AppServiceProvider];
    }

    /**
     * Orchestrates the full Boot Cycle of the application.
     */
    async bootstrap() {
        if (this.hasBooted) return;
        this.serviceProviders = this.providers.map(Provider => new Provider(this));
        for (const provider of this.serviceProviders) {
            await provider.register();
        }
        for (const provider of this.serviceProviders) {
            await provider.boot();
        }
        this.hasBooted = true;
    }
}
const app = new Application();
export default app;
