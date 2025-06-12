<database_planning_output>
<pytania>
1. Jakie dokładnie metadane mają być przechowywane dla każdego dokumentu? Czy lista w PRD jest kompletna (np. nazwa pliku, data utworzenia, data modyfikacji, edytujący, poziom zabezpieczenia)?
Odp: nazwa pliku, data utworzenia, data modyfikacji, edytujący, poziom zabezpieczenia, domena ktorej dokument dotyczy, kategoria dokumentu np. faktura, raport, sprawozdanie finansowe, kontrakt, jezyk dokumentu

2. Czy wersjonowanie streszczeń i metadanych wymaga osobnej tabeli, czy można je przechowywać w tej samej tabeli z oznaczeniem wersji?
Odp: Na ten etap nie martwimy sie tym, ale w przyszlosci ta sama z wersja i data

3. Jakie są wymagania dotyczące historii zmian? Czy każda zmiana powinna być zapisywana z pełnym zestawem danych, czy tylko różnice?
Odp: w przyszlosci z pelnym zestawem danych, teraz omijamy ten punkt.

4. Czy użytkownicy mogą mieć różne poziomy dostępu do dokumentów (np. tylko do odczytu, edycji)? Jeśli tak, jakie są wymagania dotyczące zasad bezpieczeństwa na poziomie wierszy (RLS)?
Odp: Nie martwimy sie tym na mvp

5. Czy istnieją ograniczenia dotyczące liczby dokumentów na użytkownika? Jeśli tak, jakie?
Odp: nie

6. Jakie są wymagania dotyczące przechowywania komentarzy użytkowników przy odrzuceniu wyników? Czy komentarze powinny być wersjonowane?
Odp: nie, beda zlinkowane do konkretnego odrzucenia.

7. Czy eksport danych (np. do CSV) wymaga przechowywania dodatkowych informacji w bazie danych? 
Odp: Tak, event, ze bylo to zrzucone do csv.

8. Jakie są wymagania dotyczące indeksowania? Czy wyszukiwanie po nazwie pliku, dacie lub kategorii będzie częste?
Odp: po nazwie, kategorii

9. Czy planowane jest partycjonowanie danych w przypadku dużej liczby dokumentów? Jeśli tak, jakie kryteria partycjonowania są preferowane (np. użytkownik, data)?
Odp: na ten moment nie martwimy sie tym

10. Czy istnieją wymagania dotyczące przechowywania logów błędów? Jeśli tak, jakie dane powinny być logowane?
Odp: Powinien byc wpis w bazie danych, ze byl error

11. Czy system powinien obsługiwać usuwanie dokumentów i powiązanych danych? Jeśli tak, czy usunięcie ma być fizyczne czy logiczne (np. oznaczenie jako usunięte)?
Odp: jesli usuwamy dokument to i metadane

12. Jakie są wymagania dotyczące integralności danych między tabelami (np. dokumenty, metadane, statystyki)?
Odp: Metadane musza miec dokument, statystyki dokument lub/i metadane

13. Czy istnieją wymagania dotyczące limitów czasowych przechowywania danych (np. retencja danych)?
Odp: nie na ten moment

14. Czy system powinien obsługiwać wielojęzyczność w streszczeniach lub kategoriach? Jeśli tak, jak to wpłynie na strukturę danych?
Odp: Tak, w streszczeniach 

15. Czy istnieją dodatkowe wymagania dotyczące bezpieczeństwa, takie jak szyfrowanie danych w bazie?
Odp: nie na ten moment

</pytania>

<rekomendacje>
1. Utwórz osobną tabelę dla dokumentów, która będzie przechowywać podstawowe informacje, takie jak `DocumentId`, `FileName`, `UploadDate`, `OwnerId`.
2. Dodaj tabelę dla wersjonowania streszczeń i metadanych, z polami `VersionId`, `DocumentId`, `Summary`, `Category`, `VersionTimestamp`.
3. Wprowadź tabelę dla historii zmian, która będzie przechowywać informacje o każdej zmianie, takie jak `ChangeId`, `DocumentId`, `ChangedBy`, `ChangeType`, `ChangeTimestamp`.
4. Zaimplementuj zasady bezpieczeństwa na poziomie wierszy (RLS) w PostgreSQL, aby ograniczyć dostęp do dokumentów na podstawie `OwnerId` lub innych kryteriów.
5. Dodaj indeksy na często wyszukiwanych polach, takich jak `FileName`, `UploadDate`, `Category`, aby poprawić wydajność zapytań.
6. Rozważ partycjonowanie tabeli dokumentów na podstawie `OwnerId` lub `UploadDate`, aby poprawić skalowalność w przypadku dużej liczby danych.
7. Wprowadź tabelę dla logów błędów, z polami `ErrorId`, `UserId`, `DocumentId`, `ErrorMessage`, `ErrorTimestamp`.
8. Zapewnij mechanizm logicznego usuwania dokumentów, dodając pole `IsDeleted` do tabeli dokumentów i powiązanych tabel.
9. Wprowadź ograniczenia integralności danych, takie jak klucze obce między tabelami dokumentów, wersji i historii zmian.
10. Rozważ dodanie tabeli dla komentarzy użytkowników, z polami `CommentId`, `DocumentId`, `UserId`, `CommentText`, `CommentTimestamp`.
11. Zaimplementuj mechanizm retencji danych, który automatycznie usuwa stare dane po określonym czasie, jeśli jest to wymagane.
12. Jeśli wielojęzyczność jest wymagana, dodaj tabelę dla tłumaczeń streszczeń i kategorii, z polami `TranslationId`, `DocumentId`, `LanguageCode`, `TranslatedText`.
13. Zapewnij szyfrowanie wrażliwych danych w bazie, takich jak komentarze lub streszczenia, jeśli wymagają tego przepisy bezpieczeństwa.
14. Przeprowadź testy wydajnościowe, aby upewnić się, że struktura bazy danych spełnia wymagania dotyczące czasu odpowiedzi API.
15. Dokumentuj wszystkie decyzje projektowe dotyczące schematu bazy danych, aby ułatwić przyszłe iteracje i rozwój systemu.

</rekomendacje>
</database_planning_output>