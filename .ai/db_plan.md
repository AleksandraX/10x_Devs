# Database Schema for DocIndexer

## Tables

### Documents
- DocumentId: SERIAL PRIMARY KEY
- FileName: VARCHAR(255) NOT NULL
- UploadDate: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
- ModifiedDate: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
- Editor: TEXT NOT NULL
- Domain: TEXT
- Category: INT REFERENCES Categories(CategoryId)
- Language: CHAR(2) NOT NULL
- SecurityLevel: TEXT
- PageCount: INT NOT NULL

### Categories
- CategoryId: SERIAL PRIMARY KEY
- CategoryName: VARCHAR(100) NOT NULL UNIQUE

### Translations
- TranslationId: SERIAL PRIMARY KEY
- DocumentId: INT REFERENCES Documents(DocumentId)
- LanguageCode: CHAR(2) NOT NULL
- TranslatedSummary: TEXT NOT NULL

### ErrorLogs
- ErrorId: SERIAL PRIMARY KEY
- DocumentId: INT REFERENCES Documents(DocumentId)
- ErrorMessage: TEXT NOT NULL
- ErrorTimestamp: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
- InnerException: TEXT

### ExportEvents
- ExportId: SERIAL PRIMARY KEY
- DocumentId: INT REFERENCES Documents(DocumentId)
- UserId: INT NOT NULL
- ExportTimestamp: TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

## Relationships
- Documents to Categories: Many to One
- Translations to Documents: Many to One
- ErrorLogs to Documents: Many to One
- ExportEvents to Documents: Many to One

## Indexes
- CREATE INDEX idx_file_name ON Documents(FileName);
- CREATE INDEX idx_category ON Documents(Category);

## PostgreSQL Policies
- Row Level Security (RLS) may be implemented in the future for the Documents table to control access to documents at the user level.

## Additional Notes
- The database schema complies with the PRD requirements and session notes. Foreign keys are used to ensure data integrity. Indexes have been added to improve query performance.