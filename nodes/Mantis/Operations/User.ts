import { INodeProperties, INodePropertyCollection, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodeProperties | INodePropertyOptions | INodePropertyCollection = {
	name: 'User',
	value: 'mantisUserVerb',
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
		options: [
			{
				name: 'Get My User Info',
				value: 'getMyUserInfo',
				action: 'Get my user info',
				options: [
					{
						displayName: 'Select Fields',
						name: 'selectFields',
						type: 'string',
						default: '',
						placeholder: 'id,name,real_name,email,access_level',
						description:
							'Comma-separated list of fields to select. Leave empty for all fields.',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/users/me',
						qs: {
							select_fields: '={{ $parameter.selectFields || "" }}',
						},
					},
				},
			},
			{
				name: 'Get User By ID',
				value: 'getUserById',
				action: 'Get user by ID',
				options: [
					{
						displayName: 'User ID',
						name: 'userId',
						type: 'number',
						default: null,
						description: 'ID of the user to retrieve',
					},
					{
						displayName: 'Select Fields',
						name: 'selectFields',
						type: 'string',
						default: '',
						placeholder: 'id,name,real_name,email,access_level',
						description:
							'Comma-separated list of fields to select. Leave empty for all fields.',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/users/{{ $parameter.userId }}',
						qs: {
							select_fields: '={{ $parameter.selectFields || "" }}',
						},
					},
				},
			},
			{
				name: 'Get User By Username',
				value: 'getUserByUsername',
				action: 'Get user by username',
				options: [
					{
						displayName: 'Username',
						name: 'username',
						type: 'string',
						default: '',
						description: 'Username of the user to retrieve',
					},
					{
						displayName: 'Select Fields',
						name: 'selectFields',
						type: 'string',
						default: '',
						placeholder: 'id,name,real_name,email,access_level',
						description:
							'Comma-separated list of fields to select. Leave empty for all fields.',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/users/username/{{ $parameter.username }}',
						qs: {
							select_fields: '={{ $parameter.selectFields || "" }}',
						},
					},
				},
			},
		],
		default: 'getMyUserInfo',
	},
];

export default {
	resource: resource,
	operations: operations,
};
