# DocIndexer - Podsumowanie Sesji

## Pytania
1. **Czy przewiduje się możliwość masowego uploadu dokumentów (batch upload), czy upload zawsze pojedynczy?**  
Na ta chwile ograniczmy do 5 dokumentu, jesli nie bedzie to zbyt ciezkie na MVP.
2. **Jakie pola edycyjne są wymagane dla użytkownika podczas edycji summary i kategoryzacji?**  
   Mysle, ze nie powinien byc dluzszy niz 2 strony a4, dodajmy tez uzytkownikowi pole 'komenatrz', ktore bedzie moglo pochodzic tylko od niego. 
3. **Czy użytkownik po edycji summary/kategoryzacji ma zatwierdzić zmiany osobnym przyciskiem, czy zapis następuje automatycznie?**  
 Zawsze zatwierdza zmiany przyciskiem.
4. **Czy dostęp do aplikacji ma być ograniczony (np. poprzez zaproszenia), czy będzie otwarty dla każdego?**  
Otwarty dla kazdego
5. **Jakie dane i w jakim formacie mają być prezentowane w historii dokumentów?**  
   Tabela dokumentow z nazwa, data, kategoria i mozliwoscia sortowania, z mozliwoscia podgladu w modalu summary i metadanych. 
6. **Czy planowana jest rejestracja/monitorowanie nietypowych aktywności użytkowników?**  
   Nie
7. **Czy są oczekiwania dotyczące wydajności?**  
   Max 5 dokumentow na raz, na minute z 15 requestostów powinno móc chodzić rownoczesnie (nie musza sie skonczyc w tym samym czasie). 
8. **Czy przewidujecie okresowe czyszczenie bazy błędów/logów, czy retencja jest nieograniczona?**  
Nie na tym etapie
9. **Czy aplikacja wymaga jakiegokolwiek wsparcia dla użytkownika końcowego poza formularzem kontaktowym?**  
   FAQ to dobry pomysl 
10. **Czy aplikacja powinna umożliwiać eksport dokumentów lub summary do formatu poza markdown?**  
    Tak, tabele z widoku dashboard jako liste z metadanymi i summary i kategoria
11. **Czy przewidujecie integrację z systemem monitoringu wydajności lub health check?**  
   Nie 
12. **Jakiego typu testy akceptacyjne/produkcyjne są wymagane przed wdrożeniem MVP?**  
To MVP bvedzie testem akceptacyjno-produkcyjnym
13. **Jak rozumiana jest "kompletna edycja"?**  
    Edycja >50% tekstu summary lub/i 50% pól wyjętych z metadanych - nazwa pliku, osoby edytujące itp
14. **Czy w przyszłości możliwa będzie migracja danych użytkowników i dokumentów do innych systemów?**  
Moze. Bez znaczenia na ten moment
15. **Czy dla każdego dokumentu zapisujemy wszystkie wersje summary/kategoryzacji (historia zmian)?**  
Tak

---

## Rekomendacje
1. **Zdefiniować szczegółowy flow edycji summary/kategoryzacji**  
   Wraz z wersjonowaniem oraz sposobem zatwierdzania zmian przez użytkownika.  
2. **Dodać specyfikację historii dokumentów**  
   Widoki, poziom szczegółowości, opcje wyszukiwania, filtrowania oraz dostępność podsumowań wersji.  
3. **Określić granice, kiedy edycja jest traktowana jako „kompletna”**  
   I jej wpływ na ocenę efektywności systemu (np. KPI).  
4. **Dodać testy użyteczności UX oraz testy akceptacyjne**  
   Z udziałem ekspertów domenowych przed uruchomieniem MVP.  
5. **Przygotować i wdrożyć mechanizmy eksportu summary/klasyfikacji oraz metadanych dokumentów**  
   Do innych formatów – nawet w wersji podstawowej.  
6. **Uwzględnić w backlogu wstępną integrację z narzędziami monitorującymi stabilność i wydajność aplikacji**  
   Zwłaszcza na backendzie.  
7. **Opracować i wdrożyć politykę retencji logów oraz danych błędów**  
   Przejrzyście opisaną w dokumentacji.  
8. **Zadbać o elastyczność architektury**  
   Umożliwiającą łatwe dodawanie integracji (API-first) i migrację danych w przyszłości.  
9. **Przemyśleć funkcjonalność batch upload (masowe wgrywanie dokumentów)**  
   Nawet jeśli nie jest przewidziana na start – jako przyszłe usprawnienie.  
10. **Zapewnić minimalny poziom wsparcia użytkownika**  
    (krótki przewodnik w UI, link do kontaktu, sekcja FAQ).







