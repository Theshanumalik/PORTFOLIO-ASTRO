/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML, e as createAstro } from '../chunks/astro/server_CY37bJuI.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_BOmPiW_n.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CHj5dakx.mjs';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from '../chunks/astro/assets-service_FruFWqpf.mjs';
import * as devalue from 'devalue';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
export { renderers } from '../renderers.mjs';

const ProfileImage = new Proxy({"src":"/_astro/shanu-malik.vdggkBYa.jpg","width":3480,"height":3480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/shanu/OneDrive/Desktop/portfolio/public/images/shanu-malik.jpg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const SocialLinks = [
    {
      name: "GitHub",
      url: "http://www.github.com/theshanumalik",
      icon: "mdi:github"
    },
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/theshanumalik",
      icon: "mdi:linkedin"
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/theshanumalik",
      icon: "mdi:instagram"
    },
    {
      name: "Twitter",
      url: "http://www.twitter.com/theshanumalik",
      icon: "mdi:twitter"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-w-2xl border border-gray-700 mx-auto p-4 rounded-xl my-10"> <div class="flex items-center gap-3 max-sm:space-y-2 max-sm:block"> ${renderComponent($$result, "Image", $$Image, { "src": ProfileImage, "width": 70, "height": 70, "alt": "Image of shanu malik", "quality": 90, "class": "rounded-full object-cover" })} <div class="flex-1"> <h1 class="text-2xl font-semibold text-white">Shanu Malik</h1> <p class="text-sm">Full Stack Developer ${"("}MERN${")"}</p> </div> <ul class="flex gap-2"> ${SocialLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 24 })} </a> </li>`)} </ul> </div> </header>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/Header.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="my-8 mx-auto max-w-2xl"> <div> <h2 class="my-3 uppercase max-w-fit border-b pb-2 pr-2">ABOUT</h2> <p class="my-3">
Hello! I${"'"}m a Full Stack Developer from Jaipur, India, specializing in
      building robust, scalable web applications. With a passion for crafting
      seamless user experiences, I bring expertise in front-end and back-end
      development to deliver high-quality, performance-driven solutions.
</p> <div class="my-2 flex items-center gap-2 max-[303px]:flex-col"> <a href="/assets/shanu-malik-resume.pdf" download class="btn btn-primary uppercase max-[303px]:w-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-collapse-down", "size": 18 })} Resume
</a> <a href="mailto:theshanumalik.dev@gmail.com" class="btn btn-outline uppercase ml-2 max-[303px]:w-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "size": 20 })} Contact Me
</a> </div> </div> </section>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/About.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/rate-my-school.json": () => import('../chunks/rate-my-school_BNNvPUX7.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects":{"type":"data","entries":{"rate-my-school":"/src/content/projects/rate-my-school.json"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border border-gray-700 p-3 rounded-xl backdrop-blur-sm shadow bg-gradient-to-tr to-zinc-700 from-slate-800 bg-opacity-65 hover:bg-gradient-to-tl transition-all duration-300 cursor-pointer space-y-2"${addAttribute(id, "data-model-trigger")}> <div class="relative after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:bg-opacity-30"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-48 object-cover rounded-lg", "src": project.data.image[0].src, "alt": project.data.title, "quality": 40, "format": "webp" })} </div> <h3 class="text-white"> ${project.data.title} </h3> <p class="text-ellipsis line-clamp-2 text-sm"> ${project.data.description} </p> </div> <dialog${addAttribute(id, "data-model")} class="modal"> <div class="modal-box max-w-xl p-3"> <div class="carousel w-full"> ${project.data.image.map((image, index) => renderTemplate`<div${addAttribute(`slide-${index}`, "id")} class="carousel-item relative w-full"> ${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "quality": 50, "format": "webp", "class": "w-full" })} <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"> <a${addAttribute(
    index === 0 ? `#slide-${project.data.image.length - 1}` : `#slide-${index - 1}`,
    "href"
  )} class="btn btn-circle"> ${"\u276E"} </a> <a${addAttribute(
    index === project.data.image.length - 1 ? `#slide-0` : `#slide-${index + 1}`,
    "href"
  )} class="btn btn-circle"> ${"\u276F"} </a> </div> </div>`)} </div> <div class="collapse bg-base-200 collapse-arrow bg-transparent"> <input type="checkbox"> <div class="collapse-title font-semibold">${project.data.title}</div> <div class="collapse-content"> <p>${project.data.description}</p> </div> </div> ${project.data.features && renderTemplate`<div class="collapse bg-base-200 collapse-arrow bg-transparent"> <input type="checkbox"> <div class="collapse-title font-semibold">Features</div> <div class="collapse-content"> <ul class="list-disc ml-3"> ${project.data.features?.map((item) => renderTemplate`<li class="text-sm">${item}</li>`)} </ul> </div> </div>`} <div class="px-3 space-y-3"> <div class="flex flex-wrap gap-3"> ${project.data.technologies.map((tech) => renderTemplate`<span class="badge badge-outline badge-md px-4 py-3">${tech}</span>`)} </div> <h4>Links</h4> <div class="flex gap-3"> ${project.data.links.website && renderTemplate`<a${addAttribute(project.data.links.website, "href")} class="btn btn-outline btn-sm rounded-full" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:web" })}
