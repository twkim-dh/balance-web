import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "오늘의 밸런스 | 너는 어느 쪽?",
  description:
    "매일 새로운 밸런스 게임! 실시간 투표로 다른 사람들의 선택을 확인하세요.",
  metadataBase: new URL("https://balance.dhlm-studio.com"),
  openGraph: {
    title: "오늘의 밸런스 | 너는 어느 쪽?",
    description:
      "매일 새로운 밸런스 게임! 실시간 투표로 다른 사람들의 선택을 확인하세요.",
    url: "https://balance.dhlm-studio.com",
    siteName: "오늘의 밸런스",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4kyatNpEbEMSSR0W"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body
        className="min-h-dvh flex flex-col items-center"
        style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
