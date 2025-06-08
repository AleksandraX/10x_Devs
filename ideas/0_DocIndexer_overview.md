### Główny problem
Posiadamy baze wielu niezindentyfikowanych dokumentów, rozrzuconych po wielu serwisach do przechowywania, które z uwagi na swoją objętość i specjalistyczna domene są trudne do sklasyfikowania dla osoby spoza dziedziny której dotyczną.

### Najmniejszy zestaw funkcjonalności
- wgrywanie dokumentu
- parsowanie pdf na markdown
- wyciągnięcie metadanych dla tego dokumentu jak nazwa, data utworzenie, edycji, osoba edytująca, *poziom zabezpieczenia
- stworzenie summary dokumentu za pomocą LLM
- kategoryzacja za pomocą LLM
- rejestracja i logowanie
- akceptacja wyniku

### Co NIE wchodzi w zakres MVP
- integracja z platformami służącymi do przechowywania
- wyciąganie structured data
- klasyfikacja danych pochodzących z dokumentu
- upload danych poza aplikacje
- zabezpieczenie zgodnie z security dokumentu

### Kryteria sukcesu
- 85% wygenerowanych opisów i klasyfikacji jest akceptowanych przez użytkownika
- każdy zarejestrowany uzytkownik ma więcej niz 1 dokument (zakladamy, że pierwszy dokument to próba działania)