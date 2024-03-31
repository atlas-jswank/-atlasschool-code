import { theme as defaultTheme } from "./theme";
import { ThemeInput, getHighlighter } from "shiki";

export const codeToHtml = async ({
  code,
  language,
  theme,
}: {
  code: string;
  language: string;
  theme?: ThemeInput & { name: string };
}) => {
  const highlighter = await getHighlighter({
    // @ts-expect-error Ignore
    themes: [theme ?? defaultTheme],
    langs: [language],
  });

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: theme?.name ?? defaultTheme.name,
  });
  return html;
};
