#!/bin/bash

generate() {
  local target_dir="$1"
  local target_file="$2"
  local args_name="$3"

  files=($(ls $target_dir))
  cat /dev/null > $target_file
  
  echo "// This file is dynamically generated from pre-build script. Proceed with cautions when manually edit something!
let ${args_name} = [" >> $target_file

  # Iterate through the file names and add them to the JavaScript array
  for file in "${files[@]}"; do
    echo "  \"$file\", " >> $target_file
  done

  # Close the JavaScript array
  echo "];" >> $target_file
}

generate "static/images/weebos_avif" "assets/js/image-array.js" "imgArray"
generate "static/images/title" "assets/js/titleimg-array.js" "titleimgArray"
generate "static/images/titlegallery" "assets/js/titlegallery-array.js" "galleryArray"
