const COLORS = {
  BLUE: "#00003c",
  BLUE_TINT_HALF: "#191950",
  BLUE_TINT_1: "#323264",
  BLUE_TINT_2: "#64648C",
  TEAL: "#1ed2af",
  RED: "#d00414",
  WHITE: "#FFF",
  OFFWHITE: "#fef9e6",
  OFFWHITE_SHADE1: "#E5E0CF",
  OFFWHITE_SHADE2: "#CBC7B8",

  // OFF_WHITE_LIGHT: "#fffcf2",
  // BEIGE: "#f7f0dc",
  // LIGHT_BEIGE: "#f7ede8",

  // TRANSPARENT: "transparent",
};

// // This is the default theme we use for our Shiki Syntax Highlighter
// export const theme = {
//   // We updating this color because the background color and comment text color
//   // in the Codebox component do not comply with accessibility standards
//   // @see https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
//   colorReplacements: {
//     T.TEXT_4: "#707e99",
//     "#2E3440": COLORS.LIGHT_BEIGE,
//     T.TEXT_TIRIARY: COLORS.RED,
//   },
//   ...shikiNordTheme,
// };
// console.log(JSON.stringify(shikiNordTheme, null, 2));

const T = {
  BACKGROUND: COLORS.BLUE_TINT_HALF,
  TEXT_PRIMARY: COLORS.TEAL,
  TEXT_SECONDARY: COLORS.OFFWHITE,
  TEXT_TIRIARY: COLORS.OFFWHITE,
  TEXT_4: COLORS.BLUE_TINT_2,
  TEXT_5: COLORS.RED,
  TEXT_6: COLORS.OFFWHITE,
  TEXT_7: COLORS.TEAL,
};

