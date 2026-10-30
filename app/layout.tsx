import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next.js + Supabase Auth",
  description: "Tela de login integrada ao Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
