# Test task for Secret Company Ltd.

To run app on an ios simulator:
- If you have already installed Node on your system, make sure it is Node 8.3 or newer.
- `brew install node` - if needed
- Do `brew install watchman` or `sudo sysctl -w kern.maxfiles=5242880` and `sudo sysctl -w kern.maxfilesperproc=524288` if you don't want to install Watchman
- `npm i`
- `npm run ios`

Additional instructions how to run react-native app on a simulator, you can find [here](https://facebook.github.io/react-native/docs/0.56/getting-started)

You also can change card info (PAN number, Expiry date, CVV code) in `card-info.json` file at the root of the project.