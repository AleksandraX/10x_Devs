<conversation_summary>
<decisions>
1. Pole "domena" w metadanych dokumentu nie będzie ograniczone do predefiniowanych wartości na etapie MVP.
2. Kategorie dokumentów będą przechowywane w osobnej tabeli jako referencje.
3. Język dokumentu będzie przechowywany jako kod języka (ISO 639-1, np. "en").
4. Zdarzenia eksportu do CSV będą powiązane zarówno z użytkownikiem, jak i dokumentami.
5. Logi błędów będą przechowywać czas, wiadomość i szczegóły techniczne (inner exception).
6. Pole "edytujący" w metadanych dokumentu będzie przechowywane jako tekst.
7. Wielojęzyczność w streszczeniach będzie obsługiwana w osobnej tabeli dla tłumaczeń.
8. System nie będzie obsługiwał logicznego usuwania dokumentów; usuwanie będzie fizyczne.
9. Indeksy będą tworzone tylko na najczęściej używanych polach wyszukiwania (nazwa pliku, kategoria).
10. Nie będzie potrzeby przechowywania dodatkowych danych o użytkownikach, takich jak ostatnia aktywność.
11. Komentarze użytkowników będą powiązane z odrzuceniem wyników, bez wersjonowania.
12. System będzie przechowywał informacje o czasie ostatniej modyfikacji metadanych dokumentu.
13. System będzie przygotowany do obsługi różnych poziomów dostępu do dokumentów w przyszłości.
14. Dane eksportowane do CSV będą logowane jako zdarzenia eksportu.
15. Liczba stron dokumentu będzie przechowywana w metadanych.

</decisions>

<matched_recommendations>
1. Utworzenie tabeli dla dokumentów z polami: `DocumentId`, `FileName`, `UploadDate`, `ModifiedDate`, `Editor`, `Domain`, `Category`, `Language`, `SecurityLevel`, `PageCount`.
2. Dodanie tabeli dla kategorii dokumentów z polami: `CategoryId`, `CategoryName`.
3. Wprowadzenie tabeli dla tłumaczeń streszczeń z polami: `TranslationId`, `DocumentId`, `LanguageCode`, `TranslatedSummary`.
4. Dodanie tabeli dla logów błędów z polami: `ErrorId`, `DocumentId`, `ErrorMessage`, `ErrorTimestamp`, `InnerException`.
5. Zaimplementowanie tabeli dla zdarzeń eksportu z polami: `ExportId`, `DocumentId`, `UserId`, `ExportTimestamp`.
6. Dodanie indeksów na polach: `FileName`, `Category`, aby poprawić wydajność wyszukiwania.
7. Zapewnienie integralności danych między tabelami dokumentów, metadanych, tłumaczeń i logów błędów za pomocą kluczy obcych.
8. Dokumentowanie decyzji projektowych dotyczących schematu bazy danych.

</matched_recommendations>

<database_planning_summary>
### Główne wymagania dotyczące schematu bazy danych
- Przechowywanie metadanych dokumentów, takich jak nazwa pliku, data utworzenia, data modyfikacji, edytujący, domena, kategoria, język, poziom zabezpieczenia i liczba stron.
- Obsługa kategorii dokumentów w osobnej tabeli dla łatwego zarządzania.
- Wielojęzyczność w streszczeniach realizowana za pomocą osobnej tabeli tłumaczeń.
- Logowanie zdarzeń eksportu i błędów w dedykowanych tabelach.

### Kluczowe encje i ich relacje
- **Documents**: Przechowuje podstawowe informacje o dokumentach.
- **Categories**: Referencje do kategorii dokumentów.
- **Translations**: Powiązane z dokumentami, przechowują tłumaczenia streszczeń.
- **ErrorLogs**: Powiązane z dokumentami, przechowują informacje o błędach.
- **ExportEvents**: Powiązane z dokumentami i użytkownikami, logują zdarzenia eksportu.

### Ważne kwestie dotyczące bezpieczeństwa i skalowalności
- Indeksy na polach `FileName` i `Category` dla optymalizacji wyszukiwania.
- Przygotowanie systemu do obsługi różnych poziomów dostępu w przyszłości.
- Klucze obce zapewniające integralność danych między tabelami.

### Nierozwiązane kwestie
- Brak szczegółowych wymagań dotyczących retencji danych.
- Potrzeba dalszej analizy w zakresie skalowalności przy dużej liczbie dokumentów.

</database_planning_summary>

<unresolved_issues>
1. Czy w przyszłości wymagane będzie partycjonowanie danych w przypadku dużej liczby dokumentów?
2. Jakie są szczegółowe wymagania dotyczące retencji danych, jeśli takie się pojawią?
</unresolved_issues>
</conversation_summary>