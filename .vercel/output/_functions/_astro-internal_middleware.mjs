import './chunks/astro-designed-error-pages_hFngJuPg.mjs';
import './chunks/astro/server_Dto5eKu5.mjs';
import { s as sequence, d as defineMiddleware } from './chunks/index_Cqhnqtva.mjs';

const html = ["<link rel=\"manifest\" href=\"/manifest.webmanifest\">","<meta name=\"mobile-web-app-capable\" content=\"yes\">","<meta name=\"theme-color\" media=\"(prefers-color-scheme: light)\" content=\"#fff\">","<meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"#000\">","<meta name=\"application-name\">","<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">","<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon-precomposed.png\">","<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#fff\">","<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">","<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">","<meta name=\"apple-mobile-web-app-title\">","<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">","<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">","<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">","<link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/favicon-48x48.png\">","<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\">","<meta name=\"msapplication-TileColor\" content=\"#fff\">","<meta name=\"msapplication-TileImage\" content=\"/mstile-144x144.png\">","<meta name=\"msapplication-config\" content=\"/browserconfig.xml\">","<link rel=\"yandex-tableau-widget\" href=\"/yandex-browser-manifest.json\">"]; const opts = {"name":null,"short_name":null,"icons":{"android":["android-chrome-192x192.png",{"name":"android-chrome-512x512.png","sizes":[{"width":512,"height":512}],"purpose":"maskable","transparent":true,"rotate":false,"offset":13}],"appleIcon":["apple-touch-icon.png","apple-touch-icon-precomposed.png","safari-pinned-tab.svg"],"appleStartup":false,"favicons":true,"windows":true,"yandex":true},"withCapo":true};

var j=1;var S=Symbol("Fragment"),D=new Set(["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),x=new Set(["script","style"]),o=/(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:-]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!)([\s\S]*?)(>))/gm,b=/[\@\.a-z0-9_\:\-]/i;function I(e){let t={};if(e){let i="none",r,n="",a,l;for(let c=0;c<e.length;c++){let d=e[c];i==="none"?b.test(d)?(r&&(t[r]=n,r=void 0,n=""),a=c,i="key"):d==="="&&r&&(i="value"):i==="key"?b.test(d)||(r=e.substring(a,c),d==="="?i="value":i="none"):d===l&&c>0&&e[c-1]!=="\\"?l&&(n=e.substring(a,c),l=void 0,i="none"):(d==='"'||d==="'")&&!l&&(a=c+1,l=d);}i==="key"&&a!=null&&a<e.length&&(r=e.substring(a,e.length)),r&&(t[r]=n);}return t}function P(e){let t=typeof e=="string"?e:e.value,i,r,n,a,l,c,d,m,s,u=[];o.lastIndex=0,r=i={type:0,children:[]};let g=0;function h(){a=t.substring(g,o.lastIndex-n[0].length),a&&r.children.push({type:2,value:a,parent:r});}for(;n=o.exec(t);){if(c=n[5]||n[8],d=n[6]||n[9],m=n[7]||n[10],x.has(r.name)&&n[2]!==r.name){l=o.lastIndex-n[0].length,r.children.length>0&&(r.children[0].value+=n[0]);continue}else if(c==="<!--"){if(l=o.lastIndex-n[0].length,x.has(r.name))continue;s={type:3,value:d,parent:r,loc:[{start:l,end:l+c.length},{start:o.lastIndex-m.length,end:o.lastIndex}]},u.push(s),s.parent.children.push(s);}else if(c==="<!")l=o.lastIndex-n[0].length,s={type:4,value:d,parent:r,loc:[{start:l,end:l+c.length},{start:o.lastIndex-m.length,end:o.lastIndex}]},u.push(s),s.parent.children.push(s);else if(n[1]!=="/")if(h(),x.has(r.name)){g=o.lastIndex,h();continue}else s={type:1,name:n[2]+"",attributes:I(n[3]),parent:r,children:[],loc:[{start:o.lastIndex-n[0].length,end:o.lastIndex}]},u.push(s),s.parent.children.push(s),n[4]&&n[4].indexOf("/")>-1||D.has(s.name)?(s.loc[1]=s.loc[0],s.isSelfClosingTag=true):r=s;else h(),n[2]+""===r.name?(s=r,r=s.parent,s.loc.push({start:o.lastIndex-n[0].length,end:o.lastIndex}),a=t.substring(s.loc[0].end,s.loc[1].start),s.children.length===0&&s.children.push({type:2,value:a,parent:r})):n[2]+""===u[u.length-1].name&&u[u.length-1].isSelfClosingTag===true&&(s=u[u.length-1],s.loc.push({start:o.lastIndex-n[0].length,end:o.lastIndex}));g=o.lastIndex;}return a=t.slice(g),r.children.push({type:2,value:a,parent:r}),i}var p=Symbol("HTMLString"),M=Symbol("AttrString"),f=Symbol("RenderFn");function E(e,t=[p]){let i={value:e};for(let r of t)Object.defineProperty(i,r,{value:true,enumerable:false,writable:false});return i}var A={"&":"&amp;","<":"&lt;",">":"&gt;"};function y(e){return e.replace(/[&<>]/g,t=>A[t]||t)}function N(e){let t="";for(let[i,r]of Object.entries(e))t+=` ${i}="${r}"`;return E(t,[p,M])}function C(e){if(e.children.length===0){let t=e;for(;t=t.parent;)if(t.name==="svg")return  true}return  false}function L(e){let{name:t,attributes:i={}}=e,r=e.children.map(a=>v(a)).join("");if(f in e){let a=e[f](i,E(r));return a&&a[p]?a.value:y(String(a))}if(t===S)return r;let n=C(e);return n||D.has(t)?`<${e.name}${N(i).value}${n?" /":""}>`:`<${e.name}${N(i).value}>${r}</${e.name}>`}function v(e){switch(e.type){case 0:return e.children.map(t=>v(t)).join("");case 1:return L(e);case 2:return `${e.value}`;case 3:return `<!--${e.value}-->`;case 4:return `<!${e.value}>`}}

/**
 * @author Nate Moore
 * @license [Apache](src/middleware/capo/LICENSE)
 * Adapted from https://github.com/rviscomi/capo.js/blob/a4d8902d300bc5207b3b588984a3b5e67bdc38b1/src/lib/rules.js
 * Further modified by Nate Moore for the `astro-capo` project.
 *
 * Original code by Rick Viscomi.
 */
function has(value) {
  return typeof value === "string";
}
function is(a, b) {
  return a === b;
}
function any(a, b) {
  return has(a) && b.includes(a.toLowerCase());
}
const ElementWeights = {
  META: 10,
  TITLE: 9,
  PRECONNECT: 8,
  ASYNC_SCRIPT: 7,
  IMPORT_STYLES: 6,
  SYNC_SCRIPT: 5,
  SYNC_STYLES: 4,
  PRELOAD: 3,
  DEFER_SCRIPT: 2,
  PREFETCH_PRERENDER: 1,
  OTHER: 0
};
const ElementDetectors = {
  META: isMeta,
  TITLE: isTitle,
  PRECONNECT: isPreconnect,
  DEFER_SCRIPT: isDeferScript,
  ASYNC_SCRIPT: isAsyncScript,
  IMPORT_STYLES: isImportStyles,
  SYNC_SCRIPT: isSyncScript,
  SYNC_STYLES: isSyncStyles,
  PRELOAD: isPreload,
  PREFETCH_PRERENDER: isPrefetchPrerender
};
const META_HTTP_EQUIV_KEYWORDS = [
  "accept-ch",
  "content-security-policy",
  "content-type",
  "default-style",
  "delegate-ch",
  "origin-trial",
  "x-dns-prefetch-control"
];
function isMeta(name, a) {
  if (name === "base")
    return true;
  if (name !== "meta")
    return false;
  return has(a.charset) || is(a.name, "viewport") || any(a["http-equiv"], META_HTTP_EQUIV_KEYWORDS);
}
function isTitle(name) {
  return name === "title";
}
function isPreconnect(name, { rel }) {
  return name === "link" && is(rel, "preconnect");
}
function isAsyncScript(name, { src, async }) {
  return name === "script" && has(src) && has(async);
}
function isImportStyles(name, a, children) {
  const importRe = /@import/;
  if (name === "style") {
    return importRe.test(children);
  }
  return false;
}
function isSyncScript(name, { src, defer, async, type = "" }) {
  if (name !== "script")
    return false;
  return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
  if (name === "style")
    return true;
  return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
  return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
  if (name !== "script")
    return false;
  return has(src) && has(defer) || has(src) && is(type, "module") && !has(async);
}
function isPrefetchPrerender(name, { rel }) {
  return name === "link" && any(rel, ["prefetch", "dns-prefetch", "prerender"]);
}
function getWeight(element) {
  for (const [id, detector] of Object.entries(ElementDetectors)) {
    const children = element.name === "style" && element.children.length > 0 ? v(element) : "";
    if (detector(element.name, element.attributes, children)) {
      return ElementWeights[id];
    }
  }
  return ElementWeights.OTHER;
}

function capo(html) {
  const { headHtml, beforeHead, afterHead } = extractHeadContent(html);
  if (!headHtml)
    return html;
  const headAst = P(headHtml);
  const headNode = headAst.children.find(
    (node) => node.type === j && node.name === "head"
  );
  if (!headNode)
    return html;
  const updatedHead = processHead(headNode);
  const renderedHead = v(updatedHead);
  return `${beforeHead}${renderedHead}${afterHead}`;
}
function extractHeadContent(html) {
  const headStart = html.indexOf("<head>");
  const headEnd = html.indexOf("</head>") + "</head>".length;
  if (headStart === -1 || headEnd === -1) {
    return { headHtml: null, beforeHead: html, afterHead: "" };
  }
  const beforeHead = html.slice(0, headStart);
  const headHtml = html.slice(headStart, headEnd);
  const afterHead = html.slice(headEnd);
  return { headHtml, beforeHead, afterHead };
}
function processHead(head) {
  const weightedChildren = head.children.map((node) => {
    if (node.type === j) {
      const weight = getWeight(node);
      return [weight, node];
    }
  }).filter(Boolean);
  const sortedChildren = weightedChildren.sort((a, b) => b[0] - a[0]).map(([_, element]) => element);
  return { ...head, children: sortedChildren };
}

const useLocaleName = (locale) => {
  if (!locale)
    return opts.name;
  const localized = opts.name_localized?.[locale];
  if (!localized)
    return opts.name;
  return typeof localized === "string" ? localized : localized.value;
};
const localizedHTML = (locale) => {
  const namePattern = /(name="(application-name|apple-mobile-web-app-title)")\scontent="[^"]*"/;
  const tags = html.map(
    (line) => line.replace(namePattern, `name="$2" content="${useLocaleName(locale)}"`)
  ).join("\n");
  return tags;
};
const withCapo = defineMiddleware(async (ctx, next) => {
  try {
    if (html.length === 0)
      throw "done";
    const res = await next();
    if (res.headers.get("X-Astro-Route-Type") !== "page") {
      return res;
    }
    const doc = await res.text();
    const headIndex = doc.indexOf("</head>");
    const htmlSet = new Set(html);
    const isInjected = [...htmlSet].some((line) => doc.includes(line));
    if (headIndex === -1 || !opts.withCapo && isInjected)
      throw "done";
    const document = `${doc.slice(0, headIndex)}
${!isInjected ? localizedHTML(ctx.currentLocale) : ""}
${doc.slice(headIndex)}`;
    return new Response(opts.withCapo ? capo(document) : document, {
      status: res.status,
      headers: res.headers
    });
  } catch (e) {
    if (e !== "done") {
      console.error("Error in withCapo middleware:", e);
    }
    return next();
  }
});
const onRequest$1 = sequence(withCapo);

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
