// vite.config.js
import { defineConfig } from "file:///C:/workspace/coachingApp/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/workspace/coachingApp/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/workspace/coachingApp/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify from "file:///C:/workspace/coachingApp/node_modules/vite-plugin-vuetify/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: { base: null, includeAbsolute: false },
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("vx-")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3b3Jrc3BhY2VcXFxcY29hY2hpbmdBcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHdvcmtzcGFjZVxcXFxjb2FjaGluZ0FwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovd29ya3NwYWNlL2NvYWNoaW5nQXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG5cbiAgICAgICAgdnVlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7IGJhc2U6IG51bGwsIGluY2x1ZGVBYnNvbHV0ZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgndngtJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHZ1ZXRpZnkoKSxcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICdyZXNvdXJjZXMvc2Fzcy9hcHAuc2NzcycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9qcy9hcHAuanMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuXG4gICAgICAgIGFsaWFzOiB7XG5cbiAgICAgICAgICAgIHZ1ZTogJ3Z1ZS9kaXN0L3Z1ZS5lc20tYnVuZGxlci5qcycsXG5cbiAgICAgICAgfSxcblxuICAgIH0sXG59KTtcblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLG9CQUFvQjtBQUM3UixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFFTCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0IsRUFBRSxNQUFNLE1BQU0saUJBQWlCLE1BQU07QUFBQSxRQUN6RCxpQkFBaUI7QUFBQSxVQUNiLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFBQSxRQUNsRDtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUVELFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFFTCxPQUFPO0FBQUEsTUFFSCxLQUFLO0FBQUEsSUFFVDtBQUFBLEVBRUo7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
