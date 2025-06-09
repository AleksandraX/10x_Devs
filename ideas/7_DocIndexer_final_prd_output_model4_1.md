# Dokument wymagań produktu (PRD) - DocIndexer

## 1. Przegląd produktu

DocIndexer to aplikacja webowa, która umożliwia domenowym ekspertom (branże: oil & gas, energy, maritime) szybkie, zautomatyzowane klasyfikowanie i podsumowywanie specjalistycznych dokumentów PDF. Głównym celem produktu jest usprawnienie procesu identyfikacji, przeszukiwania i oceny nieuporządkowanych, rozproszonych dokumentów poprzez automatyzację parsowania, ekstrakcji metadanych, generowania podsumowań oraz klasyfikacji z użyciem LLM. System będzie oferował proste UX, wersjonowanie zmian i eksport danych, zapewniając bazową kontrolę nad dokumentami bez konieczności integracji z zewnętrznymi repozytoriami na etapie MVP.

## 2. Problem użytkownika

W organizacji istnieje wiele rozproszonych, niezidentyfikowanych dokumentów, których zawartość jest trudna do oceny przez osoby niebędące ekspertami w danej dziedzinie. Manualna klasyfikacja i przegląd dokumentów (np. raportów, umów, standardów) są czasochłonne, podatne na błędy i wymagają wiedzy eksperckiej. Użytkownicy potrzebują narzędzia, które pozwoli im szybko przesłać dokumenty, uzyskać automatycznie wygenerowane podsumowanie i kategoryzację oraz efektywnie zarządzać własną kolekcją plików.

## 3. Wymagania funkcjonalne

1. Rejestracja i logowanie użytkownika z możliwością otwartego dostępu.
2. Wgrywanie do 5 dokumentów PDF jednocześnie (maksymalnie 1000 stron i 50 MB na dokument).
3. Automatyczne parsowanie PDF do formatu markdown.
4. Ekstrakcja i prezentacja metadanych: nazwa, data utworzenia, data edycji, osoba edytująca, kategoria dokumentu, domena (np. oil & gas, maritime, energy), opcjonalny komentarz użytkownika (do 1000 znaków).
5. Generowanie podsumowania dokumentu (max 2 strony A4, ok. 4400 znaków) oraz kategoryzacji przy pomocy LLM.
6. Edycja podsumowania i kategoryzacji przez użytkownika, z możliwością dopisania komentarza.
7. Akceptacja lub odrzucenie wyników przez użytkownika; przy odrzuceniu obowiązkowe uzasadnienie.
8. Zapis każdej wersji summary/kategoryzacji i metadanych (wersjonowanie).
9. Dashboard z tabelą wszystkich dokumentów użytkownika, możliwością sortowania i podglądu szczegółów w modalu.
10. Eksport listy dokumentów wraz z metadanymi i podsumowaniami do pliku CSV.
11. Prezentacja komunikatów o błędach; logowanie błędów w bazie.
12. Sekcja FAQ i formularz kontaktowy dla użytkownika.

## 4. Granice produktu

- Brak integracji z zewnętrznymi platformami do przechowywania dokumentów w MVP.
- Brak funkcji ekstrakcji twardych (structured) danych z treści dokumentu.
- Brak klasyfikacji danych szczegółowych wyjętych z dokumentu.
- Brak możliwości przesyłania dokumentów poza aplikację.
- Brak zaawansowanych zabezpieczeń i integracji bezpieczeństwa (poziom zabezpieczenia w metadanych jedynie do prezentacji, nie wymuszany przez system).
- Brak panelu administracyjnego i systemu powiadomień.
- Przechowywanie dokumentów i danych do momentu ich usunięcia przez użytkownika, bez historii wersji widocznej dla użytkownika (tylko do celów wewnętrznych).
- Maksymalna liczba jednoczesnych requestów: 15 na minutę.
- Jedyny język interfejsu: angielski.
- Brak zaawansowanego batch uploadu – jednocześnie max 5 dokumentów.

## 5. Historyjki użytkowników

### US-001
- Tytuł: Rejestracja nowego użytkownika
- Opis: Jako nowy użytkownik chcę mieć możliwość szybkiej rejestracji i logowania, aby uzyskać dostęp do wszystkich funkcji aplikacji.
- Kryteria akceptacji:
  - Możliwość utworzenia konta przez formularz.
  - Możliwość zalogowania się za pomocą loginu/hasła.
  - Po rejestracji/logowaniu użytkownik widzi swój dashboard.

### US-002
- Tytuł: Wgrywanie dokumentów PDF
- Opis: Jako użytkownik chcę wgrać jednocześnie do 5 dokumentów PDF, aby szybko rozpocząć ich analizę i klasyfikację.
- Kryteria akceptacji:
  - Możliwość wyboru i uploadu do 5 plików PDF jednocześnie.
  - Walidacja rozmiaru (max 50 MB) i liczby stron (max 1000).
  - W przypadku przekroczenia limitu pojawia się jasny komunikat o błędzie.

