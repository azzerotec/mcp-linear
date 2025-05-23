import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for getting projects
 */
export const getProjectsToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjects',
  description: 'Get a list of projects from Linear',
  input_schema: {
    type: 'object',
    properties: {},
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        content: { type: 'string' },
        state: { type: 'string' },
        teams: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
            },
          },
        },
        url: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for creating a project
 */
export const createProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_createProject',
  description: 'Create a new project in Linear',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the project',
      },
      description: {
        type: 'string',
        description: 'Short summary of the project',
      },
      content: {
        type: 'string',
        description: 'Content of the project (Markdown supported)',
      },
      teamIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'IDs of the teams this project belongs to',
      },
      state: {
        type: 'string',
        description:
          "Initial state of the project (e.g., 'planned', 'started', 'paused', 'completed', 'canceled')",
      },
      targetDate: {
        type: 'string',
        description: 'Target date for the project (YYYY-MM-DD format)',
      },
      startDate: {
        type: 'string',
        description: 'Start date for the project (YYYY-MM-DD format)',
      },
      initiativeId: {
        type: 'string',
        description:
          'ID of the initiative to automatically link this project to. The project will be linked to this initiative upon creation.',
      },
    },
    required: ['name', 'teamIds'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      state: { type: 'string' },
      startDate: { type: 'string' },
      targetDate: { type: 'string' },
      lead: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
      icon: { type: 'string' },
      color: { type: 'string' },
      url: { type: 'string' },
      initiativeToProjectId: { type: 'string' },
    },
  },
};

/**
 * Tool definition for updating a project
 */
export const updateProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_updateProject',
  description: 'Update an existing project in Linear',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the project to update',
      },
      name: {
        type: 'string',
        description: 'New name of the project',
      },
      description: {
        type: 'string',
        description: 'New short summary of the project',
      },
      content: {
        type: 'string',
        description: 'New content of the project (Markdown supported)',
      },
      state: {
        type: 'string',
        description:
          "New state of the project (e.g., 'planned', 'started', 'paused', 'completed', 'canceled')",
      },
      targetDate: {
        type: 'string',
        description: 'New target date for the project (YYYY-MM-DD format)',
      },
      startDate: {
        type: 'string',
        description: 'New start date for the project (YYYY-MM-DD format)',
      },
      initiativeId: {
        type: 'string',
        description:
          'ID of the initiative to automatically link this project to. If provided, the project will be linked to this initiative as part of the update.',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      state: { type: 'string' },
      startDate: { type: 'string' },
      targetDate: { type: 'string' },
      lead: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
      icon: { type: 'string' },
      color: { type: 'string' },
      url: { type: 'string' },
      initiativeToProjectId: { type: 'string' },
    },
  },
};

/**
 * Tool definition for adding an issue to a project
 */
export const addIssueToProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_addIssueToProject',
  description: 'Add an existing issue to a project',
  input_schema: {
    type: 'object',
    properties: {
      issueId: {
        type: 'string',
        description: 'ID or identifier of the issue to add to the project',
      },
      projectId: {
        type: 'string',
        description: 'ID of the project to add the issue to',
      },
    },
    required: ['issueId', 'projectId'],
  },
  output_schema: {
    type: 'object',
    properties: {
      success: { type: 'boolean' },
      issue: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          identifier: { type: 'string' },
          title: { type: 'string' },
          project: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

/**
 * Tool definition for getting issues in a project
 */
export const getProjectIssuesToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectIssues',
  description: 'Get all issues associated with a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to get issues for',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of issues to return (default: 25)',
      },
    },
    required: ['projectId'],
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        identifier: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        state: { type: 'string' },
        priority: { type: 'number' },
        team: { type: 'object' },
        assignee: { type: 'object' },
        url: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for creating a project dependency
 */
export const createProjectDependencyToolDefinition = {
  name: 'linear_createProjectDependency',
  description: 'Create a dependency between two projects (blocking -> blocked)',
  input_schema: {
    type: 'object',
    properties: {
      blockingProjectId: {
        type: 'string',
        description: 'ID of the project that is blocking',
      },
      blockedProjectId: {
        type: 'string',
        description: 'ID of the project that is blocked by the blocking project',
      },
    },
    required: ['blockingProjectId', 'blockedProjectId'],
  },
  output_schema: {
    type: 'object',
    properties: {
      success: { type: 'boolean' },
      dependencyId: { type: 'string' },
      blockingProjectId: { type: 'string' },
      blockedProjectId: { type: 'string' },
    },
  },
};

/**
 * Tool definition for removing a project dependency
 */
export const removeProjectDependencyToolDefinition = {
  name: 'linear_removeProjectDependency',
  description: 'Remove a dependency between two projects by dependency ID',
  input_schema: {
    type: 'object',
    properties: {
      dependencyId: {
        type: 'string',
        description: 'ID of the dependency to remove',
      },
    },
    required: ['dependencyId'],
  },
  output_schema: {
    type: 'object',
    properties: {
      success: { type: 'boolean' },
      dependencyId: { type: 'string' },
    },
  },
};
