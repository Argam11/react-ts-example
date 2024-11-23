// import {
//     DEFAULT_BREAKPOINT_ID,
//     DEFAULT_CSS_STATE,
//     RenderSection,
//     WidgetVariantTypes
// } from '@ucraft/ui/types/widget';
//
// import {
//     FeederOverriderType,
//     WIDGET_TYPES,
//     widgetPrefix
// } from '../../constants';
// import { t } from '../../i18n';
// import { getPriceConfig } from '../../widgets/Price/Price.config';
// import { bookingSummaryRemoveButtonConfigParams } from '../BookingSummaryRemoveButton/BookingSummaryRemoveButtonParamsOverride';
// import { BookingSummaryChildDiscriminator } from './BookingSummary.types';
// import { getIconKeyValue } from '../../utils/getIconKeyValue';

const removeItemChild = {
    type: "WIDGET_TYPES.Button",
    isMicroElement: true,
    params: "bookingSummaryRemoveButtonConfigParams",
    children: [
        {
            type: "WIDGET_TYPES.Icon",
            params: {
                key: "widgetPrefix[WIDGET_TYPES.Icon]",
                isMicroElement: true,
                showContentInParent: true,
                props: {
                    iconKey: [{ value: "getIconKeyValue('DeleteOutlined')" }]
                },
                variantsStyles: [
                    {
                        breakpointId: "DEFAULT_BREAKPOINT_ID",
                        cssState: "DEFAULT_CSS_STATE",
                        styles: [
                            {
                                type: 'color',
                                value: 'inherit'
                            },
                            {
                                type: 'font-size',
                                value: '18px'
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: "WIDGET_TYPES.Label",
            params: {
                key: "widgetPrefix[WIDGET_TYPES.Label]",
                isMicroElement: true,
                showContentInParent: true,
                props: { text: "t('BookingSummary.removeButtonLabel')" },
                variantsStyles: [
                    {
                        breakpointId: "DEFAULT_BREAKPOINT_ID",
                        cssState: "DEFAULT_CSS_STATE",
                        styles: [{ type: 'padding-inline-start', value: '8px' }]
                    }
                ]
            }
        }
    ]
};

// const servicePriceConfig = getPriceConfig({ fontSize: 14, fontWeight: 400 });
// const totalPriceConfig = getPriceConfig({ fontSize: 16, fontWeight: 700 });

// const bookingSummaryDefaultChildren = [
//     {
//         type: "WIDGET_TYPES.ItemRepeaterBaseBody",
//         hideChildrenContent: true,
//         params: {
//             isMicroElement: true,
//             labelKey: 'bookingSummaryBody',
//             variantsStyles: [
//                 {
//                     breakpointId: "DEFAULT_BREAKPOINT_ID",
//                     cssState: "DEFAULT_CSS_STATE",
//                     styles: [
//                         { type: 'align-items', value: 'stretch' },
//                         { type: 'width', value: '100%' }
//                     ]
//                 }
//             ],
//             props: {
//                 emptyPlaceholderLabel: ''
//             }
//         },
//         children: [
//             {
//                 type: "WIDGET_TYPES.Container",
//                 params: {
//                     key: "widgetPrefix[WIDGET_TYPES.Container]",
//                     isMicroElement: true,
//                     isReadOnly: true,
//                     labelKey: 'bookingSummaryItem',
//                     settings: {
//                         isInItemRepeater: true
//                     },
//                     variantsStyles: [
//                         {
//                             breakpointId: "DEFAULT_BREAKPOINT_ID",
//                             cssState: "DEFAULT_CSS_STATE",
//                             styles: [{ type: 'flex-direction', value: 'row' }]
//                         }
//                     ],
//                     props: {
//                         emptyPlaceholderLabel: ''
//                     }
//                 },
//                 children: [
//                     {
//                         type: "WIDGET_TYPES.Container",
//                         params: {
//                             key: "widgetPrefix[WIDGET_TYPES.Container]",
//                             isMicroElement: true,
//                             isReadOnly: true,
//                             settings: {
//                                 isInItemRepeater: true
//                             },
//                             variantsStyles: [
//                                 {
//                                     breakpointId: "DEFAULT_BREAKPOINT_ID",
//                                     cssState: "DEFAULT_CSS_STATE",
//                                     styles: [{ type: 'flex-direction', value: 'column' }]
//                                 }
//                             ],
//                             props: {
//                                 emptyPlaceholderLabel: ''
//                             }
//                         },
//                         children: [
//                             {
//                                 type: "WIDGET_TYPES.Container",
//                                 params: {
//                                     key: "widgetPrefix[WIDGET_TYPES.Container]",
//                                     isMicroElement: true,
//                                     isReadOnly: true,
//                                     settings: {
//                                         isInItemRepeater: true
//                                     },
//                                     variantsStyles: [
//                                         {
//                                             breakpointId: "DEFAULT_BREAKPOINT_ID",
//                                             cssState: "DEFAULT_CSS_STATE",
//                                             styles: [
//                                                 { type: 'flex-direction', value: 'row' },
//                                                 {
//                                                     type: 'justify-content',
//                                                     value: 'space-between'
//                                                 }
//                                             ]
//                                         }
//                                     ],
//                                     props: {
//                                         emptyPlaceholderLabel: ''
//                                     }
//                                 },
//                                 children: [
//                                     {
//                                         type: "WIDGET_TYPES.Label",
//                                         params: {
//                                             key: "widgetPrefix[WIDGET_TYPES.Label]",
//                                             discriminator: "BookingSummaryChildDiscriminator.Title",
//                                             variantType: "WidgetVariantTypes.BOOKING_SUMMARY_TITLE",
//                                             preventRemove: true,
//                                             variantsStyles: [
//                                                 {
//                                                     breakpointId: "DEFAULT_BREAKPOINT_ID",
//                                                     cssState: "DEFAULT_CSS_STATE",
//                                                     styles: [{ type: 'font-weight', value: '700' }]
//                                                 }
//                                             ]
//                                         }
//                                     },
//                                     {
//                                         type: "WIDGET_TYPES.Price",
//                                         canDrop: false,
//                                         params: {
//                                             key: "widgetPrefix[WIDGET_TYPES.Price]",
//                                             variantType: "WidgetVariantTypes.BOOKING_SUMMARY_PRICE",
//                                             discriminator: "BookingSummaryChildDiscriminator.Price",
//                                             parentType: "WIDGET_TYPES.BookingSummary",
//                                             preventRemove: true,
//                                             variantsStyles: "servicePriceConfig.defaultVariantsStyles"
//                                         },
//                                         children: "servicePriceConfig.defaultChildren"
//                                     }
//                                 ]
//                             }
//                         ]
//                     },
//                     removeItemChild
//                 ]
//             }
//         ]
//     },
//     {
//         type: WIDGET_TYPES.Container,
//         params: {
//             key: widgetPrefix[WIDGET_TYPES.Container],
//             isMicroElement: true,
//             isReadOnly: true,
//             renderSection: RenderSection.footer,
//             settings: {
//                 isInItemRepeater: true
//             },
//             variantsStyles: [
//                 {
//                     breakpointId: DEFAULT_BREAKPOINT_ID,
//                     cssState: DEFAULT_CSS_STATE,
//                     styles: [
//                         { type: 'width', value: '100%' },
//                         { type: 'margin-top', value: '24px' },
//                         { type: 'align-items', value: 'stretch' },
//                         { type: 'justify-content', value: 'space-between' },
//                         { type: 'flex-direction', value: 'row' }
//                     ]
//                 }
//             ],
//             props: {
//                 emptyPlaceholderLabel: ''
//             }
//         },
//         children: [
//             {
//                 type: WIDGET_TYPES.Label,
//                 params: {
//                     key: widgetPrefix[WIDGET_TYPES.Label],
//                     discriminator: BookingSummaryChildDiscriminator.TotalLabel,
//                     preventRemove: true,
//                     variantsStyles: [
//                         {
//                             breakpointId: DEFAULT_BREAKPOINT_ID,
//                             cssState: DEFAULT_CSS_STATE,
//                             styles: [
//                                 { type: 'font-size', value: '16px' },
//                                 { type: 'font-weight', value: '700' }
//                             ]
//                         }
//                     ],
//                     props: {
//                         text: t('Total.total')
//                     }
//                 }
//             },
//             {
//                 type: WIDGET_TYPES.Price,
//                 canDrop: false,
//                 params: {
//                     key: widgetPrefix[WIDGET_TYPES.Price],
//                     variantType: WidgetVariantTypes.BOOKING_SUMMARY_TOTAL_PRICE,
//                     discriminator: BookingSummaryChildDiscriminator.TotalPrice,
//                     preventRemove: true,
//                     isReadOnly: true,
//                     parentType: WIDGET_TYPES.BookingSummary,
//                     variantsStyles: totalPriceConfig.defaultVariantsStyles
//                 },
//                 children: totalPriceConfig.defaultChildren
//             }
//         ]
//     }
// ];

export const BookingSummaryParamsOverride = {
    config: {
        getLabelKey: () => "WIDGET_TYPES.BookingSummary",
        hideChildrenContent: true,
        enableMicroElementSettings: true,
        defaultChildren: "bookingSummaryDefaultChildren",
        defaultVariantsStyles: [
            {
                breakpointId: "DEFAULT_BREAKPOINT_ID book",
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