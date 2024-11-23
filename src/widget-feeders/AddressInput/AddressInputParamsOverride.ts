// import {
//     DEFAULT_BREAKPOINT_ID,
//     WidgetVariantTypes
// } from '@ucraft/ui/types/widget';

// import { inputMainIcon } from '../../widgets/Input/Input.config';
// import { FeederOverriderType, InputContentTypes } from '../../constants';
// import {
//     EFormItemStates,
//     FormItemStates
// } from '../../widgets/FormItem/FormItem.states';
// import { getIconKeyValue } from '../../utils/getIconKeyValue';

const defaultChildren = [
    {
        // ...inputMainIcon,
        params: {
            // ...inputMainIcon.params,

            props: {
                iconKey: [
                    {
                        // parentWidgetState: EFormItemStates.Normal,
                        // value: getIconKeyValue('GoogleOutlined')
                    }
                ]
            }
        }
    }
];

export const AddressInputParamsOverride: any = {
    config: {
        getLabelKey: () => 'addressInput',
        defaultChildren,
        params: {
            variantType: "WidgetVariantTypes.INPUT_ADDRESS",
            settings: {
                contentType: [
                    {
                        value: "InputContentTypes.iconLeft",
                        breakpointId: "DEFAULT_BREAKPOINT_ID"
                    }
                ]
            }
        },

        states: "FormItemStates"
    }
};

export default AddressInputParamsOverride;