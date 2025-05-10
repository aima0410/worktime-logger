import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "稼働時間管理アプリ",
  description: "稼働時間を記録しよう。プロジェクトごとに勤怠管理ができるため、副業やフリーランスの方にもおすすめです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
      >
        {children}
      </body>
    </html>
  );
}
