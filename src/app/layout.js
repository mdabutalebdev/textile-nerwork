import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
    weight: ['300','400', '500', '600', '700', '800'],
    subsets: ['latin']
})

export const metadata = {
    title: "Textile Network",
    description: "The all-in-one platform connecting apparel & textile companies with global buyers for endless opportunities",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
