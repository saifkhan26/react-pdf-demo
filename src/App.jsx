import { useState } from 'react';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import MyDocument from '../components/pdfGenerator';

function App() {
  const [isDocument, setIsDocument] = useState(false)
  const [title, setTitle] = useState('')
  const [orientation, setOrientation] = useState('')
  const [pageFormat, setPageFormat] = useState('')
  const [isBranded, setIsBranded] = useState('')
  return (<div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <button onClick={() => {
      setIsDocument(prev => !prev)
    }} style={{marginBottom: '1rem'}}>Ready Doc</button>
    <div style={{ display: "flex", flexDirection: "column", gap: '1rem' }}>
      <select onChange={(e) => {
        setOrientation(e.target.value)
      }}>
        <option value="potrait">Potrait</option>
        <option value="landscape">Landscape</option>
      </select>
      <select onChange={(e) => {
        setPageFormat(e.target.value)
      }}>
        <option value="A4">A4</option>
        <option value="A3">A3</option>
      </select>
      <select onChange={(e) => {
        isBranded(e.target.value)
      }}>
        <option value="true">Branded</option>
        <option value="false">Unbranded</option>
      </select>
      <input onChange={(e) => {
        setIsDocument(false)
        setTitle(e.target.value)
      }} />
    </div>
    <div style={{display:'flex', marginTop: "1rem"}}>
    {
      isDocument &&
      <PDFDownloadLink document={
        <MyDocument title={title} orientation={orientation} pageFormat={pageFormat} isBranded={isBranded}/>
      }
        fileName="myfile.pdf"
        style={{ backgroundColor: "steelblue", borderRadius: "8px", padding: "8px", color: '#fff' }}>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    }
    </div>
  </div>)
}

export default App
