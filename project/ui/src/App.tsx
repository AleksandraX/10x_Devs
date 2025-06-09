import React, { useState } from 'react';
import { FileText, Home, BarChart3 } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { DocumentResults } from './components/DocumentResults';
import { Dashboard } from './components/Dashboard';
import { UploadedFile, ProcessedDocument } from './types';
import { mockApiService } from './utils/mockApi';

type AppView = 'upload' | 'results' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedDocument, setProcessedDocument] = useState<ProcessedDocument | null>(null);

  const handleFileSelect = async (uploadedFile: UploadedFile) => {
    setIsProcessing(true);
    
    try {
      const result = await mockApiService.processFile(uploadedFile.file);
      setProcessedDocument(result);
      setCurrentView('results');
    } catch (error) {
      console.error('Error processing file:', error);
      // In a real app, you'd show an error message
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToUpload = () => {
    setCurrentView('upload');
    setProcessedDocument(null);
  };

  const navigationItems = [
    {
      id: 'upload' as AppView,
      label: 'Upload',
      icon: Home,
      active: currentView === 'upload'
    },
    {
      id: 'dashboard' as AppView,
      label: 'Dashboard',
      icon: BarChart3,
      active: currentView === 'dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DocIndexer</h1>
                <p className="text-sm text-gray-500">PDF Document Processing PoC</p>
              </div>
            </div>
            
            <nav className="flex space-x-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Process Your PDF Documents
              </h2>
              <p className="text-lg text-gray-600">
                Upload a PDF file to extract content, generate summaries, and analyze document metadata
              </p>
            </div>
            
            <FileUpload 
              onFileSelect={handleFileSelect}
              isProcessing={isProcessing}
            />
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">What happens after upload:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• PDF content is extracted and converted to Markdown format</li>
                <li>• AI generates a comprehensive document summary (max 4400 characters)</li>
                <li>• Metadata is extracted including page count, creation date, and author</li>
                <li>• Results are displayed in an organized, readable format</li>
              </ul>
            </div>
          </div>
        )}

        {currentView === 'results' && processedDocument && (
          <DocumentResults 
            document={processedDocument}
            onBack={handleBackToUpload}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>DocIndexer PoC - PDF Document Processing and Analysis</p>
            <p className="mt-1">This is a proof of concept demonstrating core functionality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;