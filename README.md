# 10x_Devs

## Table of Contents
1. [Project Description](#project-description)
2. [Tech Stack](#tech-stack)
3. [Getting Started Locally](#getting-started-locally)
4. [Available Scripts](#available-scripts)
5. [Project Scope](#project-scope)
6. [Project Status](#project-status)
7. [License](#license)

## Project Description
DocIndexer is a web application designed to help domain experts (e.g., oil & gas, energy, maritime) efficiently organize scattered PDF files. Users can upload up to 1 document (≤ 50 MB, ≤ 1000 pages), which the system converts to markdown, extracts metadata, and generates summaries and categorizations using LLMs. Users can edit, accept, or reject results with justification. All changes are versioned, and a dashboard provides a complete document history with sorting, filtering, and CSV export capabilities.

## Tech Stack
- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Backend**: FastAPI (planned for future iterations)
- **LLM Models**: Mistral7B for OCR and GPT-4.1 for summarization and metadata extraction
- **Storage**: Blob storage for documents and markdowns
- **Database**: Any relational database for metadata and summaries

## Getting Started Locally

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AleksandraX/10x_Devs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 10x_Devs/project/ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
Start the development server:
```bash
npm run dev
```

## Available Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint for code linting.

## Project Scope
### Core Features (MVP)
1. Upload a single PDF (≤ 50 MB, ≤ 1000 pages).
2. Convert PDF to markdown.
3. Extract metadata (e.g., file name, creation date, modification date).
4. Generate summaries and categorizations using LLMs.
5. Edit summaries and categorizations with optional comments.
6. Accept or reject results with justification.
7. Version all changes.
8. Provide a dashboard with sorting, filtering, and CSV export.

### Out of Scope (Future Iterations)
- Integration with external storage platforms (e.g., SharePoint, Google Drive).
- Batch uploads or bulk operations.
- Advanced role-based permissions.
- API integrations and notifications.

## Project Status
- **Current Status**: In development
- **Planned Features**: API integrations, advanced security, and batch processing.

## License
This project is licensed under the [MIT License](LICENSE).

