import { MDXRemote } from "next-mdx-remote/rsc";

export default function RemoteMdxPage() {
  const mdxText = "# Hello";
  return <MDXRemote source={mdxText} />;
}
