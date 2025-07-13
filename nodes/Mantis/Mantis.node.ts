import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { mantisVerbFields } from './MantisVerbDescription';
import { issueVerbs, pageVerbs, projectVerbs, userVerbs } from './Operations';

export class Mantis implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MantisBT',
		name: 'mantis',
		icon: 'file:assets/mantis.svg',
		group: ['transform'],
		version: 1,
		description: 'Work with Mantis Bug Tracker',
		defaults: {
			name: 'MantisBT',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'mantisApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'http://localhost:8989/api/rest',
			url: '={{$credentials.baseUrl}}/api/rest',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: '={{ $credentials.apiToken }}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Issues',
						value: 'mantisIssueVerb',
					},
					{
						name: 'Projects',
						value: 'mantisProjectVerb',
					},
					{
						name: 'Users',
						value: 'mantisUserVerb',
					},
					{
						name: 'Pages',
						value: 'mantisPageVerb',
					},
				],
				default: 'mantisIssuesVerb',
			},
			...issueVerbs,
			...projectVerbs,
			...userVerbs,
			...pageVerbs,
			...mantisVerbFields,
		],
	};
}
