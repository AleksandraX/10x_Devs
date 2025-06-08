# Dokument wymagań produktu (PRD) – DocIndexer

## 1. Przegląd produktu
DocIndexer to aplikacja webowa, która umożliwia domenowym ekspertom (oil & gas, energy, maritime) szybkie porządkowanie rozproszonych plików PDF. Użytkownik wgrywa maksymalnie 5 dokumentów jednocześnie (do 1000 stron, 50 MB każdy). System konwertuje PDF do markdown, wyciąga kluczowe metadane, generuje streszczenie i kategoryzację z wykorzystaniem LLM. Użytkownik może edytować wyniki, zaakceptować je lub odrzucić z uzasadnieniem. Wszystkie wersje zmian są zapisywane, a dashboard prezentuje pełną historię dokumentów z możliwością sortowania, podglądu szczegółów i eksportu CSV.  

## 2. Problem użytkownika
Eksperci domenowi posiadają tysiące specjalistycznych plików rozrzuconych w różnych lokalizacjach.  
• Trudno jest ręcznie identyfikować typ, treść i ważność każdego dokumentu.  
• Brak szybkiego sposobu na streszczenie i sklasyfikowanie materiału w zrozumiały sposób.  
• Użytkownicy o przeciętnych kompetencjach technicznych potrzebują prostego interfejsu, który nie wymaga nauki złożonych narzędzi klasyfikacyjnych.  

## 3. Wymagania funkcjonalne
1. Rejestracja konta przez formularz (email + hasło, brak ograniczenia domeny).  
2. Logowanie i sesje użytkownika (timeout 30 min).  
3. Formularz uploadu maks. 5 PDF (łącznie ≤ 50 MB, ≤ 1000 stron na plik).  
4. Konwersja PDF → markdown.  
5. Ekstrakcja metadanych: nazwa pliku, data utworzenia, data modyfikacji, edytujący, poziom zabezpieczenia (jeśli zawarte).  
6. Generowanie streszczenia (≤ 4400 znaków ≈ 2 strony A4) oraz kategoryzacji z LLM.  
7. Edycja streszczenia/kategorii i opcjonalny komentarz (≤ 1000 znaków).  
8. Akceptacja lub odrzucenie wyniku; przy odrzuceniu wymagane uzasadnienie.  
9. Wersjonowanie wszystkich zmian; historia niewidoczna dla użytkownika, ale zapisywana technicznie.  
10. Dashboard z tabelą dokumentów (sortowanie, filtry, widok modal szczegółów).  
11. Eksport listy dokumentów z metadanymi i streszczeniami do CSV z dashboardu.  
12. Komunikaty o błędach; logowanie błędów w bazie.  
13. Sekcja FAQ i formularz kontaktowy (wysyłka mailowa).  
14. Ograniczenia bezpieczeństwa: dane trzymane do momentu trwałego usunięcia przez użytkownika; rate limit 15 żądań/minutę.  

## 4. Granice produktu
Elementy poza zakresem MVP:  
• Integracje z zewnętrznymi platformami przechowywania (SharePoint, Google Drive itp.).  
• Automatyczne wyciąganie danych ustrukturyzowanych z dokumentu.  
• Klasyfikacja samych danych (np. wyodrębnione tabele).  
• Batch upload > 5 pliki lub masowe operacje.  
• Zaawansowana polityka uprawnień (role, panel admina).  
• Szyfrowanie zgodne ze specyfikacją bezpieczeństwa dokumentu (tylko podstawowe TLS i hash haseł).  
• Powiadomienia, webhooki, integracje API (planowane w kolejnych iteracjach).  

