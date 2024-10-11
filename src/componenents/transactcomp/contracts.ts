const clickContractAddress = '0x67c97D1FB8184F038592b2109F854dfb09C77C75';
const voteContractAddress = '0xc580cddC83a0A3d5766949A0c77b95eE9C37dB40';
const clickContractAbi = [
    {
        type: 'function',
        name: 'click',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const;

const voteContractAbi = [
	{
		inputs: [
			{
				"internalType": "string",
				"name": "_userChoice",
				"type": "string"
			}
		],
		name: "addVote",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "PassAParam",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "showAddressVoteFunc",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalA",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalB",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalC",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const

export const contracts = [
    {
        address: voteContractAddress,
        abi: voteContractAbi,
        functionName: 'addVote',
        args: ['A'],
    },
];