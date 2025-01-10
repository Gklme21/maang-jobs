
import Script from 'next/script';

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-GXE8HGSF18`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GXE8HGSF18');
        `}
      </Script>
    </>
  );
};