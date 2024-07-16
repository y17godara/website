"use client";

import React, { useMemo, Suspense } from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Index } from "@/components/examples";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  extractClassname?: boolean;
  extractedClassNames?: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
}

export function ComponentPreview({
  name,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Preview = useMemo(() => {
    const Component = Index[name]?.component;
    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>
          Component{" "}
          <code className='bg-muted font-mono relative rounded px-[0.3rem] py-[0.2rem] text-sm'>
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }
    return <Component />;
  }, [name]);

  const [Example, Codes, ...Children] = React.Children.toArray(
    children
  ) as React.ReactElement[];

  console.log(Example, Codes, Children, children);
  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue='preview' className='relative mr-auto w-full'>
        <div className='flex items-center justify-between pb-3'>
          {!hideCode && (
            <TabsList className='w-full justify-start rounded-none border-b bg-transparent p-0'>
              <TabsTrigger
                value='preview'
                className='data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-primary shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:shadow-none'
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value='code'
                className='text-muted-foreground data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:shadow-none'
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent value='preview' className='relative rounded-md border'>
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <Suspense
              fallback={
                <div className='text-muted-foreground flex w-full items-center justify-center text-sm'>
                  Loading...
                </div>
              }
            >
              {Preview}
            </Suspense>
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <div className='flex flex-col space-y-4'>
            <div className='rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
              {Example}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
