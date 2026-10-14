# Scanwork

Scanwork is an interactive 3D visualization of centralized and decentralized crypto exchanges.

Each building represents an exchange. Building order, activity, labels, and information cards are driven by reported 24-hour trading volume and exchange metadata from CoinGecko and DefiLlama.

## Data behavior

- CEX data is requested from CoinGecko.
- DEX data is requested from DefiLlama and aggregated by protocol family.
- The interface uses a timestamped, verified local snapshot when a live provider is unavailable.
- Historical chart bars use reported exchange-volume history rather than generated values.

## Run locally

Serve this directory with any static HTTP server. For example:

```bash
python -m http.server 4192
```

Then open `http://127.0.0.1:4192/`.

## Social

X: https://x.com/scanworkdate

Contract address: 6S3QWehqS1RhuaVe6zTT2DwxW4AiE4u1cCJ6AMkSpump
