// @ts-nocheck
import * as React from "react";

export const Index: Record<string, any> = {
  "tailwind-buttons": {
    "tailwind-banner": {
      name: "tailwind-banner",
      component: React.lazy(
        () => import("@/components/examples/tailwind-buttons/banner")
      ),
    },
    "tailwind-3d": {
      name: "tailwind-3d",
      component: React.lazy(
        () => import("@/components/examples/tailwind-buttons/3d")
      ),
    },
    "tailwind-shine": {
      name: "tailwind-shine",
      component: React.lazy(
        () => import("@/components/examples/tailwind-buttons/shine")
      ),
    },
    "tailwind-wrap": {
      name: "tailwind-wrap",
      component: React.lazy(
        () => import("@/components/examples/tailwind-buttons/wrap")
      ),
    },
  },
};
