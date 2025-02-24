// Type declaration for remark-attr
declare module "remark-attr" {}

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkAttr from "remark-attr";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import type { Root, Element } from "hast";
import type { Node } from "unist";

// Custom plugin to handle ::: directive sections
interface DirectiveNode extends Node {
  type: "containerDirective";
  name: string;
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
  children: Array<Node>;
}

function remarkDirectiveSection() {
  return (tree: Node) => {
    visit(tree, "containerDirective", (node: DirectiveNode) => {
      const data = node.data || (node.data = {});
      const element = h(
        "section",
        { class: node.name },
        node.children.map((child) => child as unknown as Element),
      ) as Element;
      data.hName = element.tagName;
      data.hProperties = element.properties;
    });
  };
}

// Extended sanitization schema
const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    section: [...(defaultSchema.attributes?.section || []), "class"],
    div: [...(defaultSchema.attributes?.div || []), "class"],
    span: [...(defaultSchema.attributes?.span || []), "class"],
    p: [...(defaultSchema.attributes?.p || []), "class"],
    h1: [...(defaultSchema.attributes?.h1 || []), "class"],
    h2: [...(defaultSchema.attributes?.h2 || []), "class"],
    h3: [...(defaultSchema.attributes?.h3 || []), "class"],
    h4: [...(defaultSchema.attributes?.h4 || []), "class"],
    h5: [...(defaultSchema.attributes?.h5 || []), "class"],
    h6: [...(defaultSchema.attributes?.h6 || []), "class"],
  },
  tagNames: [...(defaultSchema.tagNames || []), "section"],
};

// Create the processor pipeline
const processor = unified()
  .use(remarkParse) // Parse markdown
  .use(remarkGfm) // GitHub Flavored Markdown support
  .use(remarkDirective) // Enable directives syntax
  .use(remarkDirectiveSection) // Handle ::: sections
  .use(remarkAttr) // Enable {.class-name} syntax
  .use(remarkRehype) // Convert to HTML AST
  .use(rehypeSanitize, schema) // Sanitize HTML with custom schema
  .use(rehypeStringify); // Convert to HTML string

export async function parseMarkdown(content: string): Promise<string> {
  const result = await processor.process(content);
  return result.toString();
}
