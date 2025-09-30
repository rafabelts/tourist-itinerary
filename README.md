# Info necesaria de los endpoints para el cliente

## Hotel

- **name**: Nombre del hotel
- **geoCode**: Coordenadas geográficas
  - latitude: Latitud
  - longitude: Longitud
- **address**: Dirección del hotel
  - postalCode: Código postal
  - lines: Líneas de dirección (array de strings)
- **rating**: Calificación del hotel
- **lastUpdate**: Última actualización de la información

## Actividades

- **type**: Tipo de actividad
- **name**: Nombre de la actividad
- **price**: Precio de la actividad
  - amount: Monto numérico
  - currencyCode: Código de moneda (ej: USD, EUR)
- **pictures**: URL de la imagen (solo una)
- **bookingLink**: Enlace para reservar
- **minimumDuration**: Duración mínima de la actividad

## Vuelos

- **id**: Identificador único del vuelo
- **price**: Precio total del vuelo
  - total: Precio total como string
  - currency: Código de moneda
- **itineraries**: Array de itinerarios (ida y/o vuelta)
  - **duration**: Duración total del itinerario
  - **segments**: Array de segmentos del vuelo
    - **from**: Código IATA del aeropuerto de origen
    - **to**: Código IATA del aeropuerto de destino
    - **departure**: Información de salida
      - iataCode: Código IATA del aeropuerto
      - terminal: Terminal de salida
      - at: Fecha y hora de salida (ISO string)
    - **arrival**: Información de llegada
      - iataCode: Código IATA del aeropuerto
      - terminal: Terminal de llegada
      - at: Fecha y hora de llegada (ISO string)
    - **airline**: Código de la aerolínea
    - **flightNumber**: Número de vuelo
    - **duration**: Duración del segmento
    - **stops** (opcional): Array de escalas
      - iataCode: Código IATA del aeropuerto de escala
      - duration: Duración de la escala
      - arrivalAt: Hora de llegada a la escala
      - departureAt: Hora de salida de la escala
