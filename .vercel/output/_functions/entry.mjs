import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CYrYMgcJ.mjs';
import { manifest } from './manifest_CN9hIFZi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/mentions-legales.astro.mjs');
const _page2 = () => import('./pages/zoldcontact.astro.mjs');
const _page3 = () => import('./pages/zoldindex.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.1_@types+node@22.14.0_jiti@2.4.2_lightningcss@1.29.2_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/mentions-legales.astro", _page1],
    ["src/pages/zOLDcontact.ts", _page2],
    ["src/pages/zOLDindex.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "ec8c2fcd-e2ac-4955-9d2f-4fc88a387118",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
