import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const resource: INodePropertyOptions = {
	name: 'Issue Notes and Attachments',
	value: 'mantisIssueNotesAttachmentsVerb',
};

export const enum Operations {
	CreateAnIssueNote = 'createAnIssueNote',
	CreateAnIssueNoteWithTimeTracking = 'createAnIssueNoteWithTimeTracking',
	CreateAnIssueNoteWithAttachment = 'createAnIssueNoteWithAttachment',
	DeleteAnIssueNote = 'deleteAnIssueNote',
	AddAttachmentsToIssue = 'addAttachmentsToIssue',
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
