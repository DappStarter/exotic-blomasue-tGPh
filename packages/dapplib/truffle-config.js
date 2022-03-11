require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy raise random unit gesture option flock genuine'; 
let testAccounts = [
"0x0f8aabf31cf68812df8a4c6939f4821c8d94a545db02cb6065040b6a208f75c2",
"0x4e2711eb37a95fa7b8eb76fc5c6e8f6af969a32567c541cfa5985324c4025045",
"0x0ddc8c3dfbb17f6c57191f24abbbe8f319c535c5cb9a1d70c3f5500f2713478d",
"0xa0d03ca369a31407a8d36fbf1f64f98ea34625d1b337147b225df8380be3b7d8",
"0x7838b289cc2431674c118bae962a2692c55815080506263b84e7f879412318bc",
"0xd0400f6677d87540e048b4b30ed25fc23c7303c10826d4bf4a902214e20be856",
"0xa4e35a508018bfd106f9abc26c1acd3f098cc68866bf461c37b337f67149d1ea",
"0x39bab06dbe4199974e83be47294e5007e75c353ef419225cd60e1f96ea1e3831",
"0x5fab7530fd33a615b1e92fcd700bec659ff446fbc4b2bfe4c662575e270df93a",
"0xb5420cdd5a29023741f357c412657585ab60048d124c395044e69c4b5cec606f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

