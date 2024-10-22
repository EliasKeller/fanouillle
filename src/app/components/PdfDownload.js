import Button from "./Button"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

export default function PDFDownloader() {
  const handleDownload = (pdfUrl, fileName) => {
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() => alert('An error occurred while downloading the PDF.'))
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div>
      </div>
      <div className="flex flex-col space-y-4">
        <Button
          onClick={() => handleDownload('/images/Voucher_1.pdf', 'Kinogutschein 1.pdf')}
        >
          <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
          Download erster Kinogutschein
        </Button>
        <Button
          onClick={() => handleDownload('/images/Voucher_2.pdf', 'Kinogutschein 2.pdf')}
        >

          <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
          Download zweiter Kinogutschein
        </Button>
      </div>
    </div>
  )
}
