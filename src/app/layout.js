
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

// <script> MoveoAI.init({ integrationId: "6d9b0f7c-95d2-44ba-822a-f065e4692900",element:document.getElementById('embed')}).then((desk) => console.log("Moveo connected")).catch((error) => console.error(error)); </script>

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
