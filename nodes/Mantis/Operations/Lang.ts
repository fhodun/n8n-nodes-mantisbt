import { INodeProperties, INodePropertyCollection, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodeProperties | INodePropertyOptions | INodePropertyCollection = {
	name: 'Lang',
	value: 'mantisLangVerb',
};
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