export const theme = {
  colors: {
    "activityBar.activeBackground": "#3b4252",
    "activityBar.activeBorder": T.TEXT_TIRIARY,
    "activityBar.background": "#2e3440",
    "activityBar.dropBackground": "#3b4252",
    "activityBar.foreground": "#d8dee9",
    "activityBarBadge.background": T.TEXT_TIRIARY,
    "activityBarBadge.foreground": "#2e3440",
    "badge.background": T.TEXT_TIRIARY,
    "badge.foreground": "#2e3440",
    "button.background": "#88c0d0ee",
    "button.foreground": "#2e3440",
    "button.hoverBackground": T.TEXT_TIRIARY,
    "button.secondaryBackground": "#434c5e",
    "button.secondaryForeground": "#d8dee9",
    "button.secondaryHoverBackground": "#4c566a",
    "charts.blue": T.TEXT_PRIMARY,
    "charts.foreground": "#d8dee9",
    "charts.green": T.TEXT_5,
    "charts.lines": T.TEXT_TIRIARY,
    "charts.orange": "#d08770",
    "charts.purple": "#b48ead",
    "charts.red": "#bf616a",
    "charts.yellow": "#ebcb8b",
    "debugConsole.errorForeground": "#bf616a",
    "debugConsole.infoForeground": T.TEXT_TIRIARY,
    "debugConsole.sourceForeground": T.TEXT_4,
    "debugConsole.warningForeground": "#ebcb8b",
    "debugConsoleInputIcon.foreground": T.TEXT_PRIMARY,
    "debugExceptionWidget.background": "#4c566a",
    "debugExceptionWidget.border": "#2e3440",
    "debugToolBar.background": "#3b4252",
    descriptionForeground: "#d8dee9e6",
    "diffEditor.insertedTextBackground": "#81a1c133",
    "diffEditor.removedTextBackground": "#bf616a4d",
    "dropdown.background": "#3b4252",
    "dropdown.border": "#3b4252",
    "dropdown.foreground": "#d8dee9",
    "editor.background": T.BACKGROUND,
    "editor.findMatchBackground": "#88c0d066",
    "editor.findMatchHighlightBackground": "#88c0d033",
    "editor.findRangeHighlightBackground": "#88c0d033",
    "editor.focusedStackFrameHighlightBackground": "#5e81ac",
    "editor.foreground": "#d8dee9",
    "editor.hoverHighlightBackground": "#3b4252",
    "editor.inactiveSelectionBackground": "#434c5ecc",
    "editor.inlineValuesBackground": "#4c566a",
    "editor.inlineValuesForeground": "#eceff4",
    "editor.lineHighlightBackground": "#3b4252",
    "editor.lineHighlightBorder": "#3b4252",
    "editor.rangeHighlightBackground": "#434c5e52",
    "editor.selectionBackground": "#434c5ecc",
    "editor.selectionHighlightBackground": "#434c5ecc",
    "editor.stackFrameHighlightBackground": "#5e81ac",
    "editor.wordHighlightBackground": "#81a1c166",
    "editor.wordHighlightStrongBackground": "#81a1c199",
    "editorActiveLineNumber.foreground": "#d8dee9cc",
    "editorBracketHighlight.foreground1": T.TEXT_SECONDARY,
    "editorBracketHighlight.foreground2": T.TEXT_TIRIARY,
    "editorBracketHighlight.foreground3": T.TEXT_PRIMARY,
    "editorBracketHighlight.foreground4": "#5e81ac",
    "editorBracketHighlight.foreground5": T.TEXT_SECONDARY,
    "editorBracketHighlight.foreground6": T.TEXT_TIRIARY,
    "editorBracketHighlight.unexpectedBracket.foreground": "#bf616a",
    "editorBracketMatch.background": "#2e344000",
    "editorBracketMatch.border": T.TEXT_TIRIARY,
    "editorCodeLens.foreground": "#4c566a",
    "editorCursor.foreground": "#d8dee9",
    "editorError.border": "#bf616a00",
    "editorError.foreground": "#bf616a",
    "editorGroup.background": "#2e3440",
    "editorGroup.border": "#3b425201",
    "editorGroup.dropBackground": "#3b425299",
    "editorGroupHeader.border": "#3b425200",
    "editorGroupHeader.noTabsBackground": "#2e3440",
    "editorGroupHeader.tabsBackground": "#2e3440",
    "editorGroupHeader.tabsBorder": "#3b425200",
    "editorGutter.addedBackground": T.TEXT_5,
    "editorGutter.background": "#2e3440",
    "editorGutter.deletedBackground": "#bf616a",
    "editorGutter.modifiedBackground": "#ebcb8b",
    "editorHint.border": "#ebcb8b00",
    "editorHint.foreground": "#ebcb8b",
    "editorHoverWidget.background": "#3b4252",
    "editorHoverWidget.border": "#3b4252",
    "editorIndentGuide.activeBackground": "#4c566a",
    "editorIndentGuide.background": "#434c5eb3",
    "editorInlayHint.background": "#434c5e",
    "editorInlayHint.foreground": "#d8dee9",
    "editorLineNumber.activeForeground": "#d8dee9",
    "editorLineNumber.foreground": "#4c566a",
    "editorLink.activeForeground": T.TEXT_TIRIARY,
    "editorMarkerNavigation.background": "#5e81acc0",
    "editorMarkerNavigationError.background": "#bf616ac0",
    "editorMarkerNavigationWarning.background": "#ebcb8bc0",
    "editorOverviewRuler.addedForeground": T.TEXT_5,
    "editorOverviewRuler.border": "#3b4252",
    "editorOverviewRuler.currentContentForeground": "#3b4252",
    "editorOverviewRuler.deletedForeground": "#bf616a",
    "editorOverviewRuler.errorForeground": "#bf616a",
    "editorOverviewRuler.findMatchForeground": "#88c0d066",
    "editorOverviewRuler.incomingContentForeground": "#3b4252",
    "editorOverviewRuler.infoForeground": T.TEXT_PRIMARY,
    "editorOverviewRuler.modifiedForeground": "#ebcb8b",
    "editorOverviewRuler.rangeHighlightForeground": "#88c0d066",
    "editorOverviewRuler.selectionHighlightForeground": "#88c0d066",
    "editorOverviewRuler.warningForeground": "#ebcb8b",
    "editorOverviewRuler.wordHighlightForeground": "#88c0d066",
    "editorOverviewRuler.wordHighlightStrongForeground": "#88c0d066",
    "editorRuler.foreground": "#434c5e",
    "editorSuggestWidget.background": "#2e3440",
    "editorSuggestWidget.border": "#3b4252",
    "editorSuggestWidget.focusHighlightForeground": T.TEXT_TIRIARY,
    "editorSuggestWidget.foreground": "#d8dee9",
    "editorSuggestWidget.highlightForeground": T.TEXT_TIRIARY,
    "editorSuggestWidget.selectedBackground": "#434c5e",
    "editorSuggestWidget.selectedForeground": "#d8dee9",
    "editorWarning.border": "#ebcb8b00",
    "editorWarning.foreground": "#ebcb8b",
    "editorWhitespace.foreground": "#4c566ab3",
    "editorWidget.background": "#2e3440",
    "editorWidget.border": "#3b4252",
    errorForeground: "#bf616a",
    "extensionButton.prominentBackground": "#434c5e",
    "extensionButton.prominentForeground": "#d8dee9",
    "extensionButton.prominentHoverBackground": "#4c566a",
    focusBorder: "#3b4252",
    foreground: "#d8dee9",
    "gitDecoration.conflictingResourceForeground": "#5e81ac",
    "gitDecoration.deletedResourceForeground": "#bf616a",
    "gitDecoration.ignoredResourceForeground": "#d8dee966",
    "gitDecoration.modifiedResourceForeground": "#ebcb8b",
    "gitDecoration.stageDeletedResourceForeground": "#bf616a",
    "gitDecoration.stageModifiedResourceForeground": "#ebcb8b",
    "gitDecoration.submoduleResourceForeground": T.TEXT_SECONDARY,
    "gitDecoration.untrackedResourceForeground": T.TEXT_5,
    "input.background": "#3b4252",
    "input.border": "#3b4252",
    "input.foreground": "#d8dee9",
    "input.placeholderForeground": "#d8dee999",
    "inputOption.activeBackground": "#5e81ac",
    "inputOption.activeBorder": "#5e81ac",
    "inputOption.activeForeground": "#eceff4",
    "inputValidation.errorBackground": "#bf616a",
    "inputValidation.errorBorder": "#bf616a",
    "inputValidation.infoBackground": T.TEXT_PRIMARY,
    "inputValidation.infoBorder": T.TEXT_PRIMARY,
    "inputValidation.warningBackground": "#d08770",
    "inputValidation.warningBorder": "#d08770",
    "keybindingLabel.background": "#4c566a",
    "keybindingLabel.border": "#4c566a",
    "keybindingLabel.bottomBorder": "#4c566a",
    "keybindingLabel.foreground": "#d8dee9",
    "list.activeSelectionBackground": T.TEXT_TIRIARY,
    "list.activeSelectionForeground": "#2e3440",
    "list.dropBackground": "#88c0d099",
    "list.errorForeground": "#bf616a",
    "list.focusBackground": "#88c0d099",
    "list.focusForeground": "#d8dee9",
    "list.focusHighlightForeground": "#eceff4",
    "list.highlightForeground": T.TEXT_TIRIARY,
    "list.hoverBackground": "#3b4252",
    "list.hoverForeground": "#eceff4",
    "list.inactiveFocusBackground": "#434c5ecc",
    "list.inactiveSelectionBackground": "#434c5e",
    "list.inactiveSelectionForeground": "#d8dee9",
    "list.warningForeground": "#ebcb8b",
    "merge.border": "#3b425200",
    "merge.currentContentBackground": "#81a1c14d",
    "merge.currentHeaderBackground": "#81a1c166",
    "merge.incomingContentBackground": "#8fbcbb4d",
    "merge.incomingHeaderBackground": "#8fbcbb66",
    "minimap.background": "#2e3440",
    "minimap.errorHighlight": "#bf616acc",
    "minimap.findMatchHighlight": T.TEXT_TIRIARY,
    "minimap.selectionHighlight": "#88c0d0cc",
    "minimap.warningHighlight": "#ebcb8bcc",
    "minimapGutter.addedBackground": T.TEXT_5,
    "minimapGutter.deletedBackground": "#bf616a",
    "minimapGutter.modifiedBackground": "#ebcb8b",
    "minimapSlider.activeBackground": "#434c5eaa",
    "minimapSlider.background": "#434c5e99",
    "minimapSlider.hoverBackground": "#434c5eaa",
    "notification.background": "#3b4252",
    "notification.buttonBackground": "#434c5e",
    "notification.buttonForeground": "#d8dee9",
    "notification.buttonHoverBackground": "#4c566a",
    "notification.errorBackground": "#bf616a",
    "notification.errorForeground": "#2e3440",
    "notification.foreground": "#d8dee9",
    "notification.infoBackground": T.TEXT_TIRIARY,
    "notification.infoForeground": "#2e3440",
    "notification.warningBackground": "#ebcb8b",
    "notification.warningForeground": "#2e3440",
    "notificationCenter.border": "#3b425200",
    "notificationCenterHeader.background": "#2e3440",
    "notificationCenterHeader.foreground": T.TEXT_TIRIARY,
    "notificationLink.foreground": T.TEXT_TIRIARY,
    "notificationToast.border": "#3b425200",
    "notifications.background": "#3b4252",
    "notifications.border": "#2e3440",
    "notifications.foreground": "#d8dee9",
    "panel.background": "#2e3440",
    "panel.border": "#3b4252",
    "panelTitle.activeBorder": "#88c0d000",
    "panelTitle.activeForeground": T.TEXT_TIRIARY,
    "panelTitle.inactiveForeground": "#d8dee9",
    "peekView.border": "#4c566a",
    "peekViewEditor.background": "#2e3440",
    "peekViewEditor.matchHighlightBackground": "#88c0d04d",
    "peekViewEditorGutter.background": "#2e3440",
    "peekViewResult.background": "#2e3440",
    "peekViewResult.fileForeground": T.TEXT_TIRIARY,
    "peekViewResult.lineForeground": "#d8dee966",
    "peekViewResult.matchHighlightBackground": "#88c0d0cc",
    "peekViewResult.selectionBackground": "#434c5e",
    "peekViewResult.selectionForeground": "#d8dee9",
    "peekViewTitle.background": "#3b4252",
    "peekViewTitleDescription.foreground": "#d8dee9",
    "peekViewTitleLabel.foreground": T.TEXT_TIRIARY,
    "pickerGroup.border": "#3b4252",
    "pickerGroup.foreground": T.TEXT_TIRIARY,
    "progressBar.background": T.TEXT_TIRIARY,
    "quickInputList.focusBackground": T.TEXT_TIRIARY,
    "quickInputList.focusForeground": "#2e3440",
    "sash.hoverBorder": T.TEXT_TIRIARY,
    "scrollbar.shadow": "#00000066",
    "scrollbarSlider.activeBackground": "#434c5eaa",
    "scrollbarSlider.background": "#434c5e99",
    "scrollbarSlider.hoverBackground": "#434c5eaa",
    "selection.background": "#88c0d099",
    "sideBar.background": "#2e3440",
    "sideBar.border": "#3b4252",
    "sideBar.foreground": "#d8dee9",
    "sideBarSectionHeader.background": "#3b4252",
    "sideBarSectionHeader.foreground": "#d8dee9",
    "sideBarTitle.foreground": "#d8dee9",
    "statusBar.background": "#3b4252",
    "statusBar.border": "#3b425200",
    "statusBar.debuggingBackground": "#5e81ac",
    "statusBar.debuggingForeground": "#d8dee9",
    "statusBar.foreground": "#d8dee9",
    "statusBar.noFolderBackground": "#3b4252",
    "statusBar.noFolderForeground": "#d8dee9",
    "statusBarItem.activeBackground": "#4c566a",
    "statusBarItem.errorBackground": "#3b4252",
    "statusBarItem.errorForeground": "#bf616a",
    "statusBarItem.hoverBackground": "#434c5e",
    "statusBarItem.prominentBackground": "#3b4252",
    "statusBarItem.prominentHoverBackground": "#434c5e",
    "statusBarItem.warningBackground": "#ebcb8b",
    "statusBarItem.warningForeground": "#2e3440",
    "tab.activeBackground": "#3b4252",
    "tab.activeBorder": "#88c0d000",
    "tab.activeBorderTop": "#88c0d000",
    "tab.activeForeground": "#d8dee9",
    "tab.border": "#3b425200",
    "tab.hoverBackground": "#3b4252cc",
    "tab.hoverBorder": "#88c0d000",
    "tab.inactiveBackground": "#2e3440",
    "tab.inactiveForeground": "#d8dee966",
    "tab.lastPinnedBorder": "#4c566a",
    "tab.unfocusedActiveBorder": "#88c0d000",
    "tab.unfocusedActiveBorderTop": "#88c0d000",
    "tab.unfocusedActiveForeground": "#d8dee999",
    "tab.unfocusedHoverBackground": "#3b4252b3",
    "tab.unfocusedHoverBorder": "#88c0d000",
    "tab.unfocusedInactiveForeground": "#d8dee966",
    "terminal.ansiBlack": "#3b4252",
    "terminal.ansiBlue": T.TEXT_PRIMARY,
    "terminal.ansiBrightBlack": "#4c566a",
    "terminal.ansiBrightBlue": T.TEXT_PRIMARY,
    "terminal.ansiBrightCyan": T.TEXT_SECONDARY,
    "terminal.ansiBrightGreen": T.TEXT_5,
    "terminal.ansiBrightMagenta": "#b48ead",
    "terminal.ansiBrightRed": "#bf616a",
    "terminal.ansiBrightWhite": "#eceff4",
    "terminal.ansiBrightYellow": "#ebcb8b",
    "terminal.ansiCyan": T.TEXT_TIRIARY,
    "terminal.ansiGreen": T.TEXT_5,
    "terminal.ansiMagenta": "#b48ead",
    "terminal.ansiRed": "#bf616a",
    "terminal.ansiWhite": "#e5e9f0",
    "terminal.ansiYellow": "#ebcb8b",
    "terminal.background": "#2e3440",
    "terminal.foreground": "#d8dee9",
    "terminal.tab.activeBorder": T.TEXT_TIRIARY,
    "textBlockQuote.background": "#3b4252",
    "textBlockQuote.border": T.TEXT_PRIMARY,
    "textCodeBlock.background": "#4c566a",
    "textLink.activeForeground": T.TEXT_TIRIARY,
    "textLink.foreground": T.TEXT_TIRIARY,
    "textPreformat.foreground": T.TEXT_SECONDARY,
    "textSeparator.foreground": "#eceff4",
    "titleBar.activeBackground": "#2e3440",
    "titleBar.activeForeground": "#d8dee9",
    "titleBar.border": "#2e344000",
    "titleBar.inactiveBackground": "#2e3440",
    "titleBar.inactiveForeground": "#d8dee966",
    "tree.indentGuidesStroke": T.TEXT_4,
    "walkThrough.embeddedEditorBackground": "#2e3440",
    "welcomePage.buttonBackground": "#434c5e",
    "welcomePage.buttonHoverBackground": "#4c566a",
    "widget.shadow": "#00000066",
  },
  displayName: "Atlas",
  name: "atlas",
  semanticHighlighting: true,
  tokenColors: [
    {
      settings: {
        background: T.BACKGROUND,
        foreground: T.TEXT_6,
      },
    },
    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "strong",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "comment",
      settings: {
        foreground: T.TEXT_4,
      },
    },
    {
      scope: "constant.character",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: "constant.language",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: "#B48EAD",
      },
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: ["entity.name.class", "entity.name.type.class"],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "entity.other.inherited-class",
      settings: {
        fontStyle: "bold",
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        background: "#EBCB8B",
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        background: "#BF616A",
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "keyword.other.new",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: "#BF616A",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: T.TEXT_5,
      },
    },
    {
      scope: "meta.preprocessor",
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: "punctuation",
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: [
        "punctuation.definition.method-parameters",
        "punctuation.definition.function-parameters",
        "punctuation.definition.parameters",
      ],
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: "punctuation.definition.tag",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "punctuation.definition.comment",
        "punctuation.end.definition.comment",
        "punctuation.start.definition.comment",
      ],
      settings: {
        foreground: T.TEXT_4,
      },
    },
    {
      scope: "punctuation.section",
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end",
      ],
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "punctuation.terminator",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "punctuation.definition.variable",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "string",
      settings: {
        foreground: T.TEXT_5,
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: "support.class",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "support.function",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "support.function.construct",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "support.type",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "support.type.exception",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#b48ead",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#bf616a",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#ebcb8b",
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "variable.language",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "punctuation.separator.pointer-access.c",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "source.c meta.preprocessor.include",
        "source.c string.quoted.other.lt-gt.include",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.cpp keyword.control.directive.conditional",
        "source.cpp punctuation.definition.directive",
        "source.c keyword.control.directive.conditional",
        "source.c punctuation.definition.directive",
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#5E81AC",
      },
    },
    {
      scope: "source.css constant.other.color.rgb-value",
      settings: {
        foreground: "#B48EAD",
      },
    },
    {
      scope: "source.css meta.property-value",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "source.css keyword.control.at-rule.media",
        "source.css keyword.control.at-rule.media punctuation.definition.keyword",
      ],
      settings: {
        foreground: "#D08770",
      },
    },
    {
      scope: "source.css punctuation.definition.keyword",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.css support.type.property-name",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "source.diff meta.diff.range.context",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.diff meta.diff.header.from-file",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.diff punctuation.definition.from-file",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.diff punctuation.definition.range",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.diff punctuation.definition.separator",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "entity.name.type.module.elixir",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "variable.other.readwrite.module.elixir",
      settings: {
        fontStyle: "bold",
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "constant.other.symbol.elixir",
      settings: {
        fontStyle: "bold",
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "variable.other.constant.elixir",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.go constant.other.placeholder.go",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope:
        "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.java constant.other",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "source.java keyword.other.documentation",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java keyword.other.documentation.author.javadoc",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.java keyword.other.documentation.directive",
        "source.java keyword.other.documentation.custom",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java keyword.other.documentation.see.javadoc",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java meta.method-call meta.method",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "source.java meta.tag.template.link.javadoc",
        "source.java string.other.link.title.javadoc",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java meta.tag.template.value.javadoc",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "source.java punctuation.definition.keyword.javadoc",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.java punctuation.definition.tag.begin.javadoc",
        "source.java punctuation.definition.tag.end.javadoc",
      ],
      settings: {
        foreground: T.TEXT_4,
      },
    },
    {
      scope: "source.java storage.modifier.import",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java storage.modifier.package",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java storage.type",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java storage.type.annotation",
      settings: {
        foreground: "#D08770",
      },
    },
    {
      scope: "source.java storage.type.generic",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.java storage.type.primitive",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "source.js punctuation.decorator",
        "source.js meta.decorator variable.other.readwrite",
        "source.js meta.decorator entity.name.function",
      ],
      settings: {
        foreground: "#D08770",
      },
    },
    {
      scope: "source.js meta.object-literal.key",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "source.js storage.type.class.jsdoc",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.js string.quoted.template punctuation.quasi.element.begin",
        "source.js string.quoted.template punctuation.quasi.element.end",
        "source.js string.template punctuation.definition.template-expression",
      ],
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.js string.quoted.template meta.method-call.with-arguments",
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: [
        "source.js string.template meta.template.expression support.variable.property",
        "source.js string.template meta.template.expression variable.other.object",
      ],
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "source.js support.type.primitive",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.js variable.other.object",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "source.js variable.other.readwrite.alias",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.js meta.embedded.line meta.brace.square",
        "source.js meta.embedded.line meta.brace.round",
        "source.js string.quoted.template meta.brace.square",
        "source.js string.quoted.template meta.brace.round",
      ],
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: "text.html.basic constant.character.entity.html",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: "text.html.basic constant.other.inline-data",
      settings: {
        fontStyle: "italic",
        foreground: "#D08770",
      },
    },
    {
      scope: "text.html.basic meta.tag.sgml.doctype",
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: "text.html.basic punctuation.definition.entity",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.properties entity.name.section.group-title.ini",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "source.properties punctuation.separator.key-value.ini",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "text.html.markdown markup.fenced_code.block",
        "text.html.markdown markup.fenced_code.block punctuation.definition",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "text.html.markdown markup.inline.raw",
        "text.html.markdown markup.inline.raw punctuation.definition.raw",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "text.html.markdown markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "text.html.markdown markup.underline.link",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: "text.html.markdown beginning.punctuation.definition.list",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "text.html.markdown beginning.punctuation.definition.quote",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "text.html.markdown markup.quote",
      settings: {
        foreground: T.TEXT_4,
      },
    },
    {
      scope: "text.html.markdown constant.character.math.tex",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "text.html.markdown punctuation.definition.math.begin",
        "text.html.markdown punctuation.definition.math.end",
      ],
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: "text.html.markdown punctuation.definition.function.math.tex",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "text.html.markdown punctuation.math.operator.latex",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "text.html.markdown punctuation.definition.heading",
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "text.html.markdown punctuation.definition.constant",
        "text.html.markdown punctuation.definition.string",
      ],
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: [
        "text.html.markdown constant.other.reference.link",
        "text.html.markdown string.other.link.description",
        "text.html.markdown string.other.link.title",
      ],
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "source.perl punctuation.definition.variable",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: [
        "source.php meta.function-call",
        "source.php meta.function-call.object",
      ],
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "source.python entity.name.function.decorator",
        "source.python meta.function.decorator support.type",
      ],
      settings: {
        foreground: "#D08770",
      },
    },
    {
      scope: "source.python meta.function-call.generic",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: "source.python support.type",
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: ["source.python variable.parameter.function.language"],
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: [
        "source.python meta.function.parameters variable.parameter.function.language.special.self",
      ],
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.rust entity.name.type",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "source.rust meta.macro entity.name.function",
      settings: {
        fontStyle: "bold",
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "source.rust meta.attribute",
        "source.rust meta.attribute punctuation",
        "source.rust meta.attribute keyword.operator",
      ],
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: "source.rust entity.name.type.trait",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "source.rust punctuation.definition.interpolation",
      settings: {
        foreground: "#EBCB8B",
      },
    },
    {
      scope: [
        "source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
        "source.css.scss punctuation.definition.interpolation.end.bracket.curly",
      ],
      settings: {
        foreground: T.TEXT_PRIMARY,
      },
    },
    {
      scope: "source.css.scss variable.interpolation",
      settings: {
        fontStyle: "italic",
        foreground: "#D8DEE9",
      },
    },
    {
      scope: [
        "source.ts punctuation.decorator",
        "source.ts meta.decorator variable.other.readwrite",
        "source.ts meta.decorator entity.name.function",
        "source.tsx punctuation.decorator",
        "source.tsx meta.decorator variable.other.readwrite",
        "source.tsx meta.decorator entity.name.function",
      ],
      settings: {
        foreground: "#D08770",
      },
    },
    {
      scope: [
        "source.ts meta.object-literal.key",
        "source.tsx meta.object-literal.key",
      ],
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: [
        "source.ts meta.object-literal.key entity.name.function",
        "source.tsx meta.object-literal.key entity.name.function",
      ],
      settings: {
        foreground: T.TEXT_TIRIARY,
      },
    },
    {
      scope: [
        "source.ts support.class",
        "source.ts support.type",
        "source.ts entity.name.type",
        "source.ts entity.name.class",
        "source.tsx support.class",
        "source.tsx support.type",
        "source.tsx entity.name.type",
        "source.tsx entity.name.class",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: [
        "source.ts support.constant.math",
        "source.ts support.constant.dom",
        "source.ts support.constant.json",
        "source.tsx support.constant.math",
        "source.tsx support.constant.dom",
        "source.tsx support.constant.json",
      ],
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: ["source.ts support.variable", "source.tsx support.variable"],
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: [
        "source.ts meta.embedded.line meta.brace.square",
        "source.ts meta.embedded.line meta.brace.round",
        "source.tsx meta.embedded.line meta.brace.square",
        "source.tsx meta.embedded.line meta.brace.round",
      ],
      settings: {
        foreground: "#ECEFF4",
      },
    },
    {
      scope: "text.xml entity.name.tag.namespace",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
    {
      scope: "text.xml keyword.other.doctype",
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: "text.xml meta.tag.preprocessor entity.name.tag",
      settings: {
        foreground: "#5E81AC",
      },
    },
    {
      scope: [
        "text.xml string.unquoted.cdata",
        "text.xml string.unquoted.cdata punctuation.definition.string",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#D08770",
      },
    },
    {
      scope: "source.yaml entity.name.tag",
      settings: {
        foreground: T.TEXT_SECONDARY,
      },
    },
  ],
  type: "dark",
};

