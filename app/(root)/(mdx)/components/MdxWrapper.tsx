import { useMDXComponent } from "next-contentlayer/hooks";
import CustomImage from "./Image";
import { ComponentPreviewCode } from "./component-code";
import { ComponentPreview } from "./component-preview";
import { CodeBlock } from "./component-code-block";

const components = {
  // Components go here
  Image: CustomImage,
  ComponentPreviewCode,
  ComponentPreview,
  CodeBlock,
};

export function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
