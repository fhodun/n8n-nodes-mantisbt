import { INodeProperties } from 'n8n-workflow';

export const projectsVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mantisProjectVerb'],
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

export default [...projectsVerbOperations];
