-- Migration: Create initial schema for DocIndexer
-- Purpose: This migration creates the initial database schema for the DocIndexer application, including tables for documents, categories, translations, error logs, and export events. Row Level Security (RLS) is enabled for all tables.

-- Create the "categories" table
CREATE TABLE categories (
    categoryid SERIAL PRIMARY KEY,
    categoryname VARCHAR(100) NOT NULL UNIQUE
);

-- Create the "documents" table
CREATE TABLE documents (
    documentid SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    uploaddate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modifieddate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    editor TEXT NOT NULL,
    domain TEXT,
    category INT REFERENCES categories(categoryid),
    language CHAR(2) NOT NULL,
    securitylevel TEXT,
    pagecount INT NOT NULL
);

-- Enable Row Level Security (RLS) for the "documents" table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for the "documents" table
CREATE POLICY select_documents ON documents
    FOR SELECT
    USING (true);

CREATE POLICY insert_documents ON documents
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY update_documents ON documents
    FOR UPDATE
    USING (true);

CREATE POLICY delete_documents ON documents
    FOR DELETE
    USING (true);

-- Create the "translations" table
CREATE TABLE translations (
    translationid SERIAL PRIMARY KEY,
    documentid INT REFERENCES documents(documentid),
    languagecode CHAR(2) NOT NULL,
    translatedsummary TEXT NOT NULL
);

-- Enable Row Level Security (RLS) for the "translations" table
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for the "translations" table
CREATE POLICY select_translations ON translations
    FOR SELECT
    USING (true);

CREATE POLICY insert_translations ON translations
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY update_translations ON translations
    FOR UPDATE
    USING (true);

CREATE POLICY delete_translations ON translations
    FOR DELETE
    USING (true);

-- Create the "errorlogs" table
CREATE TABLE errorlogs (
    errorid SERIAL PRIMARY KEY,
    documentid INT REFERENCES documents(documentid),
    errormessage TEXT NOT NULL,
    errortimestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    innerexception TEXT
);

-- Enable Row Level Security (RLS) for the "errorlogs" table
ALTER TABLE errorlogs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for the "errorlogs" table
CREATE POLICY select_errorlogs ON errorlogs
    FOR SELECT
    USING (true);

CREATE POLICY insert_errorlogs ON errorlogs
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY update_errorlogs ON errorlogs
    FOR UPDATE
    USING (true);

CREATE POLICY delete_errorlogs ON errorlogs
    FOR DELETE
    USING (true);

-- Create the "exportevents" table
CREATE TABLE exportevents (
    exportid SERIAL PRIMARY KEY,
    documentid INT REFERENCES documents(documentid),
    userid INT NOT NULL,
    exporttimestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS) for the "exportevents" table
ALTER TABLE exportevents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for the "exportevents" table
CREATE POLICY select_exportevents ON exportevents
    FOR SELECT
    USING (true);

CREATE POLICY insert_exportevents ON exportevents
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY update_exportevents ON exportevents
    FOR UPDATE
    USING (true);

CREATE POLICY delete_exportevents ON exportevents
    FOR DELETE
    USING (true);

-- Create indexes to improve query performance
CREATE INDEX idx_file_name ON documents(filename);
CREATE INDEX idx_category ON documents(category);