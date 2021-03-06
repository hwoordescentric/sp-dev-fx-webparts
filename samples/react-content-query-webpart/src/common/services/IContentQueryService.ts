import { IDropdownOption, IPersonaProps, ITag } from 'office-ui-fabric-react';
import { IQueryFilterField }                    from '../../controls/PropertyPaneQueryFilterPanel/components/QueryFilter/IQueryFilterField';
import { IChecklistItem }                       from '../../controls/PropertyPaneAsyncChecklist/components/AsyncChecklist/IChecklistItem';
import { IContentQueryTemplateContext }         from '../../webparts/contentQuery/components/IContentQueryTemplateContext';
import { IQuerySettings }                       from '../../webparts/contentQuery/components/IQuerySettings';


export interface IContentQueryService {
    getTemplateContext: (querySettings: IQuerySettings, callTimeStamp: number) => Promise<IContentQueryTemplateContext>;
    getFileContent: (fileUrl: string) => Promise<string>;
    getWebUrlOptions: () => Promise<IDropdownOption[]>;
    getListTitleOptions: (webUrl: string) => Promise<IDropdownOption[]>;
    getOrderByOptions: (webUrl: string, listTitle: string) => Promise<IDropdownOption[]>;
    getFilterFields: (webUrl: string, listTitle: string) => Promise<IQueryFilterField[]>;
    getViewFieldsChecklistItems: (webUrl: string, listTitle: string) => Promise<IChecklistItem[]>;
    getPeoplePickerSuggestions: (webUrl: string, filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) => Promise<IPersonaProps[]>;
    getTaxonomyPickerSuggestions: (webUrl: string, listTitle: string, field: IQueryFilterField, filterText: string, currentTerms: ITag[]) => Promise<ITag[]>;
    ensureFileResolves: (filePath: string) => Promise<{}>;
    isValidTemplateFile: (filePath: string) => boolean;
    generateDefaultTemplate: (viewFields: string[]) => string;
    clearCachedListTitleOptions: () => void;
    clearCachedOrderByOptions: () => void;
    clearCachedFilterFields: () => void;
    clearCachedViewFields: () => void;
}