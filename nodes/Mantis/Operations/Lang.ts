import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Lang',
	value: 'mantisLangVerb',
};

export const enum Operations {
	GetLocalizedString = 'getLocalizedString',
	GetMultipleLocalizedStrings = 'getMultipleLocalizedStrings',
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
