# HCD 2122

## User Needs
### Who?
In dit vak ging ik een applicatie maken voor een specifieke user met een beperking. Deze user is Marijn. Marijn heeft motorieke problemen waardoor hij soms moeite heeft door de web te navigeren. Het was aan mij de taak om iets specifiek voor Marijn te maken die overeenkomen met zijn wensen en gemaakt is zodat het zo makkelijk mogelijk wordt voor Marijn.

### What?
Marijn moet zo'n beetje elke dag via de NS site een trip boeken. Dit moet altijd een uur van te voren geplanned worden, zodat de NS rekening houdt met Marijn. Ik zal kijken om dit makkelijker te maken voor Marijn

### Why?
Het probleem is dat het navigeren op de NS site soms stroef gaat voor Marijn. Dingen zoals een locatie kiezen en de tijd bepalen kunnen op een makkelijkere manier gemaakt worden voor Marijn.

### How?
Ik zal iteratief gaan werken en elke keer mijn prototype testen met Marijn. Hierdoor weet ik waar ik op moet letten en krijg ik een beter idee van wat Marijn precies wilt.

## Het probleem en mijn oplossing
Het probleem nu is dat de NS site die Marijn gebruikt om een trip te plannen, niet Marijn in gedachte had in hun design. De naam van een locatie in typen of een kleine dropdown veld zijn net de dingen waar Marijn wat moeite heeft.

Mijn oplossing hiervoor is om alles zo makkelijk mogelijk voor Marijn te maken. Uit de eerste test sessie werd het mij duidelijk dat Marijn dagelijks een trip planned van zijn huis naar werk. Hierin zag ik de mogelijkheid om gewoon buttons te hebben die Marijn gelijk linken naar de NS site voor die specifieke trip, over een uur. Hij gaat ook vaak in de ochtend naar werk, dus hiervoor had ik ook een button toegevoegd.

Verder als Marijn een andere trip wilt plannen probeerde ik alle filter opties zo makkelijk mogelijk te maken. Het gaat hier dan vooral om dat er zoveel mogelijk grote buttons zijn. Dit maakt het makkelijker voor Marijn om te selecteren. Ook wilt hij niet altijd alles invullen, en liever dat er alvast iets voor hem is ingevuld. Hierdoor had ik altijd wanneer Marijn een andere trip wilt plannen, de dag van vandaag en een uur later dan de tijd op het moment geselecteerd. Nu hoeft hij alleen de locatie te veranderen en kan hij gelijk een trip plannen.

## Testen
### Test sessie 1
Voor de eerste testen wou ik vooral een nul meting doen. Ik ging verschillende input manieren laten zien aan Marijn om te kijken waar hij moeite mee heeft. Hiervoor had ik Marijn nooit eerder gezien, dus was ik vooral geinteresseerd om hem beter te leren kennen. Ook wou ik kijken waar Marijn momenteel moeite heeft tijdens het plannen van een trip.

#### Verwachtingen
Ik verwacht dat Marijn moeite zal hebben met elke input type waarin je moet typen, of een kleine dropdown menu moet klikken om iets te selecteren, ook zullen waarschijnlijk meerdere acties niet het meest handig zijn. Denk dat hij twee keer op iets moet klikken voordat het bevestigd wordt. Ik denk ook dat hij vaak tab zal gebruiken om te navigeren. Het goede met testen is dat ik kan weten of hij al oplossingen heeft die het makkelijker maken voor hem om te navigeren. Als dit het geval is kan ik hierom een oplossing bedenken.

#### Bevindingen
Zoals verwacht heeft Marijn moeite om elementen die een kleine menu of optie hebben te gebruiken. Iets typen ging ook niet super goed. Marijn zei dat hij liever grote buttons heeft om te navigeren door een site. Dit was achteraf wel voor de hand liggend, maar in eerste instantie zag ik dit niet in. 

Marijn wilt alles zo makkelijk mogelijk hebben. Des te minder stappen die hij moet ondernemen om zijn doel te bereiken, des te beter. Hierdoor dacht ik eraan om buttons te hebben die gelijk iets doen voor Marijn. Denk dan aan dat hij gelijk een trip kan boeken voor een trip morgen.

