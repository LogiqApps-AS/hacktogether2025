import { IInputs, IOutputs } from "./generated/ManifestTypes";
import MainComponent, { IMainComponentProps, ITestResult } from "./MainComponent";
import * as React from "react";
import { StatusType } from "./types/types";

export class PersonalityTest implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private results: ITestResult[];
    private status: StatusType;
    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    private isJSONString = (str: string | null) => {
        if (!str) {
            return false;
        }
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IMainComponentProps = {
            questionsPerPage: 10,
            results: (context.parameters.result.raw && this.isJSONString(context.parameters.result.raw)) ?
                JSON.parse(context.parameters.result.raw) as ITestResult[] : [],
            onChange: (results: ITestResult[]) => {
                // Add code to update the results
                this.results = results;
                this.notifyOutputChanged();
            },
            // onStatusChange: (status: StatusType) => {
            //     // Add code to update the status
            //     this.status = status;
            //     this.notifyOutputChanged();
            // }

        };
        // @typescript-eslint/no-unsafe-argument
        return React.createElement(
            MainComponent, props
        );
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            result: JSON.stringify(this.results),
            status: this.status ?? null
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
