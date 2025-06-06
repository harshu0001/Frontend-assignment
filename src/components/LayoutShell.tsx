// import Sidebar from "@/components/Sidebar";
// import ThemeToggle from "@/components/ThemeToggle";

// export default function LayoutShell({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 p-6 overflow-y-auto">{children}</main>
//     </div>
//   );
// }
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto w-full">
        {/* Top-right toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
