import { useState } from 'react';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import MyDocument from '../components/pdfGenerator';

function App() {
  const [isDocument, setIsDocument] = useState(false)
  const [title, setTitle] = useState('')
  return (<>
      <button onClick={() => {
        setIsDocument(prev => !prev)
      }}>Ready Doc</button>
      <input onChange={(e) => {
        setIsDocument(false)
        setTitle(e.target.value)
      }} />
      {
        isDocument &&
        <PDFDownloadLink document={<MyDocument title={title} />} fileName="myfile.pdf" style={{ backgroundColor: "steelblue", borderRadius: "8px", padding: "8px", color: '#fff' }}>
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      }
  </>)
}

export default App
