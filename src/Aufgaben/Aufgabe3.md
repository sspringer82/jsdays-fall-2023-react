# Aufgabe 3 - lade die Daten vom Server

In der List-Komponente:

* definiere einen lokalen State mit `const [persons, setPersons] = useState<Person[]>([])`
* lade die Daten vom Server mit `useEffect(() => {}, [])` und aktualisiere den State mit `setPersons`

Vorbedingungen:
- stelle sicher dass das Backend läuft (http://localhost:3001/persons)