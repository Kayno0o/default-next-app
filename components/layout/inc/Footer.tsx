import React from 'react'

function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear())
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="mt-auto w-full px-6 py-2">
      <h2 className="text-right text-2xl">© Kayn.ooo - {year}</h2>
    </footer>
  )
}

export default Footer
