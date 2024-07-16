// @ts-nocheck
import * as React from "react";

export const Index: Record<string, any> = {
  "tailwind-shapes": {
    name: "tailwind-shapes",
    component: React.lazy(
      () => import("@/components/examples/tailwind-shapes")
    ),
  },
};