Marijn is niet iemand die ver in de toekomst plant. Hij zei dat hij maximaal een week van tevoren een trip plant. 

Hij neemt elke dag een trein van huis (Eindhoven) naar werk (Amsterdam) en omgekeerd. Soms plant hij een trip naar werk een dag vantevoren. Als hij naar werk of thuis gaat, dan wilt hij dit zo snel mogelijk doen. Hij moet een uur van te voren een trip plannen, zodat de NS weet dat hij komt en hem kan ondersteunen. Dus als hij zo snel mogelijk naar huis wilt gaan, moet dit een uur van te voren geplanned worden.

Verder is Marijn een fan van heavy metal, houdt van bier drinken en boeken lezen.

#### Volgende test sessie
Ik zal volgende keer een prototype proberen te maken waarin ik de standaard trips die Marijn maakt (van zijn huis naar werk en omgekeerd), als buttons toon die hij kan selecteren om gelijk een uur van te voren een trip kan maken. 
Wanneer hij een andere trip wilt maken dan kan hij de datum en locatie selecteren. Hierin zal ik proberen om grote buttons te maken voor de dagen die hij kan selecteren, zodat het net wat makkelijker wordt voor Marijn.

### Test sessie 2
Ik heb tijdens deze test sessie super veel inzichten gekregen. Dit keer probeerde ik minder vragen te stellen en gewoon te kijken naar waar hij tegenaan loopt tijdens het gebruiken van de app. Mijn design dit keer heeft grote buttons voorop en het is vooral gemaakt met het idee om het zo makkelijk mogelijk te maken voor Marijn, tijdens het navigeren van de app.

![hcd v2 1](https://user-images.githubusercontent.com/55801193/168197861-b0a81068-fb37-49ed-90d9-74ae88477d68.png)
![hcd v2 2](https://user-images.githubusercontent.com/55801193/168197868-9ecc4aa1-ca54-423b-9832-be7cd9d27fea.png)


#### Verwachtingen
Ik verwacht dat Marijn de buttons in de homepage zal apprecieren. Misschien dat hij wat gaat zeggen over de layout, maar ik denk wel dat hij de functionaliteit ervan handig zal vinden. Er zullen denk ik wel wat dingen zijn die beter kunnen, maar ik denk dat al in al ik een goed fundament heb.

#### Bevindingen
Wat Marijn aan het begin zei is waarom de buttons zo verspreid zijn van elkaar. Ik dacht hier niet helemaal aan en zag ook gelijk dat hij wat moeite heeft met het bewegen van zijn cursor naar de verschillende buttons. Het werd me snel duidelijk dat ik de buttons en alle elements wat meer moet groeperen. Voor hem was ook de huidige tijd niet belangrijk tijdens het kiezen van een trip, aangezien hij alleen een uur later pas de trip kan pakken. Dit kan ik dan als default value toepassen wanneer Marijn de pagina opent. Tijdens het kiezen van stations zei hij dat hij liever de grote stations bovenaan wilt en de kleinere onderaan. Hierdoor hoeft hij minder te scrollen wanneer hij een locatie selecteerd.

Wat ik ook zag is dat de standaard time input echt niet handig is voor Marijn. Ook al is de input groot, je kan de tijd alleen selecteren door een kleine icoon naast het input field te selecteren:

![input rtw](https://user-images.githubusercontent.com/55801193/168199101-ebbea3b8-2b09-43cd-9a00-d96df64b8fef.png)

Marijn zelf zei ook dat hij dit onhandig vindt, dus ik zal dit zeker voor de volgende keer proberen te verbeteren.

Hij wilt verder nog ook een button of optie hebben waardoor hij de locaties kan switchen. Ook vroeg hij mij om te denken aan standaard opties die voor hem zijn ingevuld, zodat hij minder dingen hoeft in te vullen.

#### Volgende test sessie
Ik zal voor de volgende keer proberen de layout veel meer compacter te maken. Dit was voor Marijn de grootste probleem van mijn design nu. Verder zal ik een manier bedenken om tijd selecteren makkelijker te maken voor Marijn, en een knop toevoegen die de locaties van de trein stations switcht. Naast dit zal ik  standaard voorgeselecteerde opties toevoegen en de styling verbeteren.

### Test sessie 3

