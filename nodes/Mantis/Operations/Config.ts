import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Config',
	value: 'mantisConfigVerb',
};

export const enum Operations {
	GetConfigurationOption = 'getConfigurationOption',
	GetMultipleConfigurationOptions = 'getMultipleConfigurationOptions',
	SetConfigs = 'setConfigs',
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
