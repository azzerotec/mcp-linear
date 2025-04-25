import {
  isCreateInitiativeArgs,
  isGetInitiativeByIdArgs,
  isUpdateInitiativeArgs,
} from '../type-guards.js';
import { LinearService } from '../../services/linear-service.js';
import { logError } from '../../utils/config.js';

/**
 * Handler for getting initiatives
 */
export function handleGetInitiatives(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      return await linearService.getInitiatives();
    } catch (error) {
      logError('Error getting initiatives', error);
      throw error;
    }
  };
}

/**
 * Handler for getting initiative by ID
 */
export function handleGetInitiativeById(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isGetInitiativeByIdArgs(args)) {
        throw new Error('Invalid arguments for getInitiativeById');
      }

      return await linearService.getInitiativeById(args.id);
    } catch (error) {
      logError('Error getting initiative by ID', error);
      throw error;
    }
  };
}

/**
 * Handler for creating an initiative
 */
export function handleCreateInitiative(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isCreateInitiativeArgs(args)) {
        throw new Error('Invalid arguments for createInitiative');
      }

      return await linearService.createInitiative(args);
    } catch (error) {
      logError('Error creating initiative', error);
      throw error;
    }
  };
}

/**
 * Handler for updating an initiative
 */
export function handleUpdateInitiative(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isUpdateInitiativeArgs(args)) {
        throw new Error('Invalid arguments for updateInitiative');
      }

      return await linearService.updateInitiative(args);
    } catch (error) {
      logError('Error updating initiative', error);
      throw error;
    }
  };
}
