Jesteś doświadczonym menedżerem produktu, którego zadaniem jest stworzenie kompleksowego dokumentu wymagań produktu (PRD) w oparciu o poniższe opisy:

<project_description>
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
</project_description>

<project_details>
# DocIndexer - Podsumowanie Rozmowy

## Decyzje
1. **Profil użytkownika**: Domenowy ekspert (oil & gas, energy, maritime) o przeciętnych umiejętnościach technicznych.  
2. **Najczęstsze dokumenty**: Raporty, umowy i standardy pochodzące zarówno z wewnątrz, jak i z zewnątrz organizacji.  
3. **Upload dokumentów**: W MVP umożliwiono upload do 5 dokumentów jednocześnie, bez zaawansowanego batch uploadu.  
4. **Kluczowe metadane**: Nazwa, data, edytujący, kategoria dokumentu, domena, opcjonalny komentarz użytkownika.  
5. **Summary i kategoryzacja**: Generowane przez LLM, możliwa edycja przez użytkownika, ograniczenie długości summary do 2 stron A4 (ok 4400 znakow).  
6. **Akceptacja/odrzucenie**: Użytkownik akceptuje lub odrzuca wynik, uzasadniając odrzucenie.  
7. **Historia dokumentów**: Prezentowana w formie tabeli z możliwością sortowania i podglądu szczegółów w modalu.  
8. **Wersjonowanie**: Wszystkie zmiany summary i metadanych są zapisywane.  
9. **Rejestracja/logowanie**: Prosty mechanizm, aplikacja otwarta dla wszystkich.  
10. **Eksport danych**: Możliwy z poziomu dashboardu – jako lista dokumentów z metadanymi i summary.  
11. **Błędy**: Prezentowane użytkownikowi, zapisywane w bazie; przewidziana sekcja FAQ oraz formularz kontaktowy.  
12. **Ograniczenia**: Maksymalny rozmiar dokumentu: 1000 stron, 50 MB. Maksymalna liczba requestów: 15 na minutę.  
13. **Brak integracji**: W MVP brak integracji z zewnętrznymi systemami, powiadomień, panelu admina i zaawansowanych zabezpieczeń.  
14. **Przechowywanie danych**: Dane i dokumenty przechowywane wyłącznie do momentu usunięcia przez użytkownika.  

---

## Rekomendacje
1. **Zdefiniować szczegółowy flow edycji, akceptacji i wersjonowania summary/kategoryzacji.**  
2. **Opracować specyfikację historii dokumentów**: Widoki, opcje podglądu i sortowania.  
3. **Określić, kiedy edycja jest „kompletna”** i powiązać ją z mierzeniem efektywności systemu (KPI).  
4. **Zapewnić mechanizmy eksportu danych**: Dokumenty, summary, metadane z dashboardu.  
5. **Wdrożyć podstawowe wsparcie użytkownika**: FAQ, krótki przewodnik, formularz kontaktowy.  
6. **Opracować politykę logowania błędów** i ich prezentacji użytkownikom.  
7. **Zachować elastyczność architektury** pod przyszłe integracje i rozwój (API-first).  
8. **Przemyśleć przyszłe usprawnienia**: Batch upload i rozbudowa historii zmian.  

---

## Planowanie PRD

### Główne wymagania funkcjonalne:
- Możliwość rejestracji/logowania (prosty mechanizm, otwarty dostęp).  
- Wgrywanie do 5 dokumentów PDF naraz, konwersja do markdown.  
- Automatyczne wyciąganie i prezentacja metadanych oraz summary (z możliwością edycji).  
- Generowanie summary i klasyfikacji przez LLM, z opcją edycji przez użytkownika i komentarza.  
- Wersjonowanie summary/metadanych oraz przechowywanie historii wszystkich zmian.  
- Akceptacja lub odrzucenie summary i klasyfikacji, przy odrzuceniu – uzasadnienie od użytkownika.  
- Przejrzysty dashboard z tabelą dokumentów, możliwością sortowania i podglądu szczegółów w modalu.  
- Eksport listy dokumentów z metadanymi i summary do csv.
- Komunikaty o błędach dla użytkownika, logowanie błędów w bazie.  
- Sekcja FAQ i formularz kontaktowy.  

### Kluczowe historie użytkownika:
1. Użytkownik rejestruje się/loguje do systemu.  
2. Użytkownik wgrywa do 5 dokumentów PDF.  
3. System wyciąga metadane i generuje summary oraz klasyfikację.  
4. Użytkownik przegląda, edytuje i akceptuje/odrzuca summary oraz klasyfikację.  
5. Użytkownik przegląda historię swoich dokumentów, sortuje i podgląda szczegóły w modalu.  
6. Użytkownik eksportuje zestawienie dokumentów i podsumowań.  
7. Użytkownik otrzymuje komunikaty o błędach i ma dostęp do wsparcia (FAQ, kontakt).  

### Kryteria sukcesu:
- Minimum 85% generowanych summary i klasyfikacji akceptowanych przez użytkowników.  
- Każdy zarejestrowany użytkownik posiada więcej niż jeden dokument.  
- Statystyki akceptacji/odrzuceń i edycji summary/kategoryzacji rejestrowane w systemie.  
- Określenie „kompletnej edycji”: >50% zmiany summary lub/i >50% zmian metadanych.  

---

## Nierozwiązane kwestie
2. Potrzeba sprecyzowania, jak prezentowana będzie historia wersji (modal czy osobna sekcja). - Nie będziemny prezentowali historii userowi, to bedzie tylko informacja dla nas do poprawy na przyszlosc.
3. Nie zdefiniowano limitów długości komentarza użytkownika przy edycji - 1000 znakow
4. Brak szczegółowego opisu scenariusza akceptacji/odrzucenia (komunikacja z użytkownikiem po odrzuceniu). - uzytkownik pisze komenatrz dlaczego odrzucil, koniec.
5. Nie określono precyzyjnych wytycznych dot. przyszłego skalowania i integracji bezpieczeństwa. - bedzie po integracji z innymi systemami dzialalo jako automat.
</project_details>

Wykonaj następujące kroki, aby stworzyć kompleksowy i dobrze zorganizowany dokument:

1. Podziel PRD na następujące sekcje:
   a. Przegląd projektu
   b. Problem użytkownika
   c. Wymagania funkcjonalne
   d. Granice projektu
   e. Historie użytkownika
   f. Metryki sukcesu

2. W każdej sekcji należy podać szczegółowe i istotne informacje w oparciu o opis projektu i odpowiedzi na pytania wyjaśniające. Upewnij się, że:
   - Używasz jasnego i zwięzłego języka
   - W razie potrzeby podajesz konkretne szczegóły i dane
   - Zachowujesz spójność w całym dokumencie
   - Odnosisz się do wszystkich punktów wymienionych w każdej sekcji

3. Podczas tworzenia historyjek użytkownika i kryteriów akceptacji
   - Wymień WSZYSTKIE niezbędne historyjki użytkownika, w tym scenariusze podstawowe, alternatywne i skrajne.
   - Przypisz unikalny identyfikator wymagań (np. US-001) do każdej historyjki użytkownika w celu bezpośredniej identyfikowalności.
   - Uwzględnij co najmniej jedną historię użytkownika specjalnie dla bezpiecznego dostępu lub uwierzytelniania, jeśli aplikacja wymaga identyfikacji użytkownika lub ograniczeń dostępu.
   - Upewnij się, że żadna potencjalna interakcja użytkownika nie została pominięta.
   - Upewnij się, że każda historia użytkownika jest testowalna.

Użyj następującej struktury dla każdej historii użytkownika:
- ID
- Tytuł
- Opis
- Kryteria akceptacji

4. Po ukończeniu PRD przejrzyj go pod kątem tej listy kontrolnej:
   - Czy każdą historię użytkownika można przetestować?
   - Czy kryteria akceptacji są jasne i konkretne?
   - Czy mamy wystarczająco dużo historyjek użytkownika, aby zbudować w pełni funkcjonalną aplikację?
   - Czy uwzględniliśmy wymagania dotyczące uwierzytelniania i autoryzacji (jeśli dotyczy)?

5. Formatowanie PRD:
   - Zachowaj spójne formatowanie i numerację.
   - Nie używaj pogrubionego formatowania w markdown ( ** ).
   - Wymień WSZYSTKIE historyjki użytkownika.
   - Sformatuj PRD w poprawnym markdown.

Przygotuj PRD z następującą strukturą:

```markdown
# Dokument wymagań produktu (PRD) - {{app-name}}
## 1. Przegląd produktu
## 2. Problem użytkownika
## 3. Wymagania funkcjonalne
## 4. Granice produktu
## 5. Historyjki użytkowników
## 6. Metryki sukcesu
```

Pamiętaj, aby wypełnić każdą sekcję szczegółowymi, istotnymi informacjami w oparciu o opis projektu i nasze pytania wyjaśniające. Upewnij się, że PRD jest wyczerpujący, jasny i zawiera wszystkie istotne informacje potrzebne do dalszej pracy nad produktem.

Ostateczny wynik powinien składać się wyłącznie z PRD zgodnego ze wskazanym formatem w markdown, który zapiszesz w pliku .ai/prd.md