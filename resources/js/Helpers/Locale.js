export const tableLocale={
    noRowsLabel: 'Nessuna riga',
    noResultsOverlayLabel: 'Nessuna riga trovata.',
    errorOverlayDefaultLabel: 'C\'è stato un errore.',

    // Density selector toolbar button text
    toolbarDensity: 'Density',
    toolbarDensityLabel: 'Density',
    toolbarDensityCompact: 'Compact',
    toolbarDensityStandard: 'Standard',
    toolbarDensityComfortable: 'Comfortable',

    // Columns selector toolbar button text
    toolbarColumns: 'Colonne',
    toolbarColumnsLabel: 'Seleziona colonne',

    // Filters toolbar button text
    toolbarFilters: 'Filters',
    toolbarFiltersLabel: 'Show filters',
    toolbarFiltersTooltipHide: 'Hide filters',
    toolbarFiltersTooltipShow: 'Show filters',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} active filters` : `${count} active filter`,

    // Quick filter toolbar field
    toolbarQuickFilterPlaceholder: 'Search…',
    toolbarQuickFilterLabel: 'Search',
    toolbarQuickFilterDeleteIconLabel: 'Clear',

    // Export selector toolbar button text
    toolbarExport: 'Export',
    toolbarExportLabel: 'Export',
    toolbarExportCSV: 'Download as CSV',
    toolbarExportPrint: 'Print',
    toolbarExportExcel: 'Download as Excel',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Find column',
    columnsPanelTextFieldPlaceholder: 'Column title',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Show all',
    columnsPanelHideAllButton: 'Hide all',

    // Filter panel text
    filterPanelAddFilter: 'Add filter',
    filterPanelDeleteIconLabel: 'Delete',
    filterPanelLinkOperator: 'Logic operator',
    filterPanelOperator: 'Operator',
    filterPanelOperatorAnd: 'And',
    filterPanelOperatorOr: 'Or',
    filterPanelColumns: 'Columns',
    filterPanelInputLabel: 'Value',
    filterPanelInputPlaceholder: 'Filter value',

    // Filter operators text
    filterOperatorContains: 'contains',
    filterOperatorEquals: 'equals',
    filterOperatorStartsWith: 'starts with',
    filterOperatorEndsWith: 'ends with',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
    filterOperatorIsEmpty: 'is empty',
    filterOperatorIsNotEmpty: 'is not empty',
    filterOperatorIsAnyOf: 'is any of',

    // Filter values text
    filterValueAny: 'any',
    filterValueTrue: 'true',
    filterValueFalse: 'false',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Mostra colonne',
    columnMenuManageColumns: 'Gestisci colonne',
    columnMenuFilter: 'Filtra',
    columnMenuHideColumn: 'Nascondi colonna',
    columnMenuUnsort: 'Non ordinare',
    columnMenuSortAsc: 'Ordina ASC',
    columnMenuSortDesc: 'Ordina DESC',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} filtri attivi` : `${count} filtro attivo`,
    columnHeaderFiltersLabel: 'Mostra filtri',
    columnHeaderSortIconLabel: 'Ordina',

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} righe selezionate`
            : `${count.toLocaleString()} riga selezionata`,

    // Total row amount footer text
    footerTotalRows: 'Totale righe:',

    // Total visible row amount footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} di ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox selection',
    checkboxSelectionSelectAllRows: 'Seleziona tutte le righe',
    checkboxSelectionUnselectAllRows: 'Deseleziona tutte le righe',
    checkboxSelectionSelectRow: 'Seleziona riga',
    checkboxSelectionUnselectRow: 'Deseleziona riga',

    // Boolean cell text
    booleanCellTrueLabel: 'si',
    booleanCellFalseLabel: 'no',

    // Actions cell more text
    actionsCellMore: 'more',

    // Column pinning text
    pinToLeft: 'Pin to left',
    pinToRight: 'Pin to right',
    unpin: 'Unpin',

    // Tree Data
    treeDataGroupingHeaderName: 'Gruppo',
    treeDataExpand: 'see children',
    treeDataCollapse: 'hide children',

    // Grouping columns
    groupingColumnHeaderName: 'Raggruppa',
    groupColumn: (name) => `Raggruupa per ${name}`,
    unGroupColumn: (name) => `Stop raggruppamento per ${name}`,

    // Master/detail
    detailPanelToggle: 'Detail panel toggle',
    expandDetailPanel: 'Espandi',
    collapseDetailPanel: 'Comprimi',

    // Used core components translation keys
    MuiTablePagination: {
        labelDisplayedRows: ({ from, to, count }) =>
            `${from} - ${to} di ${count}`,
    },

    // Row reordering text
    rowReorderingHeaderName: 'Ordina righe',

    // Aggregation
    aggregationMenuItemHeader: 'Aggregazione',
    aggregationFunctionLabelSum: 'sum',
    aggregationFunctionLabelAvg: 'avg',
    aggregationFunctionLabelMin: 'min',
    aggregationFunctionLabelMax: 'max',
    aggregationFunctionLabelSize: 'size',
}
