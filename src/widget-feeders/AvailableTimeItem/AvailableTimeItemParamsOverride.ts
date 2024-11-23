// import { DEFAULT_BREAKPOINT_ID } from '@ucraft/ui/types/widget';
//
// import { iconChildForButton } from '../../widgets/Button/Button.config';
// import {
//     FeederOverriderType,
//     widgetPrefix,
//     WIDGET_TYPES,
//     ButtonContentBlock,
//     ContentTypes
// } from '../../constants';
// import { AvailableTimeSelectorDiscriminator } from '../AvailableTimeSelectorFeeder/AvailableTimeSelector.types';
// import { AvailableTimeItemStates } from './AvailableTimeItem.states';

export const availableTimeItemDefaultChildren = [
    {
        // ...iconChildForButton,
        params: {
            // ...iconChildForButton.params,
            props: {}
        }
    },
    {
        type: "WIDGET_TYPES.Label",
        params: {
            key: "widgetPrefix[WIDGET_TYPES.Label]",
            isMicroElement: true,
            isReadOnly: true,
            discriminator: "AvailableTimeSelectorDiscriminator.Label",
            props: {}
        }
    }
];

export const AvailableTimeItemParamsOverride = {
    config: {
        canDrag: true,
        states: "AvailableTimeItemStates",
        style: {
            exclude: {
                uiElement: [],
                admin: [],
                visualEditor: ['contentType']
            }
        },
        params: {
            content: { exclude: ["ButtonContentBlock.Link"] },
            settings: {
                contentType: [
                    {
                        breakpointId: "DEFAULT_BREAKPOINT_ID",
                        value: "ContentTypes.labelOnly"
                    }
                ]
            }
        }
    }
};