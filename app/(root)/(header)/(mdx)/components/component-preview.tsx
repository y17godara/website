"use client";

import React, { useMemo, Suspense } from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Index } from "@/components/examples";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  section: string;
  extractClassname?: boolean;
  extractedClassNames?: string;
  align?: "center" | "start" | "end";
  description?: string;
  hideCode?: boolean;
}

export function ComponentPreview({
  name,
  section,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Preview = useMemo(() => {
    const Component = Index[section]?.[name]?.component;
    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>
          Component{" "}
          <code className='bg-muted font-mono relative rounded px-[0.3rem] py-[0.2rem] text-sm'>
            {name} in {section}
          </code>{" "}
          not found in registry.
        </p>
      );
    }
    return <Component />;
  }, [name, section]);
  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue='preview' className='relative mr-auto w-full'>
        <TabsContent
          value='preview'
          className='relative rounded-md border border-secondary'
        >
          <div
            className={cn(
              "preview flex min-h-[300px] w-full justify-center p-5 md:p-10",
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
      </Tabs>
    </div>
  );
}
