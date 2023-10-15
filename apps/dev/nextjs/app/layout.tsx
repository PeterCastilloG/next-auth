export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("holaaa")
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
