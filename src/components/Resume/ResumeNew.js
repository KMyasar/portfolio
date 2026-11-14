import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () =>
    setPageNumber((prev) => Math.max(prev - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prev) => (numPages ? Math.min(prev + 1, numPages) : prev));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    // Only treat as page swipe if horizontal movement dominates
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) goToNextPage();
      else goToPrevPage();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const navBtnStyle = {
    width: "36px",
    height: "36px",
    minWidth: "36px",
    borderRadius: "50%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top download button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF viewer with swipe support */}
        <Row
          className="resume"
          style={{ position: "relative", zIndex: 1, touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => console.error("PDF load error:", err)}
            className="d-flex justify-content-center"
          >
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        </Row>

        {/* Compact page navigation — below PDF, single line */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "0.75rem",
            marginBottom: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="outline-primary"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            style={navBtnStyle}
          >
            <AiOutlineLeft size={16} />
          </Button>

          <span
            style={{
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            {pageNumber} / {numPages ?? "…"}
          </span>

          <Button
            variant="outline-primary"
            onClick={goToNextPage}
            disabled={!numPages || pageNumber >= numPages}
            aria-label="Next page"
            style={navBtnStyle}
          >
            <AiOutlineRight size={16} />
          </Button>
        </div>

        {/* Bottom download button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;