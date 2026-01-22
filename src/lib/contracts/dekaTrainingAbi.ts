export const DEKA_ABI = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    name: 'MAX_PAGE_SIZE',
    inputs: [],
    outputs: [{ name: '', type: 'uint32', internalType: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'VERIFY_ATTEMPT_LIMIT',
    inputs: [],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'VERIFY_COOLDOWN',
    inputs: [],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'addNewTraining',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        internalType: 'uint256',
      },
      { name: 'timestamp', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'admin',
    inputs: [],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'changeAdmin',
    inputs: [{ name: 'newAdmin', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'changeMaxPageSize',
    inputs: [{ name: 'newMaxPageSize', type: 'uint32', internalType: 'uint32' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'changeVerifyAttemptLimit',
    inputs: [{ name: 'newLimit', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'changeVerifyCooldown',
    inputs: [{ name: 'newCooldown', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'deleteTraining',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'trainingIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'failedVerifyAttempts',
    inputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    outputs: [{ name: 'attemptNumber', type: 'uint8', internalType: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getLastGeneralTrainings',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      { name: 'count', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct BaseTrainingDeka.ZoneTrain[]',
        components: [
          {
            name: 'zone',
            type: 'uint8',
            internalType: 'enum BaseTrainingDeka.DekaZones',
          },
          {
            name: 'timeInSeconds',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256',
          },
          { name: 'index', type: 'uint256', internalType: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTotalTrainingsForZone',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTrainByUserAndIndex',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'trainingIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct BaseTrainingDeka.ZoneTrain',
        components: [
          {
            name: 'zone',
            type: 'uint8',
            internalType: 'enum BaseTrainingDeka.DekaZones',
          },
          {
            name: 'timeInSeconds',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256',
          },
          { name: 'index', type: 'uint256', internalType: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getUserBestTimeForZone',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
    ],
    outputs: [
      { name: '', type: 'uint256', internalType: 'uint256' },
      { name: '', type: 'uint256', internalType: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getUserId',
    inputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getZoneTrainingsPaginated',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      { name: 'page', type: 'uint32', internalType: 'uint32' },
      { name: 'pageSize', type: 'uint32', internalType: 'uint32' },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct BaseTrainingDeka.ZoneTrain[]',
        components: [
          {
            name: 'zone',
            type: 'uint8',
            internalType: 'enum BaseTrainingDeka.DekaZones',
          },
          {
            name: 'timeInSeconds',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256',
          },
          { name: 'index', type: 'uint256', internalType: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'lastVerifyAttempt',
    inputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'registerUser',
    inputs: [
      { name: 'idSignature', type: 'bytes', internalType: 'bytes' },
      { name: 'hashedPassword', type: 'string', internalType: 'string' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'registeredUsers',
    inputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    outputs: [{ name: 'userId', type: 'uint8', internalType: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'updateTraining',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'trainingIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        internalType: 'uint256',
      },
      { name: 'timestamp', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'userBestTimes',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
    ],
    outputs: [
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        internalType: 'uint256',
      },
      { name: 'timestamp', type: 'uint256', internalType: 'uint256' },
      { name: 'index', type: 'uint256', internalType: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userIdCounter',
    inputs: [],
    outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userIds',
    inputs: [{ name: 'userId', type: 'uint8', internalType: 'uint8' }],
    outputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userPasswords',
    inputs: [{ name: 'idSignature', type: 'bytes', internalType: 'bytes' }],
    outputs: [{ name: 'idPassword', type: 'bytes32', internalType: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userTrainingIndex',
    inputs: [{ name: 'userId', type: 'uint8', internalType: 'uint8' }],
    outputs: [
      {
        name: 'trainingIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userZoneTraining',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'trainingIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        internalType: 'uint256',
      },
      { name: 'timestamp', type: 'uint256', internalType: 'uint256' },
      { name: 'index', type: 'uint256', internalType: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userZoneTrainingHistory',
    inputs: [
      { name: 'userId', type: 'uint8', internalType: 'uint8' },
      {
        name: 'zone',
        type: 'uint8',
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      { name: '', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [
      {
        name: 'trainingIndexes',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'verifyUserPassword',
    inputs: [
      { name: 'idSignature', type: 'bytes', internalType: 'bytes' },
      { name: 'hashedPassword', type: 'string', internalType: 'string' },
    ],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'AdminChanged',
    inputs: [
      {
        name: 'oldAdmin',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newAdmin',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BestTimeUpdated',
    inputs: [
      {
        name: 'userId',
        type: 'uint8',
        indexed: true,
        internalType: 'uint8',
      },
      {
        name: 'zone',
        type: 'uint8',
        indexed: true,
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      {
        name: 'oldBestTime',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'newBestTime',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NewTrainingAdded',
    inputs: [
      {
        name: 'userId',
        type: 'uint8',
        indexed: true,
        internalType: 'uint8',
      },
      {
        name: 'zone',
        type: 'uint8',
        indexed: true,
        internalType: 'enum BaseTrainingDeka.DekaZones',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'timestamp',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TrainingDeleted',
    inputs: [
      {
        name: 'userId',
        type: 'uint8',
        indexed: true,
        internalType: 'uint8',
      },
      {
        name: 'trainingIndex',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TrainingUpdated',
    inputs: [
      {
        name: 'userId',
        type: 'uint8',
        indexed: true,
        internalType: 'uint8',
      },
      {
        name: 'trainingIndex',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'timeInSeconds',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'timestamp',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'UserRegistered',
    inputs: [
      {
        name: 'userId',
        type: 'uint8',
        indexed: true,
        internalType: 'uint8',
      },
      {
        name: 'idSignature',
        type: 'bytes',
        indexed: true,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  { type: 'error', name: 'AdminCannotBeZeroAddress', inputs: [] },
  { type: 'error', name: 'InputTrainingInvalid', inputs: [] },
  { type: 'error', name: 'InvalidIdSignature', inputs: [] },
  { type: 'error', name: 'MaxNumberOfUsersReached', inputs: [] },
  { type: 'error', name: 'OnlyAdminCanExecute', inputs: [] },
  { type: 'error', name: 'TrainingNotFound', inputs: [] },
  {
    type: 'error',
    name: 'TrainingUpdateCannotBeChangeZone',
    inputs: [],
  },
  { type: 'error', name: 'UserAlreadyRegistered', inputs: [] },
  { type: 'error', name: 'UserNotRegistered', inputs: [] },
  { type: 'error', name: 'VerifyAttemptLimitExceeded', inputs: [] },
  { type: 'error', name: 'VerifyCooldownActive', inputs: [] },
]
