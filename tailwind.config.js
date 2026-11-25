export default {
    corePlugins: {
        preflight: true,
    },
    content: [
        "./app.vue",
        "./components/**/*.{html,js,vue,ts}",
        "./layouts/**/*.{html,js,vue,ts}",
        "./pages/**/*.{html,js,vue,ts}",
    ],
}