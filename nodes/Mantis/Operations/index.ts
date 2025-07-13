import { INodeProperties, INodePropertyCollection, INodePropertyOptions } from 'n8n-workflow';

// import Config from './Config';
// import Filter from './Filter';
// import Impersonation from './Impersonation';
import Issue from './Issue';
// import IssueNotes from './IssueNotes';
// import Lang from './Lang';
import Page from './Page';
import Project from './Project';
// import User from './User';
// import UserTokens from './UserTokens';

const verbs = [
	// Config,
	// Filter,
	// Impersonation,
	Issue,
	// IssueNotes,
	// Lang,
	Page,
	Project,
	// User,
	// UserTokens,
];

export const mantisVerbsResources: (
	| INodeProperties
	| INodePropertyOptions
	| INodePropertyCollection
)[] = verbs.flatMap((verb) => verb.resource);

export const mantisVerbsOperations: INodeProperties[] = verbs.flatMap((verb) => verb.operations);
