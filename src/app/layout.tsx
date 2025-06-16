// ---- Next ----
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'], // 必要なウェイトのみ指定
  subsets: ['latin'], // 基本的には latin で十分
  display: 'swap', // フォント読み込み戦略
  variable: '--ja',
});

export const metadata: Metadata = {
  title: '稼働時間管理アプリ',
  description:
    '稼働時間を記録しよう。プロジェクトごとに勤怠管理ができるため、副業やフリーランスの方にもおすすめです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>{children}</body>
    </html>
  );
}
