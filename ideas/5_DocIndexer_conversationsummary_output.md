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