import { defineMdastPlugin } from "satteri";

const open = () => ({ type: "text" as const, value: "𝄆 " });
const close = () => ({ type: "text" as const, value: " 𝄇" });

/**
 * Repeat marks around a passage (port of the Hugo `repris` shortcode).
 *
 * Block:
 *   :::repris
 *   lines…
 *   :::
 *
 * Inline: :repris[text]
 */
export const repris = defineMdastPlugin({
  name: "repris",
  containerDirective(node, ctx) {
    if (node.name !== "repris") return;
    ctx.setField(node, "data", {
      hName: "div",
      hProperties: { className: ["repris"] },
    });
    const paragraphs = node.children.filter((c) => c.type === "paragraph");
    if (paragraphs.length === 0) return;
    ctx.prependChild(paragraphs[0], open());
    ctx.appendChild(paragraphs[paragraphs.length - 1], close());
  },
  textDirective(node, ctx) {
    if (node.name !== "repris") return;
    ctx.setField(node, "data", {
      hName: "span",
      hProperties: { className: ["repris"] },
    });
    ctx.prependChild(node, open());
    ctx.appendChild(node, close());
  },
});
