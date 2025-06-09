import { ProcessedDocument } from '../types';

export const exportToCSV = (documents: ProcessedDocument[]): void => {
  const headers = [
    'Filename',
    'Upload Date',
    'Category',
    'Page Count',
    'Creator',
    'File Size (MB)',
    'Summary'
  ];
  
  const csvContent = [
    headers.join(','),
    ...documents.map(doc => [
      `"${doc.metadata.filename}"`,
      `"${new Date(doc.metadata.uploadDate).toLocaleDateString()}"`,
      `"${doc.metadata.category}"`,
      doc.metadata.pageCount.toString(),
      `"${doc.metadata.creator}"`,
      (doc.metadata.fileSize / (1024 * 1024)).toFixed(2),
      `"${doc.summary.replace(/"/g, '""')}"`  // Escape quotes in summary
    ].join(','))
  ].join('\n');
  
  // Create and download the CSV file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `docindexer-export-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};