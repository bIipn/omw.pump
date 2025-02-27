export type OmwPump = {
    "version": "0.1.0",
    "name": "omw_pump",
    "instructions": [
      {
        "name": "createToken",
        "accounts": [
          {
            "name": "token",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mint",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "tokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "authority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "supply",
            "type": "u64"
          }
        ]
      },
      {
        "name": "transferTokens",
        "accounts": [
          {
            "name": "source",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destination",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "authority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    ]
  };
  
  export const IDL: OmwPump;