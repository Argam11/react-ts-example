// import {
//     DEFAULT_BREAKPOINT_ID,
//     DEFAULT_CSS_STATE
// } from '@ucraft/ui/types/widget';
//
// import { iconChildForButton } from '../../widgets/Button/Button.config';
// import {
//     CategoryType,
//     FeederOverriderType,
//     widgetPrefix,
//     WIDGET_TYPES,
//     ButtonContentBlock
// } from '../../constants';
// import { t } from '../../i18n';
// import defaultButtonVariantsStyles from '../../widgets/Button/Button.defaultStyles';
// import { AddToCartStates, EAddToCartStates } from './AddToCart.states';
// import { getIconKeyValue } from '../../utils/getIconKeyValue';

const createChildren = (dynamicWidgetType = "WIDGET_TYPES.AddToCart") => {
    return [
        {
            // ...iconChildForButton,
            params: {
                // ...iconChildForButton.params,
                props: {
                    iconKey: [
                        {
                            parentWidgetState: "EAddToCartStates.Success",
                            value: "getIconKeyValue('CheckOutlined')"
                        }
                    ]
                }
            }
        },
        {
            type: "WIDGET_TYPES.Label",
            params: {
                key: "widgetPrefix.label",
                isMicroElement: true,
                showContentInParent: true,
                props: {
                    text: "t(`AddToCart.${dynamicWidgetType}`)",

                    widgetStateProps: {
                        "[EAddToCartStates.OutOfStock]": {
                            text: "t('AddToCart.outOfStock')"
                        },
                        "[EAddToCartStates.Success]": {
                            text: "t('AddToCart.success')"
                        }
                    }
                }
            }
        }
    ];
};

export const AddToCartButtonParamsOverride = {
    config: {
        canDrag: true,
        categoryType: "CategoryType.product",

        defaultVariantsStyles: [
            // ...defaultButtonVariantsStyles,
            {
                breakpointId: "DEFAULT_BREAKPOINT_ID",
                cssState: "DEFAULT_CSS_STATE",
                widgetState: "EAddToCartStates.OutOfStock",
                styles: [
                    {
                        type: 'background',
                        value: [
                            { type: 'solid', value: 'rgb(200, 200, 200)', active: true }
                        ]
                    },
                    { type: 'border-color', value: 'rgb(160 160 160)' },
                    { type: 'border-style', value: 'solid' }
                ]
            },
            {
                breakpointId: "DEFAULT_BREAKPOINT_ID",
                cssState: "DEFAULT_CSS_STATE",
                widgetState: "EAddToCartStates.Success",
                styles: [
                    {
                        type: 'background',
                        value: [{ type: 'solid', value: 'rgb(113, 195, 92)', active: true }]
                    },
                    { type: 'border-color', value: 'rgb(160 160 160)' },
                    { type: 'border-style', value: 'solid' }
                ]
            }
        ],
        getWidgetChildren: ({
                                dynamicWidgetType
                            }: {
            dynamicWidgetType?: "WIDGET_TYPES";
        }) => createChildren(dynamicWidgetType),
        getLabelKey: ({ dynamicWidgetType, type }) => dynamicWidgetType || type,

        settings: {
            data: [
                {
                    type: 'block',
                    params: {
                        type: 'add-to-cart'
                    }
                }
            ]
        },

        states: "AddToCartStates",

        params: {
            content: { exclude: ["ButtonContentBlock.Link"] },
            settings: {
                afterAddingToCartBehavior: 'open-drawer'
            }
        }
    }
};