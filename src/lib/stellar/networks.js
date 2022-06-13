const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'explorer.acestream.org' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'testnet.explorer.acestream.org' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType}
