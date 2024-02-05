// vite.config.js
import { defineConfig } from "file:///C:/workspace/coachingApp/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/workspace/coachingApp/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/workspace/coachingApp/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify from "file:///C:/workspace/coachingApp/node_modules/vite-plugin-vuetify/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: { base: null, includeAbsolute: false }
      },
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith("ion-");
        }
      }
    }),
    vuetify(),
    laravel({
      input: [
        "resources/sass/app.scss",
        "resources/js/app.js"
      ],
      refresh: true
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3b3Jrc3BhY2VcXFxcY29hY2hpbmdBcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHdvcmtzcGFjZVxcXFxjb2FjaGluZ0FwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovd29ya3NwYWNlL2NvYWNoaW5nQXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG5cbiAgICAgICAgdnVlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7IGJhc2U6IG51bGwsIGluY2x1ZGVBYnNvbHV0ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnLnN0YXJ0c1dpdGgoJ2lvbi0nKSAvLyAocmV0dXJuIHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSksXG5cbiAgICAgICAgdnVldGlmeSgpLFxuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL2FwcC5qcycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG5cbiAgICAgICAgYWxpYXM6IHtcblxuICAgICAgICAgICAgdnVlOiAndnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzJyxcblxuICAgICAgICB9LFxuXG4gICAgfSxcbn0pO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsb0JBQW9CO0FBQzdSLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUVMLElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLG9CQUFvQixFQUFFLE1BQU0sTUFBTSxpQkFBaUIsTUFBTTtBQUFBLE1BQzdEO0FBQUEsTUFFQSxpQkFBaUI7QUFBQSxRQUNiLGlCQUFpQixDQUFDLFFBQVE7QUFDdEIsaUJBQU8sSUFBSSxXQUFXLE1BQU07QUFBQSxRQUNoQztBQUFBLE1BQ0o7QUFBQSxJQUdKLENBQUM7QUFBQSxJQUVELFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFFTCxPQUFPO0FBQUEsTUFFSCxLQUFLO0FBQUEsSUFFVDtBQUFBLEVBRUo7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
