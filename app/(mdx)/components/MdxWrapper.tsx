import { useMDXComponent } from "next-contentlayer/hooks";
import CustomImage from "./Image";

const components = {
  // Components go here
  Image: CustomImage,
};

export function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
