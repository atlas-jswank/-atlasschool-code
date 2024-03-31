import { ReactNode, useEffect, useState } from "react";
import { codeToHtml } from "./shiki.ts";
import "./Code.css";
import { theme } from "./theme";
import LoadingCode from "./LoadingCode.jsx";

type CodeProps = {
  children: string;
  language: string;
  lineNumbers?: boolean;
  title?: string;
  component?: ReactNode;
};

export default function Code({
  children,
  language,
  lineNumbers,
  title,
  component,
}: CodeProps) {
  const [html, setHtml] = useState<string | undefined>();
  useEffect(() => {
    async function load() {
      const _html = await codeToHtml({
        code: children,
        language,
      });
      setHtml(_html);
    }
    load();
  }, [children, language]);

  if (!html) {
    return <LoadingCode />;
  }

  return (
    <>
      <div
        className="code-box"
        style={{
          background: theme.colors["editor.background"],
        }}
      >
        <div className={lineNumbers ? "lineNumbers" : ""}>
          {title && <h6>{title}</h6>}
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        {!!component && <div>{component}</div>}
      </div>
    </>
  );
}
