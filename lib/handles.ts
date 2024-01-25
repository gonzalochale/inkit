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
        .replace(/\bstroke-linejoin\b/g, "strokeLinejoin")
        .replace(/\bdisabled\b/g, "disabled={true}")
        .replace(/\bchecked\b/g, "checked={true}")
        .replace(/\breadonly\b/g, "readOnly={true}")
        .replace(/\bautofocus\b/g, "autoFocus={true}")
        .replace(/\bautocomplete\b/g, "autoComplete={true}")
        .replace(/\btabindex\b/g, "tabIndex={0}")
        .replace(/\bmaxlength\b/g, "maxLength={0}")
        .replace(/\bminlength\b/g, "minLength={0}")
        .replace(/\bhtmlfor\b/g, "htmlFor");

      navigator.clipboard.writeText(modifiedJSX);
      return { success: "JSX code copied to clipboard" };
    } else {
      return { error: "Error copying JSX to clipboard" };
    }
  } catch (error) {
    return { error: "Error copying JSX to clipboard" };
  }
};
