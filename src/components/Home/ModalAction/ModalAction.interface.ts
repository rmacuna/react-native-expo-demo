export interface ModalActionProps {
    type: Number,
    active?: boolean,
    onItemClosed: any,
    headerTitle: String,
    modalClose: any
}
export interface ModalActionState {
    startDateTimePicker: Boolean,
    endDateTimePicker: Boolean,
    dateControls: {
        pillAction: {
            initialDate: String,
            finalDate: String
        },
        dateAction: {
            startDateTimePickerVisible: Boolean,
            startTimePickerVisible: Boolean,
            startDate: String,
            hourDate: String
        },
    },

    currentDateInput: null | any,
    controls: {
        pillInput: {
            value: String,
            valid: Boolean,
        },
        quantityInput: {
            value: String,
            valid: Boolean
        },
        keywordsInput: {
            value: String,
            valid: Boolean
        },
        frequencyInput: {
            value: String,
            valid: Boolean
        },
        dateNameInput: {
            value: String,
            valid: Boolean
        },
        dateReasonInput: {
            value: String,
            valid: Boolean
        }
    }
}