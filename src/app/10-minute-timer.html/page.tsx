import Link from "next/link";

// app/old-path/page.js
export default function Redirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/timer/10-minute-timer" />
      <link rel="canonical" href="/timer/10-minute-timer" />
      <title>Redirecting...</title>
      <script dangerouslySetInnerHTML={{ 
        __html: `window.location.href = "/timer/10-minute-timer";` 
      }} />
      <p>If you are not automatically redirected, please<Link href="/timer/10-minute-timer">click here</Link>。</p>
    </>
  );
}

export const revalidate = 3600; // Revalidate every hour (in seconds)