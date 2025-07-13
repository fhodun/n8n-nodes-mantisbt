import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Projects/Project Users',
	value: 'mantisProjectUsersVerb',
};

export const enum Operations {
	GetProjectUsers = 'getProjectUsers',
	GetProjectUsersThatCanBeAssignedIssues = 'getProjectUsersThatCanBeAssignedIssues',
	ProjectAddOrUpdateUser = 'projectAddOrUpdateUser',
	ProjectDeleteUser = 'projectDeleteUser',
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
		options: [
			{
				name: 'Get All Projects',
				value: 'getAllProjects',
				action: 'Get all projects',
				routing: {
					request: {
						method: 'GET',
						url: '/projects/',
					},
				},
			},
			{
				name: 'Get a Project',
				value: 'getProject',
				action: 'Get a project',
				options: [
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'number',
						default: null,
						description: 'ID of the project to retrieve',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/projects/{{ $parameter.projectId }}',
					},
				},
			},
		],
		default: 'getAllProjects',
	},
];

export default {
	resource: resource,
	operations: operations,
};
