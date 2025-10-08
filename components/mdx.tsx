import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeShikiFromHighlighter, { 
  type RehypeShikiCoreOptions, 
} from "@shikijs/rehype/core"; 
import shikiHighlighter from "../lib/shiki"; 
import React from 'react'
import CustomPre from './mdx/custom-pre'

interface MetaValue { 
  name: string; 
  regex: RegExp; 
} 

export interface MetaMap { 
  title: string; 
  displayLineNumbers: boolean | undefined; 
  allowCopy: boolean | undefined; 
  lang: string | undefined; 
  rawCode: string;
} 

const metaValues: MetaValue[] = [ 
  { 
    name: "title", 
    regex: /title="(?<value>[^"]*)"/, 
  }, 
  { 
    name: "lang", 
    regex: /lang="(?<value>[^"]*)"/, 
  }, 
  { 
    name: "displayLineNumbers", 
    regex: /displayLineNumbers="(?<value>true|false)"/, 
  }, 
  { 
    name: "allowCopy", 
    regex: /allowCopy="(?<value>true|false)"/, 
  }, 
]; 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomLink(props: any) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}


function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Heading = ({ children }: any) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => {
    return <CustomPre {...props} />
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{ 
        mdxOptions: { 
          format: "mdx", 
          rehypePlugins: [ 
            [ 
              rehypeShikiFromHighlighter, 
              await shikiHighlighter, 
              { 
                themes: { 
                  dark: "github-dark",
                  light: "github-light",
                }, 
                parseMetaString(metaString) { 
                  const map: MetaMap = {
                    title: "",
                    displayLineNumbers: undefined,
                    allowCopy: undefined,
                    lang: "txt",
                    rawCode: '',
                  }; 
                  for (const value of metaValues) { 
                    const result = value.regex.exec(metaString); 
                    if (result && value.name === "title") { 
                      map.title = result?.groups?.value || ""; 
                    } 
                    if (result && value.name === "displayLineNumbers") { 
                      map.displayLineNumbers = result.groups?.value === "true"; 
                    } 
                    if (result && value.name === "lang") { 
                      map.lang = result?.groups?.value || "txt"; 
                    } 
                    if (result && value.name === "allowCopy") { 
                      map.allowCopy = result.groups?.value === "true"; 
                    } 
                  } 
                  if (map.lang === "txt") {
                    map.lang = "text";
                  }
                  return map; 
                }, 
                transformers: [ 
                  { 
                    preprocess(code, options) { 
                      const optionsMeta = options.meta as MetaMap; 
                      optionsMeta.lang = options.lang || "txt"; 
                      optionsMeta.rawCode = code; 
                    }, 
                    line(node) { 
                      node.properties["class"] = `${node.properties["class"]} line-number`; 
                    }, 
                  }, 
                ], 
              } as RehypeShikiCoreOptions, 
            ], 
          ], 
        }, 
      }}
    />
  )
}