\nimport type { Metadata } from 'next'\nimport { Inter } from 'next/font/google'\nimport './globals.css'\n\nconst inter = Inter({ subsets: ['latin'] })\n\nexport const metadata: Metadata = {\n  title: 'Web 3 go',\n  description: 'NFT GO GO home',\n}\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <html lang=\"en\">\n      <body className={inter.className}>{children}</body>\n    </html>\n  )\n}