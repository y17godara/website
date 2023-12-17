import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  // Components go here
};

export function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
