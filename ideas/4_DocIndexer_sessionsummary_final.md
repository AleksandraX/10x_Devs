### Podsumowanie kluczowych ustaleń dla DocIndexer (MVP)

#### 1. Użytkownicy i przypadki użycia

* **Profil użytkownika:** Eksperci domenowi z branż oil & gas, energy renewables, maritime. Przeciętny poziom techniczny, oczekują prostoty i intuicyjności.
* **Typy dokumentów:** Raporty, umowy oraz standardy pochodzące od wielu osób i zewnętrznych źródeł.

#### 2. Funkcjonalności MVP

* **Upload dokumentów:** Możliwość wgrania do 5 dokumentów jednocześnie (docelowo batch upload do rozważenia na przyszłość).
* **Parsowanie i konwersja:** Automatyczne przetwarzanie PDF do markdown.
* **Metadane:** Wyciąganie metadanych – nazwa, data, edytujący, kategoria, domena oraz opcjonalny komentarz użytkownika.
* **Summary i kategoryzacja:** Generowanie podsumowania (max 2 strony A4) i kategoryzacji za pomocą LLM, z możliwością edycji przez użytkownika.
* **Akceptacja i wersjonowanie:** Zatwierdzanie zmian przez użytkownika, śledzenie pełnej historii wersji summary i metadanych.
* **Historia dokumentów:** Widok tabelaryczny, możliwość sortowania i podglądu szczegółów (modal summary, metadane).
* **Rejestracja i logowanie:** Prosty mechanizm, otwarty dostęp.
* **Eksport danych:** Możliwość eksportu widoku dashboardu (z summary, metadanymi, kategorią) do formatu csv.
* **Błędy i logowanie:** Informacja dla użytkownika + logowanie błędów w bazie.

#### 3. Kryteria sukcesu i mierniki

* **Statystyki:** Prowadzenie statystyk akceptacji, odrzuceń i edycji summary/kategoryzacji.
* **Kompletna edycja:** >50% zmiany summary lub/i >50% zmiany metadanych.
* **Wydajność:** Obsługa do 5 dokumentów naraz, do 15 requestów/minutę.

#### 4. Ograniczenia MVP

* **Brak integracji z zewnętrznymi platformami na starcie.**
* **Brak panelu administracyjnego, raportowania, powiadomień i zaawansowanych zabezpieczeń.**
* **Brak wsparcia dla innych języków niż angielski.**
* **Maksymalna wielkość pliku PDF: 1000 stron, 50 MB.**

#### 5. Zalecenia projektowe

* Precyzyjnie zdefiniować flow edycji i akceptacji z wersjonowaniem.
* Określić szczegółową specyfikację historii dokumentów oraz eksportu.
* Zadbać o prostotę i intuicyjność UI.
* Wprowadzić sekcję FAQ oraz krótki przewodnik po aplikacji.
* Zaplanować politykę logowania błędów oraz możliwość ich późniejszego przeglądu.
* Zachować elastyczność pod kątem przyszłych integracji (API-first).
