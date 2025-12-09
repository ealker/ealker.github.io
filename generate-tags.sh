#!/bin/bash

# Create tags directory if it doesn't exist
mkdir -p tags

# Find all unique tags from posts and links
echo "Generating tag pages..."

# Extract all tags from post front matter
grep -h "tags:" _posts/*.md 2>/dev/null | sed 's/tags: \[\(.*\)\]/\1/;s/tags: //;s/, / /g' | tr ' ' '\n' > all_tags.txt

# Extract all tags from links data file
if [ -f "_data/links.yml" ]; then
  grep "tags:" _data/links.yml | sed 's/.*tags: \[\(.*\)\]/\1/;s/, / /g' | tr ' ' '\n' >> all_tags.txt
fi

# Sort and get unique tags
sort all_tags.txt | uniq > all_tags_unique.txt
mv all_tags_unique.txt all_tags.txt

# Remove empty lines and spaces
sed -i '/^$/d' all_tags.txt
sed -i 's/^[ \t]*//;s/[ \t]*$//' all_tags.txt
sed -i 's/\[//g;s/\]//g' all_tags.txt

# Create a tag page for each tag
while read tag; do
  if [ ! -z "$tag" ]; then
    echo "Creating tag page for: $tag"
    
    # Create tag page files
    cat > "tags/${tag}.md" << EOF
---
layout: tag
title: "Tag: ${tag}"
tag: ${tag}
permalink: /tags/${tag}/
---
EOF
  fi
done < all_tags.txt

# Clean up
rm all_tags.txt

echo "Tag pages generated!"