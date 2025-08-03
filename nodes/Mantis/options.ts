import { INodeProperties } from 'n8n-workflow';

import { mantisVerbsResources } from './Operations';

import { Operations as IssuesOperations } from './Operations/Issues';
import { Operations as IssueNotesAttachmentsOperations } from './Operations/IssueNotesAttachments';

import { Operations as ProjectsOperations } from './Operations/Projects/Projects';
import { Operations as ProjectsSubProjectsOperations } from './Operations/Projects/SubProjects';
import { Operations as ProjectsUsersOperations } from './Operations/Projects/Users';
import { Operations as ProjectsVersionsOperations } from './Operations/Projects/Versions';

// @ts-ignore
import Filters, { Operations as FiltersOperations } from './Operations/Filters';
import { Operations as UsersOperations } from './Operations/Users';
// @ts-ignore
import { Operations as UserTokensOperations } from './Operations/UserTokens';
// @ts-ignore
import { Operations as ConfigOperations } from './Operations/Config';
// @ts-ignore
import { Operations as LangOperations } from './Operations/Lang';
import { Operations as PagesOperations } from './Operations/Pages';
// @ts-ignore
import { Operations as ImpersonationOperations } from './Operations/Impersonation';

const allResourceValues: (string | number | boolean)[] = mantisVerbsResources.map(
	(resource) => resource.value,
);

export const enum Options {
	IssueId = 'issueId',
	Select = 'select',
	FileId = 'fileId',
	PageSize = 'pageSize',
	PageNumber = 'pageNumber',
	ProjectId = 'projectId',
	FilterId = 'filterId',
	TagId = 'tagId',
	RelationshipId = 'relationshipId',
	IssueNoteId = 'issueNoteId',
	AccessLevel = 'accessLevel',
	IncludeAccessLevels = 'includeAccessLevels',
	UserId = 'userId',
	VersionId = 'versionId',
	SubProjectId = 'subProjectId',
	Username = 'username',
	ConfigOption = 'configOption',
	String = 'string',
	MultipleStrings = 'multipleStrings',
}

