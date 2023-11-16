# Good Old Twitter (almost 🥸) Clone

> Educational monorepo project with Golang/Buffalo server and TypeScript/React client.
> With Twitter-inspired functionality.

## First run in dev mode

- Install Golang 1.21+
- Install Buffalo CLI `go install github.com/gobuffalo/cli/cmd/buffalo@v0.18.14`
- `cd server` - setup server app
  - Make sure PostgreSQL is running
  - `cp .env.example .env` (check and modify if needed values from example env file)
  - Create DB `buffalo pop create -a` (check `server/database.yml` values)
- `cd client` - setup client
  - `npm i`
- `cd ../` - go to project root folder
- Install Overmind https://github.com/DarthSim/overmind#installation to run Procfiles
- Run all services `overmind s`
- Check services are working
  - http://localhost:3000 - server API
  - http://localhost:5000 - client frontend

## Local testing of Github Action workflows

- [Install Act tool](https://github.com/nektos/act?tab=readme-ov-file#installation)
- run in the project toot folder
  - `act -l` - list all workflows
  - `act push` - emulate push event, run corresponding workflows
  - `act -j test -W .github/workflows/server-test.yml` - run specific job in the specific file
