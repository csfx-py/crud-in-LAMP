# CRUD in LAMP stack

## Steps to set up LAMP stack

It may vary from distro to distro but the basic gist would be

- install Apache

- install php

- install MariaDb or any MySql based DB server

## Clone repo

- Clone the repo with `git clone` command using https/ssh link to desired location

- Place `api` folder in php projects folder (Usually `/srv/http/` or `/var/www`)

- Place `frontend` folder in any directory

## Project in action

- Set up DB server and create DB and table. The commands can be found in `api/db.sql`

- Fix the credentials to db in `api/config.php`

- Open `frontend/index.html` in browser