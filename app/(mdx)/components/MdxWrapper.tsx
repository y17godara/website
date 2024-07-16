import { useMDXComponent } from "next-contentlayer/hooks";
import CustomImage from "./Image";
import { ComponentPreview } from "./ui/component-preview";

const components = {
  // Components go here
  Image: CustomImage,
  ComponentPreview,
};

export function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
