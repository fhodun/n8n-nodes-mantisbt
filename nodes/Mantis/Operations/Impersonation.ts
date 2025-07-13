import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Impersonation',
	value: 'mantisImpersonationVerb',
};

export const enum Operations {
	GetMyUserInfoWithImpersonation = 'getMyUserInfoWithImpersonation',
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