Visit
</a>`} ${project.data.links.github && renderTemplate`<a${addAttribute(project.data.links.github, "href")} class="btn btn-outline btn-sm rounded-full" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github" })}
Github
</a>`} ${project.data.links.article && renderTemplate`<a${addAttribute(project.data.links.article, "href")} class="btn btn-outline btn-sm rounded-full" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:book-open" })}
Article
</a>`} ${project.data.links.demo && renderTemplate`<a${addAttribute(project.data.links.demo, "href")} class="btn btn-outline btn-sm rounded-full" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play" })}
Demo
</a>`} </div> <hr class="border-gray-700"> <div class="flex flex-wrap gap-3"> ${project.data.tags.map((tag) => renderTemplate`<span class="badge badge-sm badge-outline rounded-md">${tag}</span>`)} </div> </div> </div> <form method="dialog" class="modal-backdrop"> <button>close</button> </form> </dialog>`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/ProjectCard.astro", void 0);

const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section title="projects" class="max-w-2xl mx-auto my-9"> <h2 class="my-3 uppercase max-w-fit border-b pb-2 pr-2">Projects</h2> <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 my-6"> ${projects.map((project, id) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "id": `project-${id}` })}`)} </div> </section> `;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/Project.astro", void 0);

const HASHNODE_API_URL = "https://gql.hashnode.com/";
async function getPosts() {
  const query = `
  query Publication{
  publication(host: "theshanumalik.hashnode.dev") {
    id
    title
  	posts(first: 5) {
      edges {
        node {
          title
          url
          content {
            text
          }
          slug
          publishedAt
          views
          tags {
            id
            name
          }
        }
      }
    }
  }
}
`;
  const response = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // Authorization: HASHNODE_API_TOKEN,
    },
    body: JSON.stringify({
      operationName: "Publication",
      query
    })
  });
  const json = await response.json();
  return json.data.publication.posts.edges;
}

const PostCard = ({
  title,
  url,
  content,
  tags,
  publishedAt
}) => {
  console.log(url);
  return /* @__PURE__ */ jsxs("article", { className: "", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold link-hover", children: /* @__PURE__ */ jsx("a", { href: url, target: "_blank", children: title }) }),
    /* @__PURE__ */ jsx("span", { className: "text-xs font-normal text-gray-600", children: new Date(publishedAt).toDateString() }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-500 line-clamp-3", children: content.text }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2 justify-normal items-center", children: tags.slice(0, 6).map((tag) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "text-xs text-gray-500 border border-gray-500 px-2 py-1 rounded-full",
        children: tag.name
      },
      tag.id
    )) })
  ] });
};

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPosts().then((posts2) => {
      setPosts(posts2);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto my-3", children: [
    /* @__PURE__ */ jsx("h2", { className: "uppercase max-w-fit border-b pb-2 pr-2 my-3", children: "latest Articles" }),
    loading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-32", children: /* @__PURE__ */ jsx("span", { className: "loading loading-dots loading-lg" }) }) : posts.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: posts.map((post) => /* @__PURE__ */ jsx(PostCard, { ...post.node }, post.node.url)) }),
    /* @__PURE__ */ jsx("hr", { className: "mt-6 border-gray-700" }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://theshanumalik.hashnode.dev",
        className: "btn btn-outline rounded-full w-full my-4 uppercase",
        children: [
          "See all posts ",
          /* @__PURE__ */ jsx(FaAngleRight, {})
        ]
      }
    )
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "theshanumalik | Welcome" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="my-4"> ', " ", " ", " ", ' </main> <link rel="stylesheet" href="https://fomofy.vercel.app/style/pop-up.css"> <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer><\/script> <script src="https://fomofy.vercel.app/api/script/?project-id=66e81cae0448b9c87622f13d" defer><\/script> '])), maybeRenderHead(), renderComponent($$result2, "Header", $$Header, {}), renderComponent($$result2, "About", $$About, {}), renderComponent($$result2, "Project", $$Project, {}), renderComponent($$result2, "LatestPosts", LatestPosts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/shanu/OneDrive/Desktop/portfolio/src/components/latest-posts", "client:component-export": "default" })) })}`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/shanu/OneDrive/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
