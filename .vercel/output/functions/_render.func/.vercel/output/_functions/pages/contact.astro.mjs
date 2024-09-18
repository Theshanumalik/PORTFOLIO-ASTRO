/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CY37bJuI.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BOmPiW_n.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | theshanumalik" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Contact</h1> <p>
Feel free to reach out to me at <a href="mailto:theshanumalik@gmail.com">Mail</a> </p> </main>` })}`;
}, "C:/Users/shanu/OneDrive/Desktop/portfolio/src/pages/contact.astro", void 0);

const $$file = "C:/Users/shanu/OneDrive/Desktop/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
