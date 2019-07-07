export interface ModalActionProps {
    type: Number,
    active?: boolean,
    onItemClosed: any,
    headerTitle: string,
    modalClose: any
}


type SelectTimeAction = {
    initialDate: string,
    finalDate: string
}


export interface ModalActionState {
    startDateTimePicker: boolean,
    endDateTimePicker: boolean,
    dateControls: {
        pillAction: SelectTimeAction,
        dateAction: {
            startDateTimePickerVisible: boolean,
            startTimePickerVisible: boolean,
            startDate: string,
            hourDate: string
        },
    },

    currentDateInput: null | any,
    controls: {
        pillInput: {
            value: string,
            valid: boolean,
        },
        quantityInput: {
            value: string,
            valid: boolean
        },
        keywordsInput: {
            value: string,
            valid: boolean
        },
        frequencyInput: {
            value: string,
            valid: boolean
        },
        dateNameInput: {
            value: string,
            valid: boolean
        },
        dateReasonInput: {
            value: string,
            valid: boolean
        }
    }
}