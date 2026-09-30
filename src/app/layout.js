import "./globals.css";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
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
        icon: [
            { url: "/favicon.ico" },
            { url: "/image/logo.png", type: "image/png" },
        ],
        shortcut: ["/favicon.ico"],
        apple: [{ url: "/image/logo.png" }],
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
    themeColor: "#e0e5ec",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} antialiased`}>
            <body className={`${plusJakarta.className} bg-[#e0e5ec] text-slate-800 min-h-screen font-sans selection:bg-cyan-500 selection:text-white`}>
                {children}
            </body>
        </html>
    );
}

