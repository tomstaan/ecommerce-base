FROM python:3.7-alpine

ENV PATH="/scripts:${PATH}"

ARG DJANGO_ALLOWED_HOSTS
ARG DJANGO_SECRET_KEY
ARG DJANGO_CORS_ORIGIN_WHITELIST
ARG API_URL

ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
ENV DJANGO_CORS_ORIGIN_WHITELIST $DJANGO_CORS_ORIGIN_WHITELIST
ENV API_URL $API_URL

COPY ./requirements.txt /requirements.txt

RUN apk add --no-cache bash mariadb-dev python3-dev build-base 
RUN apk add --no-cache bash\
                       pkgconfig \
                       git \
                       gcc \
                       openldap \
                       libcurl \
                       gpgme-dev \
                       libc-dev \
    && rm -rf /var/cache/apk/*
RUN apk --no-cache add python3 \
                   # Pillow dependencies
                   jpeg-dev \
                   zlib-dev \
                   freetype-dev \
                   lcms2-dev \
                   openjpeg-dev \
                   tiff-dev \
                   tk-dev \
                   tcl-dev \
                   harfbuzz-dev \
                   fribidi-dev
RUN apk update && apk add g++ gcc
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-headers libffi-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN mkdir /ecom
COPY ./ecom /ecom
WORKDIR /ecom
COPY ./scripts /scripts

RUN chmod +x /scripts/*

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static
RUN adduser -D user
RUN chown -R user:user /vol
RUN chmod -R 755 /vol/web
USER user

CMD ["entrypoint.sh"]