### US-003
- Tytuł: Automatyczne generowanie podsumowania i kategoryzacji
- Opis: Jako użytkownik chcę, by system automatycznie wygenerował podsumowanie i kategoryzację każdego wgranego dokumentu, abym mógł szybko ocenić jego zawartość.
- Kryteria akceptacji:
  - Po uploadzie system generuje summary (max 4400 znaków) i kategoryzację.
  - Summary i kategoria prezentowane są na liście dokumentów.

### US-004
- Tytuł: Przeglądanie i edycja podsumowania/kategorii
- Opis: Jako użytkownik chcę móc przeglądać, edytować podsumowanie i kategorie oraz dodawać komentarz, by dostosować wyniki do moich potrzeb.
- Kryteria akceptacji:
  - Dostępny widok szczegółowy (modal) summary, kategorii, metadanych.
  - Możliwość edycji summary, kategorii i dodania komentarza (max 1000 znaków).
  - Zmiany są zatwierdzane przyciskiem.

### US-005
- Tytuł: Akceptacja lub odrzucenie wyniku
- Opis: Jako użytkownik chcę zaakceptować lub odrzucić wygenerowane summary/kategorię, a w przypadku odrzucenia móc wpisać komentarz z uzasadnieniem.
- Kryteria akceptacji:
  - Funkcja akceptacji lub odrzucenia dla każdego dokumentu.
  - W przypadku odrzucenia pojawia się pole komentarza (obowiązkowe, max 1000 znaków).
  - Odrzucone summary/kategoria trafiają do poprawy lub są ponownie generowane.

### US-006
- Tytuł: Przegląd historii dokumentów i szczegółów
- Opis: Jako użytkownik chcę widzieć wszystkie swoje dokumenty w przejrzystej tabeli, sortować je oraz mieć szybki podgląd szczegółów w modalu.
- Kryteria akceptacji:
  - Lista dokumentów z metadanymi, summary i kategorią w formie tabeli.
  - Możliwość sortowania po kolumnach.
  - Możliwość otwarcia modala ze szczegółami.

### US-007
- Tytuł: Eksport listy dokumentów i podsumowań
- Opis: Jako użytkownik chcę mieć możliwość eksportu całej listy dokumentów z summary, metadanymi i kategorią do pliku CSV.
- Kryteria akceptacji:
  - Przyciski eksportu na dashboardzie.
  - Dane eksportowane do pliku CSV.
  - Plik zawiera kolumny: nazwa pliku, data, edytujący, kategoria, domena, summary, komentarz.

### US-008
- Tytuł: Obsługa błędów
- Opis: Jako użytkownik chcę otrzymywać jasne komunikaty w przypadku błędów, aby wiedzieć co się wydarzyło i jak mogę zareagować.
- Kryteria akceptacji:
  - W przypadku niepowodzenia uploadu, parsowania lub generowania summary pojawia się czytelny komunikat.
  - Wszystkie błędy są logowane w bazie dla administratora.

### US-009
- Tytuł: Wsparcie użytkownika
- Opis: Jako użytkownik chcę mieć łatwy dostęp do FAQ oraz formularza kontaktowego, aby szybko uzyskać pomoc.
- Kryteria akceptacji:
  - Sekcja FAQ dostępna z głównego menu.
  - Formularz kontaktowy umożliwiający zgłoszenie problemu.

### US-010
- Tytuł: Bezpieczny dostęp do aplikacji
- Opis: Jako użytkownik chcę, aby dostęp do moich dokumentów był ograniczony do mnie i aby nikt inny nie mógł ich podejrzeć.
- Kryteria akceptacji:
  - Po zalogowaniu użytkownik widzi tylko swoje dokumenty.
  - Nie ma dostępu do danych innych użytkowników.
  - Każda akcja wymaga aktywnej sesji użytkownika.

## 6. Metryki sukcesu

1. 85% generowanych podsumowań i klasyfikacji jest akceptowanych przez użytkowników.
2. Każdy zarejestrowany użytkownik posiada więcej niż jeden dokument (nie licząc pierwszego testowego).
3. Statystyki akceptacji, odrzuceń i edycji summary/kategoryzacji rejestrowane i raportowane w systemie.
4. Odrzucenia summary/kategorii są powiązane z obowiązkowym komentarzem użytkownika.
5. Brak poważnych błędów blokujących przepływ pracy użytkownika (ilość błędów krytycznych <1% wszystkich operacji).
6. Minimum 90% działań użytkownika (upload, edycja, eksport) zakończonych sukcesem bez potrzeby wsparcia.

