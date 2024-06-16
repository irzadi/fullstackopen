```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: POST - asks for address of new_note_spa, request contains json data and the date
    server->>browser: 201 Created
``` 