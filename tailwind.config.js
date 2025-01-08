module.exports = {
    corePlugins: {
        preflight: true,
    },
    mode: "jit",
    content: {
        enabled: true,
        content: [
            "./*.{html,js,vue,ts}",
            "./**/*.{html,js,vue,ts}",
        ]
    },
}