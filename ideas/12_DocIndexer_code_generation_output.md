# Prompt dla Generatora Proof of Concept

## Cel
Stworzenie Proof of Concept (PoC) aplikacji, która umożliwia opisanie dokumentu PDF na podstawie wgranego pliku PDF. PoC ma zweryfikować podstawową funkcjonalność aplikacji DocIndexer, bez implementacji nadmiarowych funkcji.

---

## Zakres funkcjonalności
1. **Upload dokumentu PDF**:  
   - Użytkownik może wgrać jeden plik PDF.  
   - Maksymalny rozmiar pliku: 10 MB.  
   - Maksymalna liczba stron: 50.  

2. **Konwersja PDF → Markdown**:  
   - Wygenerowanie tekstu w formacie markdown z treści dokumentu PDF.  

3. **Opis dokumentu**:  
   - Wygenerowanie krótkiego streszczenia (max 4400 znaków).  
   - Skategoryzowanie dokumentu: domena + typ dokumentu
   - Wyciągnięcie podstawowych metadanych:  
     - Nazwa pliku.  
     - Liczba stron.  
     - Data wgrania.
     - Twórca.  

4. **Prezentacja wyników**:  
   - Wyświetlenie markdowna, streszczenia i metadanych w prostym interfejsie użytkownika.  

5. |**Podgląd wszystkich wyników na dasboardzie**:
    - tabela sortowalna: nazwa, data, kategoria, summary po kliknięciu w modalu 
    - możliwośc exportu do csv.

---

## Wykluczone funkcje
- Rejestracja/logowanie użytkownika.  
- Wersjonowanie streszczeń i metadanych.  
- Edycja streszczenia lub metadanych.  
- Akceptacja/odrzucenie wyników.  
- Przechowywanie danych w bazie.  
- Eksport danych do csv.  
- Obsługa wielu dokumentów jednocześnie.  

---

## Stack technologiczny
1. **Backend**:  
   - **.NET Core**: API do obsługi uploadu plików i generowania wyników.  
   - **Azure Blob Storage**: Tymczasowe przechowywanie wgranego pliku PDF.  

2. **AI/Model**:  
   - **Mistral7B OCR**: Konwersja PDF → Markdown.  
   - **Model 4.1**: Generowanie streszczenia i wyciąganie metadanych.  

3. **Frontend**:  
   - **React**: Prosty interfejs użytkownika do uploadu pliku i prezentacji wyników.  

---

## Wymagania dla generatora
1. **Rozplanowanie pracy**:  
   - Przygotuj szczegółowy plan implementacji PoC, uwzględniając podział na etapy (np. backend, frontend, integracja modeli AI).  
   - Przedstaw plan do akceptacji przed rozpoczęciem implementacji.  

2. **Minimalizacja funkcji**:  
   - Skup się wyłącznie na podstawowej funkcjonalności opisanej w zakresie.  
   - Wyklucz wszystkie nadmiarowe funkcje.  

3. **Weryfikacja wyników**:  
   - Po zakończeniu każdego etapu pracy przedstaw wyniki do akceptacji.  

4. **Dokumentacja**:  
   - Dołącz krótką dokumentację opisującą sposób działania PoC oraz instrukcję uruchomienia.  

---

## Oczekiwany rezultat
Działający Proof of Concept, który umożliwia:  
1. Wgranie pliku PDF.  
2. Konwersję PDF na markdown.  
3. Wygenerowanie streszczenia i podstawowych metadanych.  
4. Wyświetlenie wyników w prostym interfejsie użytkownika.
