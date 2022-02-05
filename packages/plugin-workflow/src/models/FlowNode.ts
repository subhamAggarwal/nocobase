import { Model, BelongsToGetAssociationMixin } from 'sequelize';
import WorkflowModel from './Workflow';

export default class FlowNodeModel extends Model {
  declare id: number;
  declare title: string;
  declare branchIndex: null | number;
  declare type: string;
  declare config: any;

  declare createdAt: Date;
  declare updatedAt: Date;

  declare upstream: FlowNodeModel;
  declare downstream: FlowNodeModel;

  declare workflow?: WorkflowModel;
  declare getWorkflow: BelongsToGetAssociationMixin<WorkflowModel>;
}