export const options: INodeProperties[] = [
	{
		displayName: 'Issue ID',
		name: Options.IssueId,
		type: 'number',
		default: null,
		description: 'ID of the issue',
		displayOptions: {
			show: {
				operation: [
					IssuesOperations.GetAnIssue,
					IssuesOperations.GetIssueFiles,
					IssuesOperations.GetIssueFile,
					IssuesOperations.UpdateAnIssueMinimal,
					IssuesOperations.UpdateAnIssue,
					IssuesOperations.DeleteAnIssue,
					IssuesOperations.MonitorAnIssue,
					IssuesOperations.MonitorAnIssueForSpecifiedUsers,
					IssuesOperations.AttachTagToIssue,
					IssuesOperations.DetachTagFromAnIssue,
					IssuesOperations.AddAnIssueRelationship,
					IssuesOperations.DeleteAnIssueRelationship,
					IssueNotesAttachmentsOperations.CreateAnIssueNote,
					IssueNotesAttachmentsOperations.CreateAnIssueNoteWithTimeTracking,
					IssueNotesAttachmentsOperations.CreateAnIssueNoteWithAttachment,
					IssueNotesAttachmentsOperations.DeleteAnIssueNote,
					IssueNotesAttachmentsOperations.AddAttachmentsToIssue,
					PagesOperations.GetIssueViewPage,
				],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Select Fields',
		name: Options.Select,
		type: 'string',
		default: '',
		placeholder: 'id,summary,description',
		description:
			'Comma-separated list of fields to select (e.g., "id,summary,description"). Leave empty for all fields.',
		displayOptions: {
			show: {
				operation: [
					IssuesOperations.GetAnIssue,
					IssuesOperations.GetAllIssues,
					UsersOperations.GetMyUserInfo,
					UsersOperations.GetMyUserInfoSelect,
					UsersOperations.GetUserById,
					UsersOperations.GetUserByIdSelect,
				],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'File ID',
		name: Options.FileId,
		type: 'number',
		default: null,
		description: 'ID of the file',
		displayOptions: {
			show: {
				operation: [IssuesOperations.GetIssueFile],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Page Size',
		name: Options.PageSize,
		type: 'number',
		default: 10,
		description: 'Number of issues to return per page',
		displayOptions: {
			show: {
				operation: [IssuesOperations.GetAllIssues],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Page Number',
		name: Options.PageNumber,
		type: 'number',
		default: 1,
		description: 'Page number to retrieve',
		displayOptions: {
			show: {
				operation: [IssuesOperations.GetAllIssues],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Project ID',
		name: Options.ProjectId,
		type: 'number',
		default: null,
		description: 'ID of the project',
		displayOptions: {
			show: {
				operation: [
					IssuesOperations.GetAllIssues,
					ProjectsUsersOperations.GetProjectUsers,
					ProjectsUsersOperations.GetProjectUsersThatCanBeAssignedIssues,
					ProjectsUsersOperations.ProjectAddOrUpdateUser,
					ProjectsUsersOperations.ProjectDeleteUser,
					ProjectsVersionsOperations.CreateProjectVersion,
					ProjectsVersionsOperations.GetProjectVersions,
					ProjectsVersionsOperations.GetProjectVersion,
					ProjectsVersionsOperations.UpdateProjectVersion,
					ProjectsVersionsOperations.DeleteProjectVersion,
					ProjectsSubProjectsOperations.AddSubProject,
					ProjectsSubProjectsOperations.UpdateSubProject,
					ProjectsSubProjectsOperations.DeleteSubProject,
					ProjectsOperations.GetProject,
					ProjectsOperations.UpdateProject,
					ProjectsOperations.DeleteProject,
				],
				resource: allResourceValues,
			},
		},
	},
	// {
	// 	displayName: 'Filter',
	// 	name: Options.FilterId,
	// 	type: 'fixedCollection',
	// 	typeOptions: {
	// 		multipleValues: false,
	// 	},
	// 	default: {},
	// 	options: [
	// 		{
	// 			name: 'preset',
	// 			displayName: 'Wybierz z listy',
	// 			values: [
	// 				{
	// 					displayName: 'Predefiniowany filtr',
	// 					name: 'preset',
	// 					type: 'options',
	// 					options: [
	// 						{
	// 							displayName: 'None',
	// 							name: 'None',
	// 							value: '',
	// 						},
	// 						{
	// 							name: 'Assigned to Me',
	// 							value: 'assigned',
	// 						},
	// 						{
	// 							name: 'Reported by Me',
	// 							value: 'reported',
	// 						},
	// 						{
	// 							name: 'Monitored By Me',
	// 							value: 'monitored',
	// 						},
	// 						{
	// 							name: 'Unassigned',
	// 							value: 'unassigned',
	// 						},
	// 					],
	// 					default: '',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			name: 'custom',
	// 			displayName: 'Własny filtr',
	// 			values: [
	// 				{
	// 					displayName: 'Custom Filter',
	// 					name: 'custom',
	// 					type: 'options',
	// 					typeOptions: {
	// 						loadOptions: {
	// 							routing: {
	// 								request: {
	// 									method: 'GET',
	// 									url: '/filters',
	// 								},
	// 								output: {
	// 									postReceive: [
	// 										{
	// 											type: 'rootProperty',
	// 											properties: {
	// 												property: 'filters',
	// 											},
	// 										},
	// 										{
	// 											type: 'setKeyValue',
	// 											properties: {
	// 												name: '={{$responseItem.id}} ({{$responseItem.name}})',
	// 												value: '={{$responseItem.id}}',
	// 											},
	// 										},
	// 										{
	// 											type: 'sort',
	// 											properties: {
	// 												key: 'name',
	// 											},
	// 										},
	// 									],
	// 								},
	// 							},
	// 						},
	// 					},
	// 					default: '',
	// 				},
	// 			],
	// 		},
	// 	],
	// 	displayOptions: {
	// 		show: {
	// 			operation: [
	// 				IssuesOperations.GetAllIssues,
	// 				FiltersOperations.GetFilter,
	// 				FiltersOperations.DeleteFilter,
	// 			],
	// 			resource: allResourceValues,
	// 		},
	// 	},
	// },
	{
		displayName: 'Filter',
		name: Options.FilterId,
		type: 'options',
		options: [
			{
				displayName: 'None',
				name: 'None',
				value: '',
			},
			{
				name: 'Assigned to Me',
				value: 'assigned',
			},
			{
				name: 'Reported by Me',
				value: 'reported',
			},
			{
				name: 'Monitored By Me',
				value: 'monitored',
			},
			{
				name: 'Unassigned',
				value: 'unassigned',
			},
		],
		typeOptions: {
			loadOptions: {
				routing: {
					request: {
						method: 'GET',
						url: '/filters',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'filters',
								},
							},
							{
								type: 'setKeyValue',
								properties: {
									name: '={{$responseItem.id}} ({{$responseItem.name}})',
									value: '={{$responseItem.id}}',
								},
							},
							{
								type: 'sort',
								properties: {
									key: 'name',
								},
							},
						],
					},
				},
			},
		},
		default: '',
		displayOptions: {
			show: {
				operation: [
					IssuesOperations.GetAllIssues,
					FiltersOperations.GetFilter,
					FiltersOperations.DeleteFilter,
				],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Tag ID',
		name: Options.TagId,
		type: 'number',
		default: null,
		description: 'ID of the tag',
		displayOptions: {
			show: {
				operation: [],
				resource: allResourceValues,
			},
		},
	},
	{
		displayName: 'Project ID',
		name: Options.ProjectId,
		type: 'number',
		default: null,
		description: 'ID of the project',
		displayOptions: {
			show: {
				operation: [],
				resource: allResourceValues,
			},
		},
	},
];
