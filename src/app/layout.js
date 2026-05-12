import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: "Mradul Sharma",
    description: "Modern analytics suite",
    applicationName: "Mradul Sharma",
    keywords: ["dashboard", "nextjs", "analytics", "saas", "admin"],
    authors: [{ name: "Admin" }],
    creator: "Admin",
    publisher: "Admin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/favicon.ico",
        // You can add shortcut or apple specific icons here
    },
    openGraph: {
        title: "Mradul Sharma",
        description: "Modern analytics & intelligence suite",
        type: "website",
        locale: "en_US",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
};

export const viewport = {
    themeColor: "#dcdcdc",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} antialiased`}>
            <body className={`${outfit.className} bg-[#0a0a0f] text-white min-h-screen font-sans`}>
                {children}
            </body>
        </html>
    );
}

