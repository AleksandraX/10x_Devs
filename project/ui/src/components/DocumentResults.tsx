import React from 'react';
import { FileText, Calendar, User, Hash, Tag, ArrowLeft } from 'lucide-react';
import { ProcessedDocument } from '../types';
import { formatFileSize } from '../utils/fileValidation';

interface DocumentResultsProps {
  document: ProcessedDocument;
  onBack: () => void;
}

export const DocumentResults: React.FC<DocumentResultsProps> = ({ document, onBack }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Upload</span>
        </button>
        <div className="text-sm text-gray-500">
          Processing completed
        </div>
      </div>

      {/* Document Info */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {document.metadata.filename}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Hash className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{document.metadata.pageCount} pages</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{formatDate(document.metadata.uploadDate)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{document.metadata.creator}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{document.metadata.category}</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              File size: {formatFileSize(document.metadata.fileSize)}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Document Summary
        </h3>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {document.summary}
          </p>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          Summary length: {document.summary.length} characters (max 4400)
        </div>
      </div>

      {/* Markdown Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Extracted Content (Markdown)
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
          <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
            {document.markdown}
          </pre>
        </div>
      </div>
    </div>
  );
};