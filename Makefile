BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/app
S3_PUBLICATION_DIR=$(BASEDIR)/deploy
S3_BUCKET=aapkidilli.org


help:
	@echo 'Makefile for a deploying Web site to s3 bucket                         '
	@echo '                                                                       '
	@echo 'Usage:                                                                 '
	@echo '   make compress              compress static assets                   '
	@echo '   make s3_gzip_upload        upload the web site to s3 bucket     	  '
	@echo '   make staging               upload the web site to staging bucket    '
	@echo ' 																	  '


compress: 
	python tools/aws-s3-gzip-compression.py $(INPUTDIR) $(S3_PUBLICATION_DIR)

s3_gzip_upload: compress
	s3cmd sync $(S3_PUBLICATION_DIR)/ s3://$(S3_BUCKET) --acl-public --add-header \
      "Content-Encoding:gzip" --mime-type="application/javascript; charset=utf-8" \
      --add-header "Cache-Control: max-age 86400" --exclude '*' --include '*.js' && \
    s3cmd sync $(S3_PUBLICATION_DIR)/ s3://$(S3_BUCKET) --acl-public --add-header \
      "Content-Encoding:gzip" --mime-type="text/css; charset=utf-8" --add-header \
      "Cache-Control: max-age 86400" --exclude '*' --include '*.css' && \
    s3cmd sync $(S3_PUBLICATION_DIR)/ s3://$(S3_BUCKET) --acl-public --add-header \
      "Content-Encoding:gzip" --mime-type="text/html; charset=utf-8" --exclude '*' \
      --include '*.html' && \
    s3cmd sync $(S3_PUBLICATION_DIR)/ s3://$(S3_BUCKET) --acl-public --delete-removed


