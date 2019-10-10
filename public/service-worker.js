self.addEventListener('install', () => {
    console.log('Service worker installed successfully');
});

self.addEventListener('activate', () => {
    console.log('Service worker activated successfully');
});