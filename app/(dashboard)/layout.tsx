import Navbar from "@/components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 min-h-screen h-full flex flex-col gap-4">
      <Navbar />
      <main className="flex-1 overflow-hidden grid gap-4">{children}</main>
    </div>
  );
}
