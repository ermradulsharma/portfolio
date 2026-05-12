import app from './core/Foundation/Application';

/**
 * Next.js Global Server Startup (Convention Hook)
 * Fired ONCE globally whenever the server runtime instantiates.
 */
export async function register() {
    // Prevent interference with edge runtime if heavy modules are attached, 
    // running it safely inside standard nodejs bootstrap env.
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await app.bootstrap();
    }
}
