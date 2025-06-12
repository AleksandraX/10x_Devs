<database_planning_output>
<pytania>
1. Czy pole "domena" w metadanych dokumentu powinno być ograniczone do predefiniowanych wartości (np. lista domen: oil & gas, energy, maritime)?
Odp: na razie nie -> zbierzemy je wszystkie w trakcie dzialania i wtedy ograniczymy

2. Czy kategorie dokumentów (np. faktura, raport, sprawozdanie finansowe, kontrakt) powinny być przechowywane w osobnej tabeli jako referencje, aby umożliwić łatwe zarządzanie i rozszerzanie?
Odp: Tak

3. Czy język dokumentu powinien być przechowywany jako kod języka (np. ISO 639-1) czy pełna nazwa (np. "en" zamiast "English")?
Odp: en

4. Czy zdarzenia eksportu do CSV powinny być powiązane z użytkownikiem, który dokonał eksportu, czy wystarczy tylko powiązanie z dokumentem?
Odp: z userem i dokumentami. 

5. Czy logi błędów powinny przechowywać dodatkowe informacje, takie jak typ błędu, szczegóły techniczne (np. stack trace), czy tylko podstawowe dane (np. czas i opis)?
Odp: czas i msg, inner exception

6. Czy pole "edytujący" w metadanych dokumentu powinno być powiązane z tabelą użytkowników, czy wystarczy przechowywać nazwę użytkownika jako tekst?
Odp: text 

7. Czy wielojęzyczność w streszczeniach wymaga osobnej tabeli dla tłumaczeń, czy można przechowywać tłumaczenia w tej samej tabeli z oznaczeniem języka?
Odp: inna tabela

8. Czy system powinien obsługiwać usuwanie logiczne dokumentów (oznaczenie jako "usunięte") zamiast fizycznego usuwania, aby umożliwić późniejsze przywracanie?
Odp: Nie

9. Czy indeksy powinny być tworzone na wszystkich polach wyszukiwania (np. nazwa pliku, kategoria, język), czy tylko na najczęściej używanych?
Odp: Tylko na kategorii i nazwie

10. Czy istnieje potrzeba przechowywania dodatkowych danych o użytkownikach, takich jak ostatnia aktywność, liczba wgranych dokumentów, czy liczba odrzuceń?
Odp: Nie, zsumujemy to sobie jak bedzie potrzeba.

11. Czy system powinien obsługiwać wersjonowanie komentarzy użytkowników w przyszłości, czy wystarczy obecne powiązanie z odrzuceniem?
Odp: Powiazanie z odrzuceniem

12. Czy istnieje potrzeba przechowywania informacji o czasie ostatniej modyfikacji metadanych dokumentu?
Odp: Tak

13. Czy system powinien obsługiwać różne poziomy dostępu do dokumentów w przyszłości, nawet jeśli nie jest to wymagane w MVP?
Odp: Tak

14. Czy dane eksportowane do CSV powinny być przechowywane w bazie jako osobne rekordy, czy wystarczy logowanie zdarzenia eksportu?
Odp: zdarzenie exportu

15. Czy istnieje potrzeba przechowywania informacji o liczbie stron dokumentu w metadanych?
Odp: TAK!! TO BARDZO WAŻNE

</pytania>

<rekomendacje>
1. Utwórz tabelę dla dokumentów z polami: `DocumentId`, `FileName`, `UploadDate`, `ModifiedDate`, `Editor`, `Domain`, `Category`, `Language`, `SecurityLevel`.
2. Dodaj tabelę dla kategorii dokumentów z polami: `CategoryId`, `CategoryName`, aby umożliwić łatwe zarządzanie kategoriami.
3. Wprowadź tabelę dla tłumaczeń streszczeń z polami: `TranslationId`, `DocumentId`, `LanguageCode`, `TranslatedSummary`.
4. Dodaj tabelę dla logów błędów z polami: `ErrorId`, `DocumentId`, `ErrorType`, `ErrorMessage`, `ErrorTimestamp`.
5. Zaimplementuj tabelę dla zdarzeń eksportu z polami: `ExportId`, `DocumentId`, `UserId`, `ExportTimestamp`.
6. Dodaj indeksy na polach: `FileName`, `Category`, `Language`, aby poprawić wydajność wyszukiwania.
7. Wprowadź mechanizm logicznego usuwania dokumentów, dodając pole `IsDeleted` do tabeli dokumentów.
8. Zapewnij integralność danych między tabelami dokumentów, metadanych, tłumaczeń i logów błędów za pomocą kluczy obcych.
9. Rozważ przechowywanie liczby stron dokumentu w tabeli dokumentów, aby ułatwić przyszłe analizy.
10. Dokumentuj wszystkie decyzje projektowe dotyczące schematu bazy danych, aby ułatwić przyszłe iteracje i rozwój systemu.
11. Przygotuj strukturę bazy danych z myślą o przyszłym rozszerzeniu, np. dodaniu wersjonowania metadanych i komentarzy.
12. Przeprowadź testy wydajnościowe na indeksach, aby upewnić się, że spełniają wymagania dotyczące czasu odpowiedzi.
13. Zaimplementuj mechanizm logowania zdarzeń eksportu, aby umożliwić śledzenie aktywności użytkowników.
14. Rozważ dodanie tabeli dla użytkowników z polami: `UserId`, `UserName`, `LastActivity`, aby umożliwić przyszłe analizy aktywności.
15. Zapewnij możliwość łatwego rozszerzenia schematu bazy danych o nowe funkcje, takie jak historia zmian czy wersjonowanie komentarzy.

</rekomendacje>
</database_planning_output>