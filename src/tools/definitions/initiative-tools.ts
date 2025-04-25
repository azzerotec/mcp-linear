import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for getting initiatives
 */
export const getInitiativesToolDefinition: MCPToolDefinition = {
  name: 'linear_getInitiatives',
  description: 'Get a list of initiatives from Linear',
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
        targetDate: { type: 'string' },
        startDate: { type: 'string' },
        url: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for getting initiative by ID
 */
export const getInitiativeByIdToolDefinition: MCPToolDefinition = {
  name: 'linear_getInitiativeById',
  description: 'Get details of a specific initiative',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the initiative to get',
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
      targetDate: { type: 'string' },
      startDate: { type: 'string' },
      url: { type: 'string' },
    },
  },
};

/**
 * Tool definition for creating an initiative
 */
export const createInitiativeToolDefinition: MCPToolDefinition = {
  name: 'linear_createInitiative',
  description: 'Create a new initiative',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the initiative',
      },
      description: {
        type: 'string',
        description: 'Short summary of the initiative',
      },
      content: {
        type: 'string',
        description: 'Content of the initiative (Markdown supported)',
      },
      state: {
        type: 'string',
        description: "State of the initiative (e.g., 'planned', 'active', 'completed', 'canceled')",
      },
      targetDate: {
        type: 'string',
        description: 'Target date for the initiative (YYYY-MM-DD format)',
      },
      startDate: {
        type: 'string',
        description: 'Start date for the initiative (YYYY-MM-DD format)',
      },
    },
    required: ['name'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string' },
    },
  },
};

/**
 * Tool definition for updating an initiative
 */
export const updateInitiativeToolDefinition: MCPToolDefinition = {
  name: 'linear_updateInitiative',
  description: 'Update an existing initiative',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the initiative to update',
      },
      name: {
        type: 'string',
        description: 'New name of the initiative',
      },
      description: {
        type: 'string',
        description: 'New short summary of the initiative',
      },
      content: {
        type: 'string',
        description: 'New content of the initiative (Markdown supported)',
      },
      state: {
        type: 'string',
        description: "New state of the initiative (e.g., 'planned', 'active', 'completed', 'canceled')",
      },
      targetDate: {
        type: 'string',
        description: 'New target date for the initiative (YYYY-MM-DD format)',
      },
      startDate: {
        type: 'string',
        description: 'New start date for the initiative (YYYY-MM-DD format)',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string' },
    },
  },
};
