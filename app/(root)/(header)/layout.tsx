import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Header, Footer } from "@/components";
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
     
        <Header />
        <main
          className={
            "mx-auto mt-10 min-h-[60vh] max-w-[700px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
          }
        >
          {children}
        </main>
        <Footer />


      <AnimatedCursor color={"139, 13, 13"} />
    </div>
  );
}
