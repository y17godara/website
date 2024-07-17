import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
// @ts-ignore
import rehypePrettyCode from "rehype-pretty-code";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  featuredImage: {
    type: "string",
    resolve: (doc) => `/assets/projects/${getSlug(doc)}/image.png`,
  },
};

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    time: { type: "string", required: false },
    tags: { type: "json", required: false },
    url: { type: "string", required: false },
    published: { type: "boolean", required: false, default: false },
  },
  computedFields: projectComputedFields,
}));

const blogComputedFields: ComputedFields = {
  url: {
    type: "string",
    resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  featuredImage: {
    type: "string",
    resolve: (doc) => `/assets/blogs/${getSlug(doc)}/image.png`,
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: true },
    image: { type: "string", required: true },
    tags: { type: "json", required: false },
    published: { type: "boolean", required: false, default: false },
  },
  computedFields: blogComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug, rehypePrettyCode],
  },
});
