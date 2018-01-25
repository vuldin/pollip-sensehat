# pollip

Polls the v4 and/or v6 for status changes, prints details to SenseHat

## instructions

click: displays the IP (IPv6 by default)
down: changes to display IPv4
up: changes to display IPv6

## requirements

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
