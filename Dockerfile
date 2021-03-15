FROM python:3.8-alpine

ENV PATH="/scripts:${PATH}"
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

# Node
#RUN apk add --update nodejs nodejs-npm npm
#RUN apk add --update npm
#COPY package.json .
#COPY .babelrc .
#COPY webpack.config.js .
#RUN npm install

#Python
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev
RUN apk add --update \
  build-base \
  cairo \
  cairo-dev \
  cargo \
  freetype-dev \
  gcc \
  gdk-pixbuf-dev \
  gettext \
  jpeg-dev \
  lcms2-dev \
  libffi-dev \
  musl-dev \
  mariadb-dev \
  openjpeg-dev \
  openssl-dev \
  pango-dev \
  poppler-utils \
  postgresql-client \
  postgresql-dev \
  py-cffi \
  python3-dev \
  krb5-dev \
  rust \
  tcl-dev \
  tiff-dev \
  tk-dev \
  zlib-dev
#RUN export PIP_DEFAULT_TIMEOUT=100
RUN pip install --upgrade pip
RUN pip install -r /requirements.txt
RUN apk del .tmp

RUN mkdir /ecom
COPY ./ecom /ecom
WORKDIR /ecom
COPY ./scripts /scripts

RUN chmod +x /scripts/*
RUN pwd

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

RUN adduser -D user
RUN chown -R user:user /vol
RUN chown -R user:user manage.py
RUN chmod 755 -R manage.py
RUN chmod 777 -R /vol/web

USER root

CMD ["entrypoint.sh"]
