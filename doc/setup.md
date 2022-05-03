# GTFS-Display Setup

Use the following checklist to setup this service on
[Debian Bullseye](https://www.debian.org/releases/bullseye/)

* check out git repositories onto a development system and build the service for the production host as descirpted in the
[Quick Start Guide](../README.md#Quick-Start-Guide)

* enter project root folder to create archive of static web site and copy onto host system
```
cd <project root folder>
tar -czvf <archive name>.tar.gz build
scp -p <ssh port> <archive name>.tar.gz  <user>@<host>.<domain>:/home/<user>/
```

* set up service environment on host system
```
sudo mkdir -p /var/www/<archive name>
sudo tar -xzvf ~/<archive name>.tar.gz -C /var/www/<archive name>/
sudo mv /var/www/<archive name>/build/ /var/www/<archive name>/public_html
```
