import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components";
import AnimatedCursor from "react-animated-cursor";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <div
      className={cn(
        "w-full bg-primary font-sans text-primary antialiased selection:bg-secondaryA"
      )}
    >
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>

      <AnimatedCursor color={"139, 13, 13"} />
    </div>
  );
}
