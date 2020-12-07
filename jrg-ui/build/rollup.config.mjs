import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import html from "rollup-plugin-html";
import commonjs from '@rollup/plugin-commonjs';
import rollupString from 'rollup-plugin-string';
const stringPlugin = rollupString.string({
    include: '**/*.(css|svg)',
});

export default {
    input: "./index.mjs",
    output: [
        {
            file: "./target/jrg-ui.esm.mjs",
            format: "esm",
            sourcemap: "inline"
        },
        {
            file: "./target/jrg-ui.min.esm.mjs",
            format: "esm",
            sourcemap: false,
            plugins:[
                terser()
            ]
        }
    ],
    plugins: [
        html({
            include:"**/*.html"
        }),
        commonjs(),
        nodeResolve(),
        stringPlugin
    ]
}