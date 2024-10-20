'use client';

import Script from 'next/script';

export const GoogleAnalytics = () => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-7V16W3LP5P`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7V16W3LP5P');
          gtag('config', 'AW-16482679282');
        `}
            </Script>
        </>
    );
};
