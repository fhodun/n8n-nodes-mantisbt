import { INodeProperties } from 'n8n-workflow';

export const pageVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['mantisPageVerb'],
			},
		},
		options: [
			{
				name: 'Get Issue View Page',
				value: 'getIssueViewPage',
				action: 'Get issue view page',
				options: [
					{
						displayName: 'Issue ID',
						name: 'issueId',
						type: 'number',
						default: null,
						description: 'ID of the issue to retrieve the view page for',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/pages/issues/view/{{ $parameter.issueId }}',
					},
				},
			},
		],
		default: 'getIssueViewPage',
	},
];

export default [...pageVerbOperations];
