import { FileDown } from "lucide-react"
import Button from "./Button"

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
          onClick={() => handleDownload('/images/Voucher_1.pdf', 'first-document.pdf')}
        >
          Download erster Kinogutschein
        </Button>
        <Button 
          onClick={() => handleDownload('/images/Voucher_2.pdf', 'second-document.pdf')}
        >
          Download zweiter Kinogutschein
        </Button>
      </div>
    </div>
  )
}
