export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validatePdfFile = (file: File): ValidationResult => {
  const errors: string[] = [];
  
  // Check file type
  if (file.type !== 'application/pdf') {
    errors.push('File must be a PDF document');
  }
  
  // Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024; // 10MB in bytes
  if (file.size > maxSize) {
    errors.push('File size must be less than 10MB');
  }
  
  // Note: We can't actually check page count without processing the PDF
  // In a real implementation, this would be done server-side
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};