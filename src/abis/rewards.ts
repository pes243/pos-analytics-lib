/**
 * Copyright 2020 the pos-analytics authors
 * This file is part of the pos-analytics library in the Orbs project.
 *
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 * The above notice should be included in all copies or substantial portions of the software.
 */

export const rewardsAbi = [ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "annualRateInPercentMille", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "annualCap", "type": "uint256" } ], "name": "AnnualStakingRewardsRateChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint32", "name": "defaultDelegatorsStakingRewardsPercentMille", "type": "uint32" } ], "name": "DefaultDelegatorsStakingRewardsChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalAwarded", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "guardian", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "delegatorRewardsPerToken", "type": "uint256" } ], "name": "DelegatorStakingRewardsAssigned", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "addr", "type": "address" } ], "name": "EmergencyWithdrawal", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "guardian", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "delegatorsStakingRewardsPercentMille", "type": "uint256" } ], "name": "GuardianDelegatorsStakingRewardsPercentMilleUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "guardian", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalAwarded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "delegatorRewardsPerToken", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakingRewardsPerWeight", "type": "uint256" } ], "name": "GuardianStakingRewardsAssigned", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint32", "name": "maxDelegatorsStakingRewardsPercentMille", "type": "uint32" } ], "name": "MaxDelegatorsStakingRewardsChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" } ], "name": "RewardDistributionActivated", "type": "event" }, { "anonymous": false, "inputs": [], "name": "RewardDistributionDeactivated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "allocatedRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakingRewardsPerWeight", "type": "uint256" } ], "name": "StakingRewardsAllocated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "guardianStakingRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "delegatorStakingRewards", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "toRewardsContract", "type": "address" } ], "name": "StakingRewardsBalanceMigrated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "guardianStakingRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "delegatorStakingRewards", "type": "uint256" } ], "name": "StakingRewardsBalanceMigrationAccepted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "claimedDelegatorRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "claimedGuardianRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalClaimedDelegatorRewards", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalClaimedGuardianRewards", "type": "uint256" } ], "name": "StakingRewardsClaimed", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "getStakingRewardsBalance", "outputs": [ { "internalType": "uint256", "name": "balance", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "delegatorRewardsPercentMille", "type": "uint32" } ], "name": "setGuardianDelegatorsStakingRewardsPercentMille", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" } ], "name": "getGuardianDelegatorsStakingRewardsPercentMille", "outputs": [ { "internalType": "uint256", "name": "delegatorRewardsRatioPercentMille", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "claimStakingRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getStakingRewardsWalletAllocatedTokens", "outputs": [ { "internalType": "uint256", "name": "allocated", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" } ], "name": "getGuardianStakingRewardsData", "outputs": [ { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "claimed", "type": "uint256" }, { "internalType": "uint256", "name": "delegatorRewardsPerToken", "type": "uint256" }, { "internalType": "uint256", "name": "lastStakingRewardsPerWeight", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "delegator", "type": "address" } ], "name": "getDelegatorStakingRewardsData", "outputs": [ { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "claimed", "type": "uint256" }, { "internalType": "uint256", "name": "lastDelegatorRewardsPerToken", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakingRewardsState", "outputs": [ { "internalType": "uint96", "name": "stakingRewardsPerWeight", "type": "uint96" }, { "internalType": "uint96", "name": "unclaimedStakingRewards", "type": "uint96" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentStakingRewardsRatePercentMille", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" }, { "internalType": "uint256", "name": "weight", "type": "uint256" }, { "internalType": "uint256", "name": "totalCommitteeWeight", "type": "uint256" }, { "internalType": "bool", "name": "inCommittee", "type": "bool" }, { "internalType": "bool", "name": "inCommitteeAfter", "type": "bool" } ], "name": "committeeMembershipWillChange", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" }, { "internalType": "uint256", "name": "delegatedStake", "type": "uint256" }, { "internalType": "address", "name": "delegator", "type": "address" }, { "internalType": "uint256", "name": "delegatorStake", "type": "uint256" }, { "internalType": "address", "name": "nextGuardian", "type": "address" }, { "internalType": "uint256", "name": "nextGuardianDelegatedStake", "type": "uint256" } ], "name": "delegationWillChange", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "startTime", "type": "uint256" } ], "name": "activateRewardDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "deactivateRewardDistribution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "defaultDelegatorsStakingRewardsPercentMille", "type": "uint32" } ], "name": "setDefaultDelegatorsStakingRewardsPercentMille", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getDefaultDelegatorsStakingRewardsPercentMille", "outputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "maxDelegatorsStakingRewardsPercentMille", "type": "uint32" } ], "name": "setMaxDelegatorsStakingRewardsPercentMille", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getMaxDelegatorsStakingRewardsPercentMille", "outputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "annualRateInPercentMille", "type": "uint256" }, { "internalType": "uint256", "name": "annualCap", "type": "uint256" } ], "name": "setAnnualStakingRewardsRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAnnualStakingRewardsRatePercentMille", "outputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAnnualStakingRewardsCap", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isRewardAllocationActive", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSettings", "outputs": [ { "internalType": "uint256", "name": "annualStakingRewardsCap", "type": "uint256" }, { "internalType": "uint32", "name": "annualStakingRewardsRatePercentMille", "type": "uint32" }, { "internalType": "uint32", "name": "defaultDelegatorsStakingRewardsPercentMille", "type": "uint32" }, { "internalType": "uint32", "name": "maxDelegatorsStakingRewardsPercentMille", "type": "uint32" }, { "internalType": "bool", "name": "rewardAllocationActive", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" } ], "name": "migrateRewardsBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "guardian", "type": "address" }, { "internalType": "uint256", "name": "guardianStakingRewards", "type": "uint256" }, { "internalType": "uint256", "name": "delegatorStakingRewards", "type": "uint256" } ], "name": "acceptRewardsBalanceMigration", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];