// export const theme: ThemeInput & { name: string } = {
//   colors: {
//     "actionBar.toggledBackground": "#383a49",
//     "activityBarBadge.background": "#007ACC",
//     "checkbox.border": "#6B6B6B",
//     "editor.background": COLORS.LIGHT_BEIGE,
//     "editor.foreground": "#D4D4D4",
//     "editor.inactiveSelectionBackground": "#3A3D41",
//     "editor.selectionHighlightBackground": "#ADD6FF26",
//     "editorIndentGuide.activeBackground": "#707070",
//     "editorIndentGuide.background": "#404040",
//     "input.placeholderForeground": "#A6A6A6",
//     "list.activeSelectionIconForeground": "#FFF",
//     "list.dropBackground": "#383B3D",
//     "menu.background": "#252526",
//     "menu.border": "#454545",
//     "menu.foreground": "#CCCCCC",
//     "menu.separatorBackground": "#454545",
//     "ports.iconRunningProcessForeground": "#369432",
//     "sideBarSectionHeader.background": "#0000",
//     "sideBarSectionHeader.border": "#ccc3",
//     "sideBarTitle.foreground": "#BBBBBB",
//     "statusBarItem.remoteBackground": "#16825D",
//     "statusBarItem.remoteForeground": "#FFF",
//     "tab.lastPinnedBorder": "#ccc3",
//     "terminal.inactiveSelectionBackground": "#3A3D41",
//     "widget.border": "#303031",
//   },
//   displayName: "Dark Plus",
//   name: "dark-plus",
//   semanticHighlighting: true,
//   semanticTokenColors: {
//     customLiteral: "#DCDCAA",
//     newOperator: "#C586C0",
//     numberLiteral: "#b5cea8",
//     stringLiteral: "#ce9178",
//   },
//   tokenColors: [
//     {
//       scope: [
//         "meta.embedded",
//         "source.groovy.embedded",
//         "string meta.image.inline.markdown",
//         "variable.legacy.builtin.python",
//       ],
//       settings: {
//         foreground: "#D4D4D4",
//       },
//     },
//     {
//       scope: "emphasis",
//       settings: {
//         fontStyle: "italic",
//       },
//     },
//     {
//       scope: "strong",
//       settings: {
//         fontStyle: "bold",
//       },
//     },
//     {
//       scope: "header",
//       settings: {
//         foreground: "#000080",
//       },
//     },
//     {
//       scope: "comment",
//       settings: {
//         foreground: "#6A9955",
//       },
//     },
//     {
//       scope: "constant.language",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: [
//         "constant.numeric",
//         "variable.other.enummember",
//         "keyword.operator.plus.exponent",
//         "keyword.operator.minus.exponent",
//       ],
//       settings: {
//         foreground: "#b5cea8",
//       },
//     },
//     {
//       scope: "constant.regexp",
//       settings: {
//         foreground: "#646695",
//       },
//     },
//     {
//       scope: "entity.name.tag",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "entity.name.tag.css",
//       settings: {
//         foreground: "#d7ba7d",
//       },
//     },
//     {
//       scope: "entity.other.attribute-name",
//       settings: {
//         foreground: "#9cdcfe",
//       },
//     },
//     {
//       scope: [
//         "entity.other.attribute-name.class.css",
//         "entity.other.attribute-name.class.mixin.css",
//         "entity.other.attribute-name.id.css",
//         "entity.other.attribute-name.parent-selector.css",
//         "entity.other.attribute-name.pseudo-class.css",
//         "entity.other.attribute-name.pseudo-element.css",
//         "source.css.less entity.other.attribute-name.id",
//         "entity.other.attribute-name.scss",
//       ],
//       settings: {
//         foreground: "#d7ba7d",
//       },
//     },
//     {
//       scope: "invalid",
//       settings: {
//         foreground: "#f44747",
//       },
//     },
//     {
//       scope: "markup.underline",
//       settings: {
//         fontStyle: "underline",
//       },
//     },
//     {
//       scope: "markup.bold",
//       settings: {
//         fontStyle: "bold",
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "markup.heading",
//       settings: {
//         fontStyle: "bold",
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "markup.italic",
//       settings: {
//         fontStyle: "italic",
//       },
//     },
//     {
//       scope: "markup.strikethrough",
//       settings: {
//         fontStyle: "strikethrough",
//       },
//     },
//     {
//       scope: "markup.inserted",
//       settings: {
//         foreground: "#b5cea8",
//       },
//     },
//     {
//       scope: "markup.deleted",
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "markup.changed",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "punctuation.definition.quote.begin.markdown",
//       settings: {
//         foreground: "#6A9955",
//       },
//     },
//     {
//       scope: "punctuation.definition.list.begin.markdown",
//       settings: {
//         foreground: "#6796e6",
//       },
//     },
//     {
//       scope: "markup.inline.raw",
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "punctuation.definition.tag",
//       settings: {
//         foreground: "#808080",
//       },
//     },
//     {
//       scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "meta.preprocessor.string",
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "meta.preprocessor.numeric",
//       settings: {
//         foreground: "#b5cea8",
//       },
//     },
//     {
//       scope: "meta.structure.dictionary.key.python",
//       settings: {
//         foreground: "#9cdcfe",
//       },
//     },
//     {
//       scope: "meta.diff.header",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "storage",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "storage.type",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: ["storage.modifier", "keyword.operator.noexcept"],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: ["string", "meta.embedded.assembly"],
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "string.tag",
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "string.value",
//       settings: {
//         foreground: "#ce9178",
//       },
//     },
//     {
//       scope: "string.regexp",
//       settings: {
//         foreground: "#d16969",
//       },
//     },
//     {
//       scope: [
//         "punctuation.definition.template-expression.begin",
//         "punctuation.definition.template-expression.end",
//         "punctuation.section.embedded",
//       ],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: ["meta.template.expression"],
//       settings: {
//         foreground: "#d4d4d4",
//       },
//     },
//     {
//       scope: [
//         "support.type.vendored.property-name",
//         "support.type.property-name",
//         "variable.css",
//         "variable.scss",
//         "variable.other.less",
//         "source.coffee.embedded",
//       ],
//       settings: {
//         foreground: "#9cdcfe",
//       },
//     },
//     {
//       scope: "keyword",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "keyword.control",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "keyword.operator",
//       settings: {
//         foreground: "#d4d4d4",
//       },
//     },
//     {
//       scope: [
//         "keyword.operator.new",
//         "keyword.operator.expression",
//         "keyword.operator.cast",
//         "keyword.operator.sizeof",
//         "keyword.operator.alignof",
//         "keyword.operator.typeid",
//         "keyword.operator.alignas",
//         "keyword.operator.instanceof",
//         "keyword.operator.logical.python",
//         "keyword.operator.wordlike",
//       ],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "keyword.other.unit",
//       settings: {
//         foreground: "#b5cea8",
//       },
//     },
//     {
//       scope: [
//         "punctuation.section.embedded.begin.php",
//         "punctuation.section.embedded.end.php",
//       ],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "support.function.git-rebase",
//       settings: {
//         foreground: "#9cdcfe",
//       },
//     },
//     {
//       scope: "constant.sha.git-rebase",
//       settings: {
//         foreground: "#b5cea8",
//       },
//     },
//     {
//       scope: [
//         "storage.modifier.import.java",
//         "variable.language.wildcard.java",
//         "storage.modifier.package.java",
//       ],
//       settings: {
//         foreground: "#d4d4d4",
//       },
//     },
//     {
//       scope: "variable.language",
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: [
//         "entity.name.function",
//         "support.function",
//         "support.constant.handlebars",
//         "source.powershell variable.other.member",
//         "entity.name.operator.custom-literal",
//       ],
//       settings: {
//         foreground: "#DCDCAA",
//       },
//     },
//     {
//       scope: [
//         "support.class",
//         "support.type",
//         "entity.name.type",
//         "entity.name.namespace",
//         "entity.other.attribute",
//         "entity.name.scope-resolution",
//         "entity.name.class",
//         "storage.type.numeric.go",
//         "storage.type.byte.go",
//         "storage.type.boolean.go",
//         "storage.type.string.go",
//         "storage.type.uintptr.go",
//         "storage.type.error.go",
//         "storage.type.rune.go",
//         "storage.type.cs",
//         "storage.type.generic.cs",
//         "storage.type.modifier.cs",
//         "storage.type.variable.cs",
//         "storage.type.annotation.java",
//         "storage.type.generic.java",
//         "storage.type.java",
//         "storage.type.object.array.java",
//         "storage.type.primitive.array.java",
//         "storage.type.primitive.java",
//         "storage.type.token.java",
//         "storage.type.groovy",
//         "storage.type.annotation.groovy",
//         "storage.type.parameters.groovy",
//         "storage.type.generic.groovy",
//         "storage.type.object.array.groovy",
//         "storage.type.primitive.array.groovy",
//         "storage.type.primitive.groovy",
//       ],
//       settings: {
//         foreground: "#4EC9B0",
//       },
//     },
//     {
//       scope: [
//         "meta.type.cast.expr",
//         "meta.type.new.expr",
//         "support.constant.math",
//         "support.constant.dom",
//         "support.constant.json",
//         "entity.other.inherited-class",
//       ],
//       settings: {
//         foreground: "#4EC9B0",
//       },
//     },
//     {
//       scope: [
//         "keyword.control",
//         "source.cpp keyword.operator.new",
//         "keyword.operator.delete",
//         "keyword.other.using",
//         "keyword.other.directive.using",
//         "keyword.other.operator",
//         "entity.name.operator",
//       ],
//       settings: {
//         foreground: "#C586C0",
//       },
//     },
//     {
//       scope: [
//         "variable",
//         "meta.definition.variable.name",
//         "support.variable",
//         "entity.name.variable",
//         "constant.other.placeholder",
//       ],
//       settings: {
//         foreground: "#9CDCFE",
//       },
//     },
//     {
//       scope: ["variable.other.constant", "variable.other.enummember"],
//       settings: {
//         foreground: "#4FC1FF",
//       },
//     },
//     {
//       scope: ["meta.object-literal.key"],
//       settings: {
//         foreground: "#9CDCFE",
//       },
//     },
//     {
//       scope: [
//         "support.constant.property-value",
//         "support.constant.font-name",
//         "support.constant.media-type",
//         "support.constant.media",
//         "constant.other.color.rgb-value",
//         "constant.other.rgb-value",
//         "support.constant.color",
//       ],
//       settings: {
//         foreground: "#CE9178",
//       },
//     },
//     {
//       scope: [
//         "punctuation.definition.group.regexp",
//         "punctuation.definition.group.assertion.regexp",
//         "punctuation.definition.character-class.regexp",
//         "punctuation.character.set.begin.regexp",
//         "punctuation.character.set.end.regexp",
//         "keyword.operator.negation.regexp",
//         "support.other.parenthesis.regexp",
//       ],
//       settings: {
//         foreground: "#CE9178",
//       },
//     },
//     {
//       scope: [
//         "constant.character.character-class.regexp",
//         "constant.other.character-class.set.regexp",
//         "constant.other.character-class.regexp",
//         "constant.character.set.regexp",
//       ],
//       settings: {
//         foreground: "#d16969",
//       },
//     },
//     {
//       scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
//       settings: {
//         foreground: "#DCDCAA",
//       },
//     },
//     {
//       scope: "keyword.operator.quantifier.regexp",
//       settings: {
//         foreground: "#d7ba7d",
//       },
//     },
//     {
//       scope: ["constant.character", "constant.other.option"],
//       settings: {
//         foreground: "#569cd6",
//       },
//     },
//     {
//       scope: "constant.character.escape",
//       settings: {
//         foreground: "#d7ba7d",
//       },
//     },
//     {
//       scope: "entity.name.label",
//       settings: {
//         foreground: "#C8C8C8",
//       },
//     },
//   ],
//   type: "dark",
// };
