import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [ 
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'favicon.ico',
        'manifest.webmanifest',
        
      ],
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'A simple PWA created with Vite, React, and Zustand',
        start_url: '/',
        display: "standalone",
        background_color: '#ffffff',
        theme_color: '#ffffff',

        icons: [
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: 'any'
          },
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "icons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/favicon.ico",
            sizes: "48x48",
            type: "image/png",
          }
        ],
        screenshots: [
          {
            src: "screenshots/desktop-screenshot.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/mobile-screenshot.png",
            sizes: "375x667",
            type: "image/png"
          }
        ]
      },
    }),
  ],
});

