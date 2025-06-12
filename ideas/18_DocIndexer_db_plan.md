Jesteś architektem baz danych, którego zadaniem jest stworzenie schematu bazy danych PostgreSQL na podstawie informacji dostarczonych z sesji planowania, dokumentu wymagań produktu (PRD) i stacku technologicznym. Twoim celem jest zaprojektowanie wydajnej i skalowalnej struktury bazy danych, która spełnia wymagania projektu.

1. <prd>
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
3. Formularz uploadu maks. 1 PDF(zmiana na z 5 na 1) (łącznie ≤ 50 MB, ≤ 1000 stron na plik).  
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


</prd>

Jest to dokument wymagań produktu, który określa cechy, funkcjonalności i wymagania projektu.

2. <session_notes>
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
</session_notes>

Są to notatki z sesji planowania schematu bazy danych. Mogą one zawierać ważne decyzje, rozważania i konkretne wymagania omówione podczas spotkania.

3. <tech_stack>
# Analiza Tech Stack dla DocIndexer

## Proponowany Stack
- **Frontend**: React  
- **Backend**: Python z FastAPI  
- **Modele AI**:  
  - Mistral7B OCR do konwersji PDF → Markdown  
  - Model 4.1 do generowania streszczeń i wyciągania metadanych  
- **Przechowywanie danych**:  
  - Blob storage dla dokumentów i markdownów  
  - Dowolna baza danych dla metadanych i summary  

---

## Analiza

### 1. Czy technologia pozwoli nam szybko dostarczyć MVP?
- **React**: Popularny framework frontendowy, dobrze wspierany przez społeczność, co pozwala na szybkie tworzenie interfejsów użytkownika.  
- **FastAPI**: Lekki framework backendowy w Pythonie, idealny do szybkiego prototypowania API.  
- **Mistral7B OCR i Model 4.1**: Modele AI mogą przyspieszyć proces generowania wyników, ale ich integracja i optymalizacja mogą być czasochłonne.  
- **Blob storage i baza danych**: Proste w implementacji, ale wymagają konfiguracji pod kątem wydajności i bezpieczeństwa.  

**Wniosek**: Stack pozwala na szybkie dostarczenie MVP, ale integracja modeli AI może wydłużyć czas wdrożenia.

---

### 2. Czy rozwiązanie będzie skalowalne w miarę wzrostu projektu?
- **React i FastAPI**: Oba narzędzia są skalowalne, ale FastAPI może wymagać dodatkowych optymalizacji przy dużym obciążeniu.  
- **Blob storage**: Skalowalne rozwiązanie do przechowywania plików, ale może generować wysokie koszty przy dużej liczbie dokumentów.  
- **Modele AI**: Skalowalność zależy od infrastruktury (np. GPU/TPU) i optymalizacji modeli.  

**Wniosek**: Rozwiązanie jest skalowalne, ale wymaga odpowiedniego zarządzania infrastrukturą i kosztami.

---

### 3. Czy koszt utrzymania i rozwoju będzie akceptowalny?
- **React i FastAPI**: Niskie koszty utrzymania, szeroka dostępność programistów.  
- **Modele AI**: Wysokie koszty związane z infrastrukturą obliczeniową (np. GPU) oraz potencjalne opłaty za API modeli.  
- **Blob storage i baza danych**: Koszty zależą od ilości przechowywanych danych i liczby operacji.  

**Wniosek**: Koszty mogą być akceptowalne na etapie MVP, ale wzrosną wraz z rozwojem projektu.

---

### 4. Czy potrzebujemy aż tak złożonego rozwiązania?
- **Modele AI**: Wykorzystanie dwóch modeli (OCR i generowanie streszczeń) może być nadmiarowe na etapie MVP. Prostsze podejście, np. wykorzystanie jednego modelu, mogłoby obniżyć złożoność.  
- **Blob storage i baza danych**: Rozdzielenie przechowywania dokumentów i metadanych jest sensowne, ale może być uproszczone w MVP.  

**Wniosek**: Rozwiązanie jest złożone, ale można je uprościć na potrzeby MVP.

---

