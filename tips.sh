# Print out a list of directories to be deleted:
find . -name 'node_modules' -type d -prune

#Delete directories from the current working directory:
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

# scans $PATH and greps for 'brew'
for cmd in $(echo $PATH | tr ":" "\n"); do ls -al $cmd 2>/dev/null; done | grep -i brew
