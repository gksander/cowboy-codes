import { visit, SKIP, EXIT } from "unist-util-visit";

export function mapImages() {
  console.log("HEEEYYYY");
  return function (tree) {
    // remove(tree, "mdxJsxFlowElement");

    visit(tree, "paragraph", (node, index, parent) => {
      if (parent && typeof index === "number" && hasImageChild(node)) {
        // parent.children.splice(index, 1, ...node.children);
        // return [SKIP, index];
      }
    });
  };
}

function hasImageChild(tree) {
  let hasImage = false;
  visit(tree, "mdxJsxFlowElement", (node) => {
    if (node.name === "__AstroImage__") {
      console.log(node.attributes[0].value);
      hasImage = true;
      return EXIT;
    }
  });

  return hasImage;
}
