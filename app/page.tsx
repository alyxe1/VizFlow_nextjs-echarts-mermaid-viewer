'use client';

import { useState, useEffect } from 'react';
import { EchartsData, EchartsNode, parseMermaidToEcharts } from '../lib/mermaidParser';
import EchartsGraph from '../components/EchartsGraph';

export default function Home() {
  const [chartData, setChartData] = useState<EchartsData | null>(null);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<EchartsNode[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const processMermaidContent = (content: string, name: string) => {
    const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/;
    const match = content.match(mermaidRegex);
    const mermaidCode = match && match[1] ? match[1] : content;

    try {
      const data = parseMermaidToEcharts(mermaidCode);
      setChartData(data);
      setFileName(name);
      setError('');
    } catch (err) {
      setError('Failed to parse Mermaid code. Please check the syntax.');
      setChartData(null);
      console.error(err);
    }
  };

  useEffect(() => {
    const defaultFileName = 'liquid-cooling-supply-chain';
    fetch(`/${defaultFileName}.md`)
      .then(response => response.text())
      .then(content => processMermaidContent(content, defaultFileName))
      .catch(err => {
        console.error("Failed to load default file:", err);
        setError("Could not load default visualization.");
      });
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const name = file.name.replace(/\.[^/.]+$/, "");
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      processMermaidContent(content, name);
    };
    reader.readAsText(file);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query && chartData) {
      const results = chartData.nodes.filter(node => 
        node.name.toLowerCase().startsWith(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setSearchQuery('');
    setSearchResults([]);
  };

  const clearSelection = () => {
    setSelectedNodeId(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Styles ---
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 25px',
    borderBottom: '1px solid #eee',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'relative',
    zIndex: 10,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  };

  const fileNameStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const uploadButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const footerStyle: React.CSSProperties = {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    borderTop: '1px solid #eee',
    backgroundColor: 'white',
    color: '#555',
    fontSize: '14px',
  };

  const tooltipContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    marginLeft: '8px',
    cursor: 'pointer',
  };

  const tooltipTextStyle: React.CSSProperties = {
    visibility: isTooltipVisible ? 'visible' : 'hidden',
    opacity: isTooltipVisible ? 1 : 0,
    width: '320px', // Increased width for more content
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'left',
    borderRadius: '6px',
    padding: '12px',
    position: 'absolute',
    zIndex: 20, 
    top: '150%',
    left: '50%',
    marginLeft: '-160px', // Adjusted for new width
    transition: 'opacity 0.3s',
    lineHeight: '1.5',
  };

  return (
    <main style={{ fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={headerStyle}>
        <div style={{ flex: 1 }}>
          <h1 style={titleStyle}>VizFlow</h1>
          <p style={{ margin: '5px 0 0', color: '#777', fontSize: '14px' }}>
            Mermaid Graph Visualization
          </p>
        </div>

        {fileName && <div style={fileNameStyle}>{fileName}</div>}

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label htmlFor="file-upload" style={uploadButtonStyle} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Upload File
            </label>
            <div style={tooltipContainerStyle} onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
              <span style={{ fontSize: '16px', color: '#999', border: '2px solid #999', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>?</span>
              <div style={tooltipTextStyle}>
                <b>File Requirements:</b><br />
                - Format: Markdown (.md)<br />
                - Must contain a ```mermaid block.<br />
                - Supports: `graph TD`, node labels (ID[Name]), first-level `subgraph`, and links (`--&gt;`, --"label"--&gt;).
                <hr style={{margin: '8px 0', borderColor: '#888'}} />
                <b>文件要求:</b><br />
                - 格式: Markdown (.md)<br />
                - 必须包含 ```mermaid 代码块。<br />
                - 支持: `graph TD`, 节点标签 (ID[名称]), 第一层 `subgraph`, 以及链接 (`--&gt;`, --"标签"--&gt;).
              </div>
            </div>
            <input id="file-upload" type="file" accept=".md" onChange={handleFileChange} style={{ display: 'none' }} />
            {error && <p style={{ color: 'red', margin: 0, fontSize: '14px' }}>{error}</p>}
          </div>
          {chartData && (
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => { if (e.key === 'Enter' && searchResults.length > 0) handleNodeSelect(searchResults[0].id); }}
                  placeholder="Search nodes..."
                  style={{ padding: '8px 12px', fontSize: '14px', borderRadius: '6px 0 0 6px', border: '1px solid #ccc', borderRight: 'none' }}
                />
                <button 
                  onClick={() => searchResults.length > 0 && handleNodeSelect(searchResults[0].id)} 
                  style={{ padding: '8px 10px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '0 6px 6px 0', background: '#f0f0f0', transition: 'background-color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                >
                  &#128269;
                </button>
              </div>
              {searchResults.length > 0 && (
                <ul style={{ listStyle: 'none', padding: '5px 0', margin: '5px 0 0', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '6px', position: 'absolute', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 20 }}>
                  {searchResults.map(node => (
                    <li 
                      key={node.id} 
                      onClick={() => handleNodeSelect(node.id)} 
                      style={{ padding: '8px 12px', cursor: 'pointer', fontSize: '14px', transition: 'background-color 0.2s' }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      {node.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </header>

      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {chartData ? (
          <EchartsGraph 
            data={chartData} 
            highlightedNodeId={selectedNodeId}
            onBlankClick={clearSelection}
          />
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '15%', color: '#888' }}>
            <h2 style={{fontSize: '22px', fontWeight: 500}}>Loading Visualization...</h2>
          </div>
        )}
      </div>

      <footer style={footerStyle}>
        <div>
          <span>Mr. Er Xuanhe</span>
          <a href="mailto:xuanhe.er@siemens.com" style={{color: '#3b82f6', textDecoration: 'none', margin: '0 10px'}} onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}>xuanhe.er@siemens.com</a>
        </div>
        <div>
          <span style={{color: '#999', cursor: 'not-allowed', margin: '0 10px'}} title="Coming soon">Privacy Policy</span>
          <span style={{color: '#999', cursor: 'not-allowed', margin: '0 10px'}} title="Coming soon">Terms of Use</span>
        </div>
        <button 
          onClick={scrollToTop} 
          style={{...uploadButtonStyle, padding: '8px 15px', fontSize: '14px'}}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Back to Top
        </button>
      </footer>
    </main>
  );
}
