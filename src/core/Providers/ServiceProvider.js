class ServiceProvider {
    constructor(app) {
        this.app = app;
    }

    register() {
        // To be overwritten
    }

    boot() {
        // To be overwritten
    }
}

export default ServiceProvider;
