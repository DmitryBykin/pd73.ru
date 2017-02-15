#!/bin/bash
scp -P 1979 *.html dmitry@pd73.ru:/home/web/pd73.ru/test
scp -P 1979 css/* dmitry@pd73.ru:/home/web/pd73.ru/test/css
scp -P 1979 js/* dmitry@pd73.ru:/home/web/pd73.ru/test/js
scp -P 1979 images/* dmitry@pd73.ru:/home/web/pd73.ru/test/images
