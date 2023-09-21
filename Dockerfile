FROM httpd:2.4
LABEL maintainer="github.com/dpcalfola"


# Copy all files to apache htdocs
COPY ./ /usr/local/apache2/htdocs/

#  Execute apache
CMD ["httpd-foreground"]