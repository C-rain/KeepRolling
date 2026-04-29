"use client";

import { ErrorState } from "@/components/site/error-state";

export default function GlobalError() {
  return (
    <html lang="zh-Hant">
      <body className="bg-black">
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <ErrorState />
        </main>
      </body>
    </html>
  );
}
