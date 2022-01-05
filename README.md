# i-like-food

I do.

### Troubleshooting

"EADDRINUSE" on the server terminal: A process didn't shut down correctly.
We need to manually kill the server, see [here](https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d).

In the terminal kill all node processes by running `killall -9 node`.
If that doesn't fix it, get the process id of the process that is running on the port that is claimed to be in use by running `lsof -i tcp:6000`.
Then run `killall -9 {processId}`