## 5. Historyjki użytkowników
| ID | Tytuł | Opis | Kryteria akceptacji |
|----|-------|------|---------------------|
| US-001 | Rejestracja konta | Jako nowy użytkownik chcę założyć konto, aby uzyskać dostęp do aplikacji. | • Formularz wymaga e-maila i hasła • Po poprawnym przesłaniu konto zostaje utworzone • Użytkownik otrzymuje komunikat o sukcesie |
| US-002 | Logowanie | Jako zarejestrowany użytkownik chcę się zalogować, aby korzystać z funkcji aplikacji. | • Formularz przyjmuje poprawne dane • Niepoprawne hasło zwraca błąd • Sesja wygasa po 30 min braku aktywności |
| US-003 | Wgrywanie dokumentów | Jako użytkownik chcę wgrać do 5 plików PDF jednocześnie, aby rozpocząć ich analizę. | • Limit 5 plików, 50 MB łącznie • Przekroczenie limitu generuje błąd • Postęp uploadu widoczny w UI |
| US-004 | Konwersja do markdown | Jako użytkownik chcę, aby system automatycznie konwertował PDF na markdown, abym mógł zobaczyć czysty tekst. | • Każdy stronicowany PDF zostaje przetworzony • Markdown zapisany wraz z dokumentem • Błąd konwersji wyświetla komunikat |
| US-005 | Ekstrakcja metadanych | Jako użytkownik chcę zobaczyć kluczowe metadane, aby zorientować się w podstawowych informacjach o pliku. | • Wyświetlone są nazwa, data utworzenia, data modyfikacji, edytujący, poziom zabezpieczenia • Brak pola wyświetla „–” |
| US-006 | Generowanie streszczenia | Jako użytkownik chcę otrzymać streszczenie i kategorię LLM, abym szybciej zrozumiał zawartość. | • Streszczenie ≤ 4400 znaków • Kategoria pochodzi z ustalonego słownika • Czas generacji ≤ 60 sekund na plik |
| US-007 | Edycja wyników | Jako użytkownik chcę edytować streszczenie lub kategorię, aby poprawić niedokładności. | • Pole edycji wyświetla istniejący tekst • Ograniczenie 4400 znaków (streszczenie) i 1000 znaków (komentarz) • Zmiany zapisują się w wersjonowaniu |
| US-008 | Akceptacja wyników | Jako użytkownik chcę zaakceptować poprawne wyniki, aby oznaczyć proces jako zakończony. | • Kliknięcie „Akceptuj” zmienia status na „Zaakceptowane” • Brak dalszej edycji po akceptacji |
| US-009 | Odrzucenie wyników | Jako użytkownik chcę odrzucić niepoprawne wyniki, aby poinformować system o problemie. | • Kliknięcie „Odrzuć” wymaga komentarza (≥ 1 znak) • Status zmienia się na „Odrzucone” • Komentarz zapisywany w bazie |
| US-010 | Wersjonowanie | Jako użytkownik chcę, aby wszystkie zmiany były wersjonowane, abym mógł przywrócić poprzednią wersję w przyszłości. | • Każda zmiana tworzy nową wersję • System przechowuje pełne drzewo wersji • API zwraca wersję na żądanie |
| US-011 | Dashboard dokumentów | Jako użytkownik chcę widzieć listę swoich dokumentów z filtrami i sortowaniem, aby łatwo nimi zarządzać. | • Tabela pokazuje kolumny: nazwa, data, status, kategoria • Sortowanie po każdej kolumnie • Kliknięcie w wiersz otwiera modal |
| US-012 | Podgląd szczegółów | Jako użytkownik chcę zobaczyć szczegóły dokumentu w modalu, aby nie opuszczać listy. | • Modal wyświetla metadane, streszczenie, historię zmian • Zamknięcie modalu powraca do listy |
| US-013 | Eksport CSV | Jako użytkownik chcę wyeksportować listę dokumentów do CSV, aby udostępnić ją innym. | • Plik CSV zawiera kolumny zgodne z tabelą • Generacja dla bieżących filtrów • Pobieranie pliku działa w <5 s |
| US-014 | Obsługa błędów | Jako użytkownik chcę widzieć czytelne komunikaty błędów, abym wiedział, jak reagować. | • Każdy błąd ma unikatowy kod i opis • Błąd uploadu ≥ 1 szczegół przyczyny • Błędy zapisywane w logach |
| US-015 | Formularz kontaktowy | Jako użytkownik chcę wysłać wiadomość przez formularz kontaktowy, aby zgłosić problem. | • Formularz wymaga emaila i treści • Po wysłaniu pojawia się potwierdzenie • Wiadomość trafia na dedykowany adres support |
| US-016 | Kontrola limitu | Jako użytkownik chcę być chroniony przed przeciążeniem systemu, aby uniknąć spowolnień. | • System blokuje żądania powyżej 15/minutę • Użytkownik otrzymuje komunikat o limitach |
| US-017 | Usuwanie dokumentu | Jako użytkownik chcę usunąć dokument i powiązane dane, aby dbać o prywatność. | • Kliknięcie „Usuń” pyta o potwierdzenie • Po potwierdzeniu plik i wersje znikają z bazy • Usunięcie nieodwracalne |

## 6. Metryki sukcesu
• Wskaźnik akceptacji: ≥ 85 % wszystkich wygenerowanych streszczeń i kategoryzacji.  
• Średnia liczba dokumentów na użytkownika > 1 w ciągu 14 dni od rejestracji.  
• Czas konwersji + generowania (upload → wynik) ≤ 90 s dla 95 percentyla.  
• Udział „kompletnych edycji” (≥ 50 % zmian w streszczeniu lub metadanych) ≤ 15 % względem wszystkich streszczeń (pokazuje jakość automatyki).  
• Uptime aplikacji ≥ 99,5 % miesięcznie.  
• Średni czas odpowiedzi API < 5000 ms dla 95 percentyla.  
• Zgłoszenia błędów krytycznych < 2 % wszystkich sesji.

