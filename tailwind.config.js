export default {
    corePlugins: {
        preflight: true,
    },
    mode: "jit",
    content: {
        enabled: true,
        content: [
            "./*.{html,js,vue,ts}",
            "./components/*.{html,js,vue,ts}",
            "./pages/*.{html,js,vue,ts}",
        ]
    },
}