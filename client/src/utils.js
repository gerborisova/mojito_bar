const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_limes",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "getLimes",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_limes",
          type: "string",
        },
      ],
      name: "setLimes",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const contractAddress="0xFD471836031dc5108809D173A067e8486B9047A3";

  export  {ABI,contractAddress};