# pollip-sensehat

Polls the Raspberry Pi for changes to the v4 or v6 IP addresses and prints details to SenseHat.

## instructions

* click: displays the IP (IPv6 by default)
* down: changes to display IPv4
* up: changes to display IPv6

## requirements

This app requires a Raspberry-Pi and the [sensehat](https://www.raspberrypi.org/products/sense-hat/) hardware.

Install node:
```
curl -sL https://deb.nodesource.com/setup_9.x | sudo bash -
sudo apt-get install nodejs -y
```

Update npm:
```
npm update -g npm
```

## dependencies

```
npm i
```

## enable service

The service script `pollip` is provided by the awesome
[node-startup](https://github.com/chovy/node-startup.git) (copied from
`node-app`).

```
sudo cp pollip /etc/init.d/
sudo update-rc.d pollip defaults
```
