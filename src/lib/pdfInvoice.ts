import type { jsPDF } from 'jspdf';
import { CustomServiceItem, BusinessInfo } from '../components/CustomPackagePage';

export interface GenerateInvoiceParams {
  businessInfo: BusinessInfo;
  selectedServices: CustomServiceItem[];
  monthlyTotal: number;
  setupFeeTotal: number;
  invoiceNumber?: string;
}

export async function generateAndDownloadInvoicePDF({
  businessInfo,
  selectedServices,
  monthlyTotal,
  setupFeeTotal,
  invoiceNumber = `ACE-${Math.floor(100000 + Math.random() * 900000)}`
}: GenerateInvoiceParams): Promise<jsPDF> {
  const { default: jsPDFClass } = await import('jspdf');
  
  const doc = new jsPDFClass({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - (margin * 2);

  // Top Header Accent Bar
  doc.setFillColor(37, 99, 235); // Blue #2563eb
  doc.rect(0, 0, pageWidth, 8, 'F');

  // Header Title & Logo info
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('ACESO SOLUTIONS', margin, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text('Digital Growth Partner for SMEs', margin, 29);
  doc.text('Mombasa, Kenya • WhatsApp: +254 758 544 241', margin, 34);

  // Invoice / Quote Metadata (Top Right)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text('CUSTOM PROPOSAL & INVOICE', pageWidth - margin, 24, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  doc.text(`Invoice / Quote #: ${invoiceNumber}`, pageWidth - margin, 30, { align: 'right' });
  doc.text(`Date: ${today}`, pageWidth - margin, 35, { align: 'right' });
  doc.text(`Valid For: 30 Days`, pageWidth - margin, 40, { align: 'right' });

  // Divider line
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.5);
  doc.line(margin, 46, pageWidth - margin, 46);

  // Billed To Box
  let y = 54;
  doc.setFillColor(248, 250, 252); // slate-50
  doc.roundedRect(margin, y, contentWidth, 26, 3, 3, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, y, contentWidth, 26, 3, 3, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(37, 99, 235);
  doc.text('CLIENT / BILLED TO:', margin + 6, y + 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(businessInfo.businessName || 'Valued Business Client', margin + 6, y + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Attention: ${businessInfo.contactName || 'Marketing Lead'}`, margin + 6, y + 17);
  doc.text(`Email: ${businessInfo.email || 'N/A'}  •  Phone: ${businessInfo.phone || '+254 758 544 241'}`, margin + 6, y + 22);

  if (businessInfo.industry) {
    doc.text(`Industry: ${businessInfo.industry}`, pageWidth - margin - 6, y + 12, { align: 'right' });
  }
  if (businessInfo.primaryGoal) {
    doc.text(`Goal: ${businessInfo.primaryGoal}`, pageWidth - margin - 6, y + 17, { align: 'right' });
  }

  // Items Table Header
  y = 88;
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(margin, y, contentWidth, 8, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('SERVICE / DELIVERABLE', margin + 4, y + 5.5);
  doc.text('CATEGORY', margin + 85, y + 5.5);
  doc.text('MONTHLY RATE (KSH)', pageWidth - margin - 4, y + 5.5, { align: 'right' });

  y += 8;

  // Selected Services Rows
  doc.setFontSize(8.5);
  selectedServices.forEach((srv, idx) => {
    // Check if new page needed
    if (y > pageHeight - 55) {
      doc.addPage();
      y = 20;
    }

    const rowBg = idx % 2 === 0 ? 255 : 248;
    doc.setFillColor(rowBg, rowBg, rowBg);
    doc.rect(margin, y, contentWidth, 11, 'F');
    doc.setDrawColor(241, 245, 249);
    doc.line(margin, y + 11, pageWidth - margin, y + 11);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(srv.name, margin + 4, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    const desc = srv.description.length > 55 ? srv.description.slice(0, 52) + '...' : srv.description;
    doc.text(desc, margin + 4, y + 9);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(srv.category.toUpperCase(), margin + 85, y + 6);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`KSh ${srv.price.toLocaleString()}`, pageWidth - margin - 4, y + 6, { align: 'right' });

    y += 11;
  });

  // Financial Summary Box
  y += 4;
  if (y > pageHeight - 55) {
    doc.addPage();
    y = 20;
  }

  const summaryX = pageWidth - margin - 85;
  const summaryWidth = 85;

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(summaryX, y, summaryWidth, setupFeeTotal > 0 ? 32 : 24, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(summaryX, y, summaryWidth, setupFeeTotal > 0 ? 32 : 24, 2, 2, 'S');

  let sumY = y + 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Monthly Services Subtotal:', summaryX + 4, sumY);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`KSh ${monthlyTotal.toLocaleString()}`, summaryX + summaryWidth - 4, sumY, { align: 'right' });

  if (setupFeeTotal > 0) {
    sumY += 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text('One-Time Setup Fee:', summaryX + 4, sumY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`KSh ${setupFeeTotal.toLocaleString()}`, summaryX + summaryWidth - 4, sumY, { align: 'right' });
  }

  sumY += 7;
  doc.setDrawColor(203, 213, 225);
  doc.line(summaryX + 4, sumY - 2, summaryX + summaryWidth - 4, sumY - 2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235);
  doc.text('TOTAL MONTHLY:', summaryX + 4, sumY + 3);
  doc.text(`KSh ${monthlyTotal.toLocaleString()} / mo`, summaryX + summaryWidth - 4, sumY + 3, { align: 'right' });

  // Notes & Next Steps
  const notesY = y;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('ONBOARDING & TERMS:', margin, notesY + 5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('• Kickoff strategy call scheduled upon invoice acceptance.', margin, notesY + 11);
  doc.text('• Monthly deliverables with dedicated account specialist & bi-weekly reporting.', margin, notesY + 16);
  doc.text('• Direct WhatsApp Support: +254 758 544 241', margin, notesY + 21);

  // Footer Accent & Copyright
  doc.setFillColor(241, 245, 249);
  doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Aceso Solutions — Digital Growth Partner for SMEs in East Africa • Mombasa, Kenya', pageWidth / 2, pageHeight - 5, { align: 'center' });

  // Save the PDF
  const sanitizedName = (businessInfo.businessName || 'Client')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .slice(0, 30);
  doc.save(`Aceso_Solutions_Invoice_${sanitizedName}.pdf`);

  return doc;
}
