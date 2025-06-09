import { ProcessedDocument, DocumentMetadata } from '../types';

// Mock data for demonstration
const mockDocuments: ProcessedDocument[] = [
  {
    id: '1',
    metadata: {
      id: '1',
      filename: 'Annual_Report_2023.pdf',
      pageCount: 45,
      uploadDate: '2024-01-15T10:30:00Z',
      creator: 'John Smith',
      category: 'Financial Report',
      fileSize: 2.4 * 1024 * 1024 // 2.4 MB
    },
    markdown: `# Annual Report 2023

## Executive Summary

Our company has demonstrated exceptional growth throughout 2023, with revenue increasing by 32% compared to the previous year. This comprehensive report outlines our key achievements, financial performance, and strategic outlook for the coming year.

### Key Highlights

- **Revenue Growth**: $45.2M total revenue (+32% YoY)
- **Market Expansion**: Entered 3 new markets
- **Team Growth**: 25% increase in workforce
- **Customer Satisfaction**: 94% customer retention rate

## Financial Performance

The fiscal year 2023 has been our strongest to date. We achieved significant milestones across all key performance indicators:

### Revenue Breakdown
- Product Sales: $32.1M (71%)
- Service Revenue: $10.5M (23%)  
- Licensing: $2.6M (6%)

### Regional Performance
- North America: $28.4M (63%)
- Europe: $12.8M (28%)
- Asia-Pacific: $4.0M (9%)

## Strategic Initiatives

During 2023, we launched several strategic initiatives that positioned us for continued growth:

1. **Digital Transformation Program**: Modernized our core systems
2. **Sustainability Initiative**: Reduced carbon footprint by 18%
3. **Innovation Lab**: Launched R&D facility for next-gen products`,
    summary: 'This annual report presents comprehensive financial and operational results for 2023, highlighting exceptional 32% revenue growth to $45.2M. Key achievements include successful market expansion into three new regions, 25% workforce growth, and 94% customer retention rate. The document details revenue breakdown across product sales (71%), services (23%), and licensing (6%), with North America representing the largest market at 63% of total revenue. Strategic initiatives included digital transformation, sustainability efforts resulting in 18% carbon footprint reduction, and establishment of an innovation lab for future product development.',
    status: 'completed'
  },
  {
    id: '2',
    metadata: {
      id: '2',
      filename: 'Technical_Specification_v2.1.pdf',
      pageCount: 28,
      uploadDate: '2024-01-12T14:45:00Z',
      creator: 'Sarah Johnson',
      category: 'Technical Documentation',
      fileSize: 1.8 * 1024 * 1024 // 1.8 MB
    },
    markdown: `# Technical Specification v2.1

## Overview

This document outlines the technical specifications for the new API gateway system, including architecture details, security requirements, and implementation guidelines.

## System Architecture

### Core Components

1. **API Gateway Layer**
   - Request routing and load balancing
   - Authentication and authorization
   - Rate limiting and throttling
   - Request/response transformation

2. **Service Mesh**
   - Inter-service communication
   - Service discovery
   - Circuit breaker patterns
   - Observability and monitoring

3. **Data Layer**
   - Primary database (PostgreSQL)
   - Cache layer (Redis)
   - Message queue (RabbitMQ)
   - Object storage (S3-compatible)

## Security Requirements

### Authentication
- OAuth 2.0 / OpenID Connect
- JWT token validation
- Multi-factor authentication support
- Session management

### Authorization
- Role-based access control (RBAC)
- Attribute-based access control (ABAC)
- API key management
- Scope-based permissions`,
    summary: 'Technical specification document for API gateway system version 2.1, detailing comprehensive architecture including core components, security requirements, and implementation guidelines. The system features a three-tier architecture with API gateway layer for request handling, service mesh for inter-service communication, and robust data layer using PostgreSQL, Redis, and RabbitMQ. Security implementation includes OAuth 2.0/OpenID Connect authentication, JWT validation, multi-factor authentication, and comprehensive authorization using both role-based and attribute-based access control systems.',
    status: 'completed'
  }
];

export const mockApiService = {
  // Simulate file processing
  processFile: async (file: File): Promise<ProcessedDocument> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const id = Date.now().toString();
    const mockMarkdown = generateMockMarkdown(file.name);
    const mockSummary = generateMockSummary(file.name);
    
    return {
      id,
      metadata: {
        id,
        filename: file.name,
        pageCount: Math.floor(Math.random() * 40) + 10, // 10-50 pages
        uploadDate: new Date().toISOString(),
        creator: 'Current User',
        category: categorizeDocument(file.name),
        fileSize: file.size
      },
      markdown: mockMarkdown,
      summary: mockSummary,
      status: 'completed'
    };
  },

  // Get all processed documents
  getDocuments: async (): Promise<ProcessedDocument[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...mockDocuments];
  }
};

function categorizeDocument(filename: string): string {
  const name = filename.toLowerCase();
  if (name.includes('report') || name.includes('annual')) return 'Financial Report';
  if (name.includes('spec') || name.includes('technical')) return 'Technical Documentation';
  if (name.includes('contract') || name.includes('agreement')) return 'Legal Document';
  if (name.includes('manual') || name.includes('guide')) return 'User Guide';
  return 'General Document';
}

function generateMockMarkdown(filename: string): string {
  const title = filename.replace('.pdf', '').replace(/_/g, ' ');
  
  return `# ${title}

## Document Overview

This document has been processed and converted from PDF format to Markdown. The content below represents the extracted text and structure from the original PDF file.

## Main Content

### Section 1: Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

**Key Points:**
- Important information extracted from PDF
- Structured content preservation
- Formatting maintained where possible

### Section 2: Details

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### Subsection 2.1
- Bullet point one
- Bullet point two
- Bullet point three

#### Subsection 2.2
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.

### Section 3: Conclusion

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

## Tables and Data

| Item | Value | Description |
|------|-------|-------------|
| Item 1 | 100 | First item description |
| Item 2 | 250 | Second item description |
| Item 3 | 175 | Third item description |

## Technical Specifications

- **Format**: PDF to Markdown conversion
- **Processing Date**: ${new Date().toISOString().split('T')[0]}
- **Extraction Method**: OCR + AI Processing
- **Quality**: High fidelity text extraction

---

*This markdown content was generated from the original PDF document using advanced OCR and AI processing technologies.*`;
}

function generateMockSummary(filename: string): string {
  const summaries = [
    `This document provides comprehensive analysis and detailed information extracted from ${filename}. The content covers multiple sections including introduction, main details, and conclusions. Key highlights include structured data presentation, technical specifications, and important findings that demonstrate the document's primary purpose and scope. The document appears to be well-organized with clear headings, bullet points, and tabular data that support the main narrative and provide additional context for readers.`,
    
    `Analysis of ${filename} reveals important information across several key areas. The document contains structured content with multiple sections covering various aspects of the subject matter. Notable elements include detailed explanations, data tables, and technical specifications that provide comprehensive coverage of the topic. The material is presented in a logical sequence that facilitates understanding and includes supporting evidence and examples throughout the text.`,
    
    `The processed document ${filename} contains valuable information organized into clear sections and subsections. Key content includes introductory material, detailed analysis, and conclusive findings. The document demonstrates good structure with appropriate use of headers, lists, and tables to present information effectively. Technical details and specifications are included where relevant, providing readers with comprehensive understanding of the subject matter and supporting data.`
  ];
  
  return summaries[Math.floor(Math.random() * summaries.length)];
}