import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
import * as React from 'react';
import {App} from './App';
import { createRoot } from "react-dom/client";
import './index.css';
import { LearningPlanItem } from "./types";
type DataSet = ComponentFramework.PropertyTypes.DataSet;

export class ActivityTimeline implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    
    private _context: ComponentFramework.Context<IInputs>;

	private _viewId: string;
	private _container: HTMLDivElement;
    private notifyOutputChanged: () => void;
    /**
     * Empty constructor.
     */
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void
    {
        this._context = context;
		
        this._container = container;
        this.notifyOutputChanged = notifyOutputChanged;
       
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        /*const props: IInputs = { DataSet: context.parameters.DataSet };
        
        const root = createRoot(this._container);
        root.render( React.createElement(
            App, props)
        );*/
        const dataset = context.parameters.DataSet;
        const records: LearningPlanItem[] = dataset.sortedRecordIds.map(id => {
            const record = dataset.records[id];
            return {
                id: record.getValue("activityid") as string,
                itemName: record.getValue("subject") as string,
                plannedDate: record.getValue("scheduledstart") as string,
                itemDescription: record.getValue("activityadditionalparams") as string,
                status: (record.getValue("statecode") as number) 
            };
        });

        const root = createRoot(this._container);
        
        root.render(React.createElement(App, { 
            localItems: records,
            updateRecord: this.updateRecord.bind(this)
        }));

    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            DataSet: this._context.parameters.DataSet
        };
    }
    

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }

    public async updateRecord(id: string, updatedFields: Partial<LearningPlanItem>): Promise<void> {
        const dataset = this._context.parameters.DataSet;
    
        if (!dataset.records[id]) {
            console.error("Record not found.");
            return;
        }
    
        // Prepare the update object
        const updateData: { [key: string]: any } = {};
        if (updatedFields.status !== undefined) {
            updateData["status"] = updatedFields.status; // Ensure 'status' is the exact schema name in Dataverse
        }
        if (updatedFields.itemDescription !== undefined) {
            updateData["itemDescription"] = updatedFields.itemDescription;
        }
    
        try {
            // Call Dataverse Web API
            await this._context.webAPI.updateRecord(dataset.getTargetEntityType(), id, updateData);
            
            // Notify Power Apps that data has changed
            this.notifyOutputChanged();
        } catch (error) {
            console.error("Error updating record:", error);
        }
    }
    
    
}
