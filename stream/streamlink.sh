#!/bin/bash
echo Descargando stream...
# --retry-open 1 --retry-streams 1 = Sirven para checkear si el streamer
# esta en vivo en intervalos de 1 segundo

streamlink --retry-open 1 --retry-streams 1 --output ./stream/stream -f https://twitch.tv/mitroxfearx best

