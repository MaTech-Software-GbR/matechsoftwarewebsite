import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(Test).tsx"]
}

export default config
