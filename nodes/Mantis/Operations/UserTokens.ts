import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'User Tokens',
	value: 'mantisUserTokensVerb',
};

export const enum Operations {
	CreateTokenForMe = 'createTokenForMe',
	DeleteTokenForMe = 'deleteTokenForMe',
	CreateTokenForUser = 'createTokenForUser',
	DeleteTokenForUser = 'deleteTokenForUser',
}

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [resource.value],
			},
		},
		options: [],
		default: '',
	},
];

export default {
	resource: resource,
	operations: operations,
};
