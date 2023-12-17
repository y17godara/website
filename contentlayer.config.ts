import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const projectComputedFields: ComputedFields = {
  url: {
    type: "string",
    resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
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
    time: { type: "string", required: true },
    tags: { type: "json", required: true },
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
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The Description of the post",
      required: true,
    },
  },
  computedFields: blogComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Blog],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
