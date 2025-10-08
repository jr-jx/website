import * as React from "react";

import CopyButton from "./copy-button";
import Icon from "../ui/icon";

export interface MetaMap {
  title: string;
  lang: string | undefined;
  rawCode: string;
}

type BlogCodeProps = React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  > &
    MetaMap
>;

const CustomPre: React.FC<BlogCodeProps> = ({
    title,
    children,
    lang,
    rawCode,
    ...rest
  }) => {
    return (
      <pre {...rest} style={{}}>
        <div className="flex items-center justify-between px-2 border-b border-neutral-200 dark:border-white/20">
          <div className="flex items-center gap-1">
            <Icon name={lang || "txt"} />
            {title && title.length > 0 ? title : lang}</div>
          <CopyButton content={rawCode} />
        </div>
        <div className="w-full overflow-x-auto p-2">{children}</div>
      </pre>
    );
  };
  

export default CustomPre;
