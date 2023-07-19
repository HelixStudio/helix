#!/bin/bash

# Set the target folder
target_folder="public"

# Use the find command to locate files containing "sw" or "workbox" in the target folder
files_to_remove=$(find "$target_folder" -type f -name "*sw*" -o -name "*workbox*")

# Use grep to filter files containing both "sw" and "workbox"
files_to_remove_filtered=""
while IFS= read -r file; do
    if ! echo "$file" | grep -q -E "sw.*workbox|workbox.*sw"; then
        files_to_remove_filtered+="$file"$'\n'
    fi
done <<< "$files_to_remove"

# Check if there are any files to remove
if [ -n "$files_to_remove_filtered" ]; then
    echo "The following files will be removed:"
    echo "$files_to_remove_filtered"

    # Prompt user for confirmation
    read -p "Do you want to proceed? (y/n): " confirmation

    # If user confirms, remove the files
    if [ "$confirmation" = "y" ]; then
        # Use the rm command to remove the files
        rm -f $files_to_remove_filtered
        echo "Files removed successfully!"
    else
        echo "Operation canceled by the user."
    fi
else
    echo "No files found with the specified keywords in the target folder."
fi
