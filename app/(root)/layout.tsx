import "@/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <main
      className={
        "mx-auto mt-10 min-h-[60vh] max-w-[700px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
      }
    >
      {children}
    </main>
  );
}
