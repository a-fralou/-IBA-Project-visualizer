import WidgetsSections from '../WidgetsSections';

const SECTIONS_DETAILS = [
    {
        title: 'Layout',
        id: '1',
        elements: [
            {
                title: 'Section',
                id: '1-1',
                type: '',
                iconName: 'IconSection',
                canvasItem: {
                    type: 'SectionWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Tabs',
                id: '1-2',
                type: 'Tabs',
                iconName: 'IconTabs',
                canvasItem: {
                    type: 'TabsWidget',
                    props: {
                        h: 2,
                        w: 2,
                    },
                },
            },
        ],
    },
    {
        title: 'Display',
        id: '2',
        elements: [
            {
                title: 'Text',
                id: '2-1',
                type: '',
                iconName: 'IconText',
                canvasItem: {
                    type: 'TextWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Image',
                id: '2-2',
                type: '',
                iconName: 'IconImage',
                canvasItem: {
                    type: 'ImageWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },

            {
                title: 'Line',
                id: '2-3',
                type: '',
                iconName: 'IconLine',
                canvasItem: {
                    type: 'LineWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'HTML',
                type: '',
                iconName: 'IconHtml',
                id: '2-4',
                canvasItem: {
                    type: 'HTMLWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Media',
                type: '',
                iconName: 'IconMedia',
                id: '2-5',
                canvasItem: {
                    type: 'MediaWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
    {
        title: 'Action',
        id: '3',
        elements: [
            {
                title: 'Button',
                type: 'Button',
                iconName: 'IconButton',
                id: '3-1',
                canvasItem: {
                    type: 'ButtonWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Link',
                type: '',
                iconName: 'IconLink',
                id: '3-2',
                canvasItem: {
                    type: 'LinkWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Page Navigation',
                type: '',
                iconName: 'IconPageNavigation',
                id: '3-3',
                canvasItem: {
                    type: 'PageNavigationWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
    {
        title: 'Entry',
        id: '4',
        elements: [
            {
                title: 'Single Line Entry',
                type: 'Input',
                iconName: 'IconSingleLine',
                id: '4-1',
                canvasItem: {
                    type: 'InputWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Multi-Line Entry',
                type: '',
                iconName: 'IconMultiLine',
                id: '4-2',
                canvasItem: {
                    type: 'InputWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Rich Text Entry',
                type: '',
                iconName: 'IconRichText',
                id: '4-3',
                canvasItem: {
                    type: 'InputWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Name picker',
                type: '',
                iconName: 'IconNamePicker',
                id: '4-4',
                canvasItem: {
                    type: 'PickerWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Email',
                type: '',
                iconName: 'IconEmail',
                id: '4-5',
                canvasItem: {
                    type: 'EmailWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Number',
                type: '',
                iconName: 'IconNumber',
                id: '4-6',
                canvasItem: {
                    type: 'NumberWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Currency',
                type: '',
                iconName: 'IconCurrency',
                id: '4-7',
                canvasItem: {
                    type: 'CurrencyWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },

            {
                title: 'Website',
                type: '',
                iconName: 'IconWebLink',
                id: '4-8',
                canvasItem: {
                    type: 'WebsiteWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Password',
                type: '',
                iconName: 'IconPassword',
                id: '4-9',
                canvasItem: {
                    type: 'PasswordWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
    {
        title: 'Calendar',
        id: '5',
        elements: [
            {
                title: 'Date',
                type: '',
                iconName: 'IconDate',
                id: '5-1',
                canvasItem: {
                    type: 'DateWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Time',
                type: '',
                iconName: 'IconTime',
                id: '5-2',
                canvasItem: {
                    type: 'TimeWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Time Stamp',
                type: '',
                iconName: 'IconTimeStamp',
                id: '5-3',
                canvasItem: {
                    type: 'TimeStampWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
    {
        title: 'Selection',
        id: '6',
        elements: [
            {
                title: 'Check Box',
                type: '',
                iconName: 'IconCheckbox',
                id: '6-1',
                canvasItem: {
                    type: 'CheckBoxWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Drop Down',
                type: '',
                iconName: 'IconDropdown',
                id: '6-2',
                canvasItem: {
                    type: 'DropDownWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Select One',
                type: '',
                iconName: 'IconSelectOne',
                id: '6-3',
                canvasItem: {
                    type: 'SelectOneWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Select Many',
                type: '',
                iconName: 'IconSelectMany',
                id: '6-4',
                canvasItem: {
                    type: 'SelectManyWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Choice Slider',
                type: '',
                iconName: 'IconChoiceSlider',
                id: '6-5',
                canvasItem: {
                    type: 'ChoiceSliderWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Numeric Slider',
                type: '',
                iconName: 'IconNumericSlider',
                id: '6-6',
                canvasItem: {
                    type: 'NumericSliderWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Survey',
                type: '',
                iconName: 'IconSurvey',
                id: '6-7',
                canvasItem: {
                    type: 'SurveyWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
    {
        title: 'Advanced',
        id: '7',
        elements: [
            {
                title: 'Table',
                type: '',
                iconName: 'IconTable',
                id: '7-1',
                canvasItem: {
                    type: 'TableWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Attachment',
                type: '',
                iconName: 'IconAttachment',
                id: '7-2',
                canvasItem: {
                    type: 'AttachmentWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
            {
                title: 'Data Grid',
                type: '',
                iconName: 'IconDataGrid',
                id: '7-3',
                canvasItem: {
                    type: 'GridWidget',
                    props: {
                        h: 4,
                        w: 4,
                    },
                },
            },
        ],
    },
];

export const WidgetsList = () => {
    return (
        <div>
            {SECTIONS_DETAILS.map((item) => {
                return <WidgetsSections key={item.id} data={item} />;
            })}
        </div>
    );
};
