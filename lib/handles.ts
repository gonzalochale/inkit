import { renderToStaticMarkup } from "react-dom/server";

export const handleCopyHTML = (ref: any) => {
  try {
    if (ref) {
      const htmlCode = ref.innerHTML;
      navigator.clipboard.writeText(htmlCode);
      return { success: "HTML code copied to clipboard" };
    } else {
      return { error: "Error copying HTML to clipboard" };
    }
  } catch (error) {
    return { error: "Error copying HTML to clipboard" };
  }
};

export const handleCopyJSX = (ref: any) => {
  try {
    if (ref) {
      const HtmlToReactParser = require("html-to-react").Parser;
      const htmlCode = ref.innerHTML;
      const htmlToReactParser = new HtmlToReactParser();
      const reactComponent = htmlToReactParser.parse(htmlCode);
      const jsxCode = renderToStaticMarkup(reactComponent);

      const modifiedJSX = jsxCode
        .replace(/\bclass\b/g, "className")
        .replace(/\bfor\b/g, "htmlFor")
        .replace(/\bstroke-width\b/g, "strokeWidth")
        .replace(/\bstroke-linecap\b/g, "strokeLinecap")
        .replace(/\bstroke-linejoin\b/g, "strokeLinejoin");

      navigator.clipboard.writeText(modifiedJSX);
      return { success: "JSX code copied to clipboard" };
    } else {
      return { error: "Error copying JSX to clipboard" };
    }
  } catch (error) {
    return { error: "Error copying JSX to clipboard" };
  }
};