### 5. Czy nie istnieje prostsze podejście, które spełni nasze wymagania?
- Zamiast dwóch modeli AI, można rozważyć wykorzystanie jednego modelu, który obsłuży zarówno OCR, jak i generowanie streszczeń.  
- Zamiast Blob storage, można tymczasowo przechowywać dokumenty w bazie danych lub lokalnym systemie plików.  

**Wniosek**: Istnieją prostsze podejścia, które mogą spełnić wymagania MVP.

---

### 6. Czy technologie pozwolą nam zadbać o odpowiednie bezpieczeństwo?
- **React i FastAPI**: Wspierają standardowe mechanizmy bezpieczeństwa (np. TLS, uwierzytelnianie).  
- **Blob storage**: Wymaga odpowiedniej konfiguracji dostępu i szyfrowania.  
- **Modele AI**: Przetwarzanie danych wrażliwych wymaga dodatkowych zabezpieczeń (np. anonimizacja danych).  

**Wniosek**: Technologie pozwalają zadbać o bezpieczeństwo, ale wymagają odpowiedniej konfiguracji.

---

## Podsumowanie
Proponowany stack jest odpowiedni do realizacji MVP, ale wymaga optymalizacji i uproszczeń, aby przyspieszyć wdrożenie i obniżyć koszty. Kluczowe rekomendacje to:
1. Rozważyć uproszczenie modeli AI (np. wykorzystanie jednego modelu).  
2. Tymczasowo uprościć przechowywanie danych (np. rezygnacja z Blob storage na rzecz lokalnego systemu plików).  
3. Skupić się na podstawowych funkcjonalnościach, a zaawansowane elementy (np. skalowalność) wdrażać w kolejnych iteracjach.
</tech_stack>

Opisuje stack technologiczny, który zostanie wykorzystany w projekcie, co może wpłynąć na decyzje dotyczące projektu bazy danych.

Wykonaj następujące kroki, aby utworzyć schemat bazy danych:

1. Dokładnie przeanalizuj notatki z sesji, identyfikując kluczowe jednostki, atrybuty i relacje omawiane podczas sesji planowania.
2. Przejrzyj PRD, aby upewnić się, że wszystkie wymagane funkcje i funkcjonalności są obsługiwane przez schemat bazy danych.
3. Przeanalizuj stack technologiczny i upewnij się, że projekt bazy danych jest zoptymalizowany pod kątem wybranych technologii.

4. Stworzenie kompleksowego schematu bazy danych, który obejmuje
   a. Tabele z odpowiednimi nazwami kolumn i typami danych
   b. Klucze podstawowe i klucze obce
   c. Indeksy poprawiające wydajność zapytań
   d. Wszelkie niezbędne ograniczenia (np. unikalność, not null)

5. Zdefiniuj relacje między tabelami, określając kardynalność (jeden-do-jednego, jeden-do-wielu, wiele-do-wielu) i wszelkie tabele łączące wymagane dla relacji wiele-do-wielu.

6. Opracowanie zasad PostgreSQL dla zabezpieczeń na poziomie wiersza (RLS), jeśli dotyczy, w oparciu o wymagania określone w notatkach z sesji lub PRD.

7. Upewnij się, że schemat jest zgodny z najlepszymi praktykami projektowania baz danych, w tym normalizacji do odpowiedniego poziomu (zwykle 3NF, chyba że denormalizacja jest uzasadniona ze względu na wydajność).

Ostateczny wynik powinien mieć następującą strukturę:
```markdown
1. Lista tabel z ich kolumnami, typami danych i ograniczeniami
2. Relacje między tabelami
3. Indeksy
4. Zasady PostgreSQL (jeśli dotyczy)
5. Wszelkie dodatkowe uwagi lub wyjaśnienia dotyczące decyzji projektowych
```

W odpowiedzi należy podać tylko ostateczny schemat bazy danych w formacie markdown, który zapiszesz w pliku .ai/db-plan.md bez uwzględniania procesu myślowego lub kroków pośrednich. Upewnij się, że schemat jest kompleksowy, dobrze zorganizowany i gotowy do wykorzystania jako podstawa do tworzenia migracji baz danych.