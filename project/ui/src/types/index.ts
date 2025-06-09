export interface DocumentMetadata {
  id: string;
  filename: string;
  pageCount: number;
  uploadDate: string;
  creator: string;
  category: string;
  fileSize: number;
}

export interface ProcessedDocument {
  id: string;
  metadata: DocumentMetadata;
  markdown: string;
  summary: string;
  status: 'processing' | 'completed' | 'error';
}

export interface UploadedFile {
  file: File;
  id: string;
}