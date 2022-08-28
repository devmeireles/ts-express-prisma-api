module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@src': './src',
                '@test': './test',
                '@config': './src/config',
                '@entities': './src/entities',
                '@repositories': './src/repositories',
                '@controllers': './src/controllers',
                '@utils': './src/utils',
                '@interfaces': './src/interfaces',
                '@middlewares': './src/middlewares'
            }
        }],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}