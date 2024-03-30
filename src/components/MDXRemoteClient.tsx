"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXRemoteClient({
  mdxSource,
  components,
}: {
  mdxSource: MDXRemoteSerializeResult;
  components?: any;
}){
  return (
    <MDXRemote {...mdxSource}/>
  )
} 
  