"Problem 70%" przy pracy z Bolt.new

"Problem 70%" odnosi się do zjawiska, gdy narzędzia generujące kod doskonale radzą sobie z pierwszymi 70% implementacji, ale napotykają trudności z pozostałymi 30%. Przejawia się to w następujący sposób:





Ograniczenia w złożoności - Bolt świetnie generuje podstawową strukturę aplikacji, ale ma problemy z implementacją złożonej logiki biznesowej



Trudności z customizacją - Modyfikacja wygenerowanego kodu pod specyficzne wymagania często wymaga znacznego nakładu pracy



Pułapka rozpędu - Po szybkim wygenerowaniu 70% aplikacji, istnieje pokusa kontynuowania w tym środowisku, mimo że to nieoptymalne



Kwestie najlepszych praktyk - Kod wygenerowany przez Bolt może nie uwzględniać najlepszych praktyk a ciężko mieć na tym kontrolę gdy generujemy całą aplikację “w kilku strzałach”

Stąd właśnie nasza rekomendacja, aby wykorzystywać Bolta do prototypowania zamiast próby wygenerowania kompletnego MVP.

Na zakończenie

Choć Bolt jest świetnym narzędziem do prototypowania, warto pamiętać o tzw. "problemie 70%" – w pewnym momencie rozwijania aplikacji napotkasz ograniczenia, i często efektywniej będzie zacząć samodzielnie od 0 - tak też zrobimy w dalszych lekcjach.