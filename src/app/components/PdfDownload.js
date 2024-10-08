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
        <h1>PDF Downloads</h1>
        <p>Click the buttons below to download the PDF files.</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Button 
          onClick={() => handleDownload('/images/Voucher_1.pdf', 'first-document.pdf')}
          className="w-full"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download First PDF
        </Button>
        <Button 
          onClick={() => handleDownload('/images/Voucher_2.pdf', 'second-document.pdf')}
          className="w-full"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download Second PDF
        </Button>
      </div>
    </div>
  )
}
