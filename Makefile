.PHONY: build serve tags

# Generate tag pages and then build the site
build: tags
	bundle exec jekyll build

# Generate tag pages and serve the site locally
serve: tags
	bundle exec jekyll serve

# Generate tag pages
tags:
	./generate-tags.sh