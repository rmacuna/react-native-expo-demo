export interface ModalActionProps {
    type: Number,
    active?: boolean,
    onItemClosed: any,
    headerTitle: string,
    modalClose: any
}
export interface ModalActionState {
    startDateTimePicker: boolean,
    endDateTimePicker: boolean,
    dateControls: {
        pillAction: {
            initialDate: string,
            finalDate: string
        },
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