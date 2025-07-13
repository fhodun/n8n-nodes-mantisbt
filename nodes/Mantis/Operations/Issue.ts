import { INodeProperties } from 'n8n-workflow';

const issuesVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['mantisIssueVerb'],
			},
		},
		options: [
			{
				name: 'Get An Issue',
				value: 'getAnIssue',
				action: 'Get an issue',
				options: [
					{
						displayName: 'Issue ID',
						name: 'issueId',
						type: 'number',
						default: null,
						description: 'ID of the issue to retrieve',
					},
					{
						displayName: 'Select Fields',
						name: 'selectFields',
						type: 'string',
						default: '',
						placeholder: 'id,summary,description',
						description:
							'Comma-separated list of fields to select (e.g., "id,summary,description"). Leave empty for all fields.',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}',
						qs: {
							select_fields: '={{ $parameter.selectFields || "" }}',
						},
					},
				},
			},
			{
				name: 'Get Issue Files',
				value: 'getIssueFiles',
				action: 'Get issue files',
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}/files',
					},
				},
			},
			{
				name: 'Get Issue File',
				value: 'getIssueFile',
				action: 'Get issue file',
				options: [
					{
						displayName: 'Issue ID',
						name: 'issueId',
						type: 'number',
						default: null,
						description: 'ID of the issue containing the file',
					},
					{
						displayName: 'File ID',
						name: 'fileId',
						type: 'number',
						default: null,
						description: 'ID of the file to retrieve',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/issues/{{ $parameter.issueId }}/files/{{ $parameter.fileId }}',
					},
				},
			},
			{
				name: 'Get All Issues',
				value: 'getAllIssues',
				action: 'Get all issues',
				options: [
					{
						displayName: 'Page Size',
						name: 'pageSize',
						type: 'number',
						default: 10,
						description: 'Number of issues to return per page',
					},
					{
						displayName: 'Page Number',
						name: 'pageNumber',
						type: 'number',
						default: 1,
						description: 'Page number to retrieve',
					},
					{
						displayName: 'Select Fields',
						name: 'selectFields',
						type: 'string',
						default: '',
						placeholder: 'id,summary,description',
						description:
							'Comma-separated list of fields to select (e.g., "id,summary,description"). Leave empty for all fields.',
					},
					{
						displayName: 'Filter',
						name: 'filter',
						type: 'string',
						default: '',
						values: [
							{
								displayName: 'Assigned to Me',
								name: 'assignedToMe',
								type: 'string',
								default: 'assigned',
							},
							{
								displayName: 'Reported by Me',
								name: 'reportedByMe',
								type: 'string',
								default: 'reported',
							},
							{
								displayName: 'Monitored by Me',
								name: 'monitoredByMe',
								type: 'string',
								default: 'monitored',
							},
							{
								displayName: 'Unassigned',
								name: 'unassigned',
								type: 'string',
								default: 'unassigned',
							},
						],
					},
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'number',
						default: null,
						description:
							'ID of the project to filter issues by. Leave empty for all projects.',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/issues',
						qs: {
							page_size: '={{ $parameter.pageSize }}',
							page_number: '={{ $parameter.pageNumber }}',
							select_fields: '={{ $parameter.selectFields || "" }}',
							filter: '={{ $parameter.filter || "" }}',
							project_id: '={{ $parameter.projectId || "" }}',
						},
					},
				},
			},
		],
		default: 'getAllIssues',
	},
];

export default [...issuesVerbOperations];
