import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Filters',
	value: 'mantisFiltersVerb',
};

export const enum Operations {
	GetAllFilters = 'getAllFilters',
	GetFilter = 'getFilter',
	DeleteFilter = 'deleteFilter',
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
