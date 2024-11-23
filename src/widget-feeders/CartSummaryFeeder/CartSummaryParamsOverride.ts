// import {
//     DEFAULT_BREAKPOINT_ID,
//     DEFAULT_CSS_STATE,
//     RenderSection,
//     WidgetVariantTypes
// } from '@ucraft/ui/types/widget';
//
// import {
//     ContentTypes,
//     FeederOverriderType,
//     WIDGET_TYPES,
//     widgetPrefix
// } from '../../constants';
// import quantityConfig from '../../widgets/Quantity/Quantity.config';
// import { t } from '../../i18n';
// import {
//     CART_ITEM_COUNT,
//     CART_ITEM_COUNT_TEXT,
//     CART_ITEM_IMAGE
// } from './constants';
// import { getIconKeyValue } from '../../utils/getIconKeyValue';

// const removeCartItemChild = {
//     type: WIDGET_TYPES.Button,
//     params: {
//         preventRemove: true,
//         variantType: WidgetVariantTypes.BUTTON_REMOVE_CART_ITEM,
//         discriminator: WidgetVariantTypes.BUTTON_REMOVE_CART_ITEM,
//         settings: {
//             contentType: [
//                 {
//                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                     value: ContentTypes.iconLeft
//                 }
//             ]
//         }
//     },
//     children: [
//         {
//             type: WIDGET_TYPES.Icon,
//             params: {
//                 key: widgetPrefix.icon,
//                 isMicroElement: true,
//                 showContentInParent: true,
//                 props: { iconKey: [{ value: getIconKeyValue('DeleteOutlined') }] }
//             }
//         },
//         {
//             type: WIDGET_TYPES.Label,
//             params: {
//                 key: widgetPrefix.label,
//                 isMicroElement: true,
//                 showContentInParent: true,
//                 props: { text: t('CartSummary.remove') },
//                 variantsStyles: [
//                     {
//                         breakpointId: DEFAULT_BREAKPOINT_ID,
//                         cssState: DEFAULT_CSS_STATE,
//                         styles: [{ type: 'padding-inline-start', value: '8px' }]
//                     }
//                 ]
//             }
//         }
//     ]
// };
//
// const summaryItemPriceChild = {
//     type: WIDGET_TYPES.SummaryItemPrice,
//     params: {
//         labelKey: 'cartItemPrice',
//         preventRemove: true
//     },
//     children: [
//         {
//             type: WIDGET_TYPES.Label,
//             params: {
//                 isMicroElement: true,
//                 isReadOnly: true,
//                 labelKey: 'currency',
//                 props: { text: '$' }
//             }
//         },
//         {
//             type: WIDGET_TYPES.Label,
//             params: {
//                 isMicroElement: true,
//                 isReadOnly: true,
//                 labelKey: 'price',
//                 props: { text: '10' }
//             }
//         }
//     ]
// };
//
// export const defaultChildren = [
//     {
//         type: WIDGET_TYPES.ItemRepeaterBaseBody,
//         hideChildrenContent: true,
//         params: {
//             isMicroElement: true,
//             labelKey: 'cartSummaryBody',
//             variantsStyles: [
//                 {
//                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                     cssState: DEFAULT_CSS_STATE,
//                     styles: [
//                         { type: 'align-items', value: 'stretch' },
//                         { type: 'padding-inline-end', value: '20px' }
//                     ]
//                 }
//             ],
//             props: {
//                 emptyPlaceholderLabel: ''
//             }
//         },
//         children: [
//             {
//                 type: WIDGET_TYPES.Container,
//                 hideChildrenContent: true,
//                 params: {
//                     isMicroElement: true,
//                     labelKey: 'cartSummaryItem',
//                     settings: {
//                         isInItemRepeater: true
//                     },
//                     variantsStyles: [
//                         {
//                             breakpointId: DEFAULT_BREAKPOINT_ID,
//                             cssState: DEFAULT_CSS_STATE,
//                             styles: [{ type: 'align-items', value: 'stretch' }]
//                         }
//                     ],
//                     props: {
//                         emptyPlaceholderLabel: ''
//                     }
//                 },
//                 children: [
//                     {
//                         type: WIDGET_TYPES.Image,
//                         params: {
//                             preventRemove: true,
//                             settings: {
//                                 type: 'name',
//                                 isInItemRepeater: true
//                             },
//                             isReadOnly: true,
//                             discriminator: CART_ITEM_IMAGE,
//                             variantsStyles: [
//                                 {
//                                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                                     cssState: DEFAULT_CSS_STATE,
//                                     styles: [
//                                         { type: 'width', value: '20%' },
//                                         { type: 'min-width', value: '100px' },
//                                         { type: 'aspect-ratio', value: '1/1' },
//                                         { type: 'overflow', value: 'hidden' },
//                                         {
//                                             type: 'border-top-left-radius',
//                                             value: 'var(--base-border-radius)'
//                                         },
//                                         {
//                                             type: 'border-top-right-radius',
//                                             value: 'var(--base-border-radius)'
//                                         },
//                                         {
//                                             type: 'border-bottom-left-radius',
//                                             value: 'var(--base-border-radius)'
//                                         },
//                                         {
//                                             type: 'border-bottom-right-radius',
//                                             value: 'var(--base-border-radius)'
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     },
//                     {
//                         type: WIDGET_TYPES.Container,
//                         params: {
//                             isMicroElement: true,
//                             settings: {
//                                 isInItemRepeater: true
//                             },
//                             variantsStyles: [
//                                 {
//                                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                                     cssState: DEFAULT_CSS_STATE,
//                                     styles: [
//                                         { type: 'padding-inline-start', value: '20px' },
//                                         { type: 'align-items', value: 'stretch' }
//                                     ]
//                                 }
//                             ],
//                             props: {
//                                 emptyPlaceholderLabel: ''
//                             }
//                         },
//                         children: [
//                             {
//                                 type: WIDGET_TYPES.Container,
//                                 params: {
//                                     isMicroElement: true,
//                                     variantsStyles: [
//                                         {
//                                             breakpointId: DEFAULT_BREAKPOINT_ID,
//                                             cssState: DEFAULT_CSS_STATE,
//                                             styles: [{ type: 'flex-direction', value: 'column' }]
//                                         }
//                                     ],
//                                     props: {
//                                         emptyPlaceholderLabel: ''
//                                     }
//                                 },
//                                 children: [
//                                     {
//                                         type: WIDGET_TYPES.SummaryItemAttribute,
//                                         params: {
//                                             preventRemove: true,
//                                             labelKey: 'cartItemAttribute',
//                                             settings: {
//                                                 type: 'name',
//                                                 isInItemRepeater: true
//                                             }
//                                         }
//                                     },
//                                     {
//                                         type: WIDGET_TYPES.SummaryItemAttributes,
//                                         params: {
//                                             labelKey: 'cartItemAttributes',
//                                             preventRemove: true
//                                         }
//                                     },
//                                     {
//                                         type: WIDGET_TYPES.Quantity,
//                                         children: quantityConfig.defaultChildren,
//                                         params: {
//                                             preventRemove: true
//                                         }
//                                     },
//                                     removeCartItemChild
//                                 ]
//                             },
//                             {
//                                 type: WIDGET_TYPES.Container,
//                                 params: {
//                                     isMicroElement: true,
//                                     variantsStyles: [
//                                         {
//                                             breakpointId: DEFAULT_BREAKPOINT_ID,
//                                             cssState: DEFAULT_CSS_STATE,
//                                             styles: [
//                                                 { type: 'align-items', value: 'center' },
//                                                 { type: 'justify-content', value: 'flex-end' }
//                                             ]
//                                         }
//                                     ],
//                                     props: {
//                                         emptyPlaceholderLabel: ''
//                                     }
//                                 },
//                                 children: [summaryItemPriceChild]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         type: WIDGET_TYPES.Container,
//         params: {
//             isMicroElement: true,
//             labelKey: 'cartSummaryHeader',
//             renderSection: RenderSection.header,
//             variantsStyles: [
//                 {
//                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                     cssState: DEFAULT_CSS_STATE,
//                     styles: [
//                         { type: 'min-width', value: '0px' },
//                         { type: 'flex-wrap', value: 'wrap' },
//                         { type: 'flex-direction', value: 'row' }
//                     ]
//                 }
//             ]
//         },
//         children: [
//             {
//                 type: WIDGET_TYPES.Label,
//                 params: {
//                     key: widgetPrefix.label,
//                     isMicroElement: true,
//                     isReadOnly: true,
//                     discriminator: CART_ITEM_COUNT,
//                     variantsStyles: [
//                         {
//                             breakpointId: DEFAULT_BREAKPOINT_ID,
//                             cssState: DEFAULT_CSS_STATE,
//                             styles: [{ type: 'margin-inline-end', value: '4px' }]
//                         }
//                     ]
//                 }
//             },
//             {
//                 type: WIDGET_TYPES.Label,
//                 params: {
//                     isMicroElement: true,
//                     key: widgetPrefix.label,
//                     props: { text: t('CartSummary.itemsWithCount') },
//                     discriminator: CART_ITEM_COUNT_TEXT
//                 }
//             }
//         ]
//     }
// ];

export const CartSummaryParamsOverride = {
    config: {
        getLabelKey: () => 'cartSummary',
        hideChildrenContent: true,
        // defaultChildren,
        defaultVariantsStyles: [
            {
                breakpointId: "DEFAULT_BREAKPOINT_ID cart",
                cssState: "DEFAULT_CSS_STATE",
                styles: [
                    { type: 'min-width', value: '0px' },
                    { type: 'width', value: '100%' },
                    { type: 'flex-direction', value: 'column' }
                ]
            }
        ],
        params: {
            settings: {
                rowCount: [{ breakpointId: "DEFAULT_BREAKPOINT_ID", value: 1 }],
                columnCount: [{ breakpointId: "DEFAULT_BREAKPOINT_ID", value: 1 }]
            }
        }
    }
};