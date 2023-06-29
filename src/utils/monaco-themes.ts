import { type Monaco } from "@monaco-editor/react";
import colors from "tailwindcss/colors";

type BuiltinTheme = "vs" | "vs-dark" | "hc-black" | "hc-light";

interface IStandaloneThemeData {
  base: BuiltinTheme;
  inherit: boolean;
  rules: ITokenThemeRule[];
  encodedTokensColors?: string[];
  colors: IColors;
}

type IColors = {
  [colorId: string]: string;
};

interface ITokenThemeRule {
  token: string;
  foreground?: string;
  background?: string;
  fontStyle?: string;
}

export const githubDarkTheme: IStandaloneThemeData = {
  inherit: true,
  base: "vs-dark",
  colors: {
    focusBorder: "#005cc5",
    foreground: "#d1d5da",
    descriptionForeground: "#959da5",
    errorForeground: "#f97583",
    "textLink.foreground": "#79b8ff",
    "textLink.activeForeground": "#c8e1ff",
    "textBlockQuote.background": "#24292e",
    "textBlockQuote.border": "#444d56",
    "textCodeBlock.background": "#2f363d",
    "textPreformat.foreground": "#d1d5da",
    "textSeparator.foreground": "#586069",
    "button.background": "#176f2c",
    "button.foreground": "#dcffe4",
    "button.hoverBackground": "#22863a",
    "checkbox.background": "#444d56",
    "checkbox.border": "#1b1f23",
    "dropdown.background": "#2f363d",
    "dropdown.border": "#1b1f23",
    "dropdown.foreground": "#e1e4e8",
    "dropdown.listBackground": "#24292e",
    "input.background": "#2f363d",
    "input.border": "#1b1f23",
    "input.foreground": "#e1e4e8",
    "input.placeholderForeground": "#959da5",
    "badge.foreground": "#c8e1ff",
    "badge.background": "#044289",
    "progressBar.background": "#0366d6",
    "titleBar.activeForeground": "#e1e4e8",
    "titleBar.activeBackground": "#24292e",
    "titleBar.inactiveForeground": "#959da5",
    "titleBar.inactiveBackground": "#1f2428",
    "titleBar.border": "#1b1f23",
    "activityBar.foreground": "#e1e4e8",
    "activityBar.inactiveForeground": "#6a737d",
    "activityBar.background": "#24292e",
    "activityBarBadge.foreground": "#fff",
    "activityBarBadge.background": "#0366d6",
    "activityBar.activeBorder": "#f9826c",
    "activityBar.border": "#1b1f23",
    "sideBar.foreground": "#d1d5da",
    "sideBar.background": "#1f2428",
    "sideBar.border": "#1b1f23",
    "sideBarTitle.foreground": "#e1e4e8",
    "sideBarSectionHeader.foreground": "#e1e4e8",
    "sideBarSectionHeader.background": "#1f2428",
    "sideBarSectionHeader.border": "#1b1f23",
    "list.hoverForeground": "#e1e4e8",
    "list.inactiveSelectionForeground": "#e1e4e8",
    "list.activeSelectionForeground": "#e1e4e8",
    "list.hoverBackground": "#282e34",
    "list.inactiveSelectionBackground": "#282e34",
    "list.activeSelectionBackground": "#39414a",
    "list.inactiveFocusBackground": "#1d2d3e",
    "list.focusBackground": "#044289",
    "tree.indentGuidesStroke": "#2f363d",
    "notificationCenterHeader.foreground": "#959da5",
    "notificationCenterHeader.background": "#24292e",
    "notifications.foreground": "#e1e4e8",
    "notifications.background": "#2f363d",
    "notifications.border": "#1b1f23",
    "notificationsErrorIcon.foreground": "#ea4a5a",
    "notificationsWarningIcon.foreground": "#ffab70",
    "notificationsInfoIcon.foreground": "#79b8ff",
    "pickerGroup.border": "#444d56",
    "pickerGroup.foreground": "#e1e4e8",
    "quickInput.background": "#24292e",
    "quickInput.foreground": "#e1e4e8",
    "statusBar.foreground": "#d1d5da",
    "statusBar.background": "#24292e",
    "statusBar.border": "#1b1f23",
    "statusBar.noFolderBackground": "#24292e",
    "statusBar.debuggingBackground": "#931c06",
    "statusBar.debuggingForeground": "#fff",
    "editorGroupHeader.tabsBackground": "#1f2428",
    "editorGroupHeader.tabsBorder": "#1b1f23",
    "editorGroup.border": "#1b1f23",
    "tab.activeForeground": "#e1e4e8",
    "tab.inactiveForeground": "#959da5",
    "tab.inactiveBackground": "#1f2428",
    "tab.activeBackground": "#24292e",
    "tab.hoverBackground": "#24292e",
    "tab.unfocusedHoverBackground": "#24292e",
    "tab.border": "#1b1f23",
    "tab.unfocusedActiveBorderTop": "#1b1f23",
    "tab.activeBorder": "#24292e",
    "tab.unfocusedActiveBorder": "#24292e",
    "tab.activeBorderTop": "#f9826c",
    "breadcrumb.foreground": "#959da5",
    "breadcrumb.focusForeground": "#e1e4e8",
    "breadcrumb.activeSelectionForeground": "#d1d5da",
    "breadcrumbPicker.background": "#2b3036",
    "editor.foreground": "#e1e4e8",
    "editor.background": "#24292e",
    "editorWidget.background": "#1f2428",
    "editor.foldBackground": "#282e33",
    "editor.lineHighlightBackground": "#2b3036",
    "editorLineNumber.foreground": "#444d56",
    "editorLineNumber.activeForeground": "#e1e4e8",
    "editorIndentGuide.background": "#2f363d",
    "editorIndentGuide.activeBackground": "#444d56",
    "editorWhitespace.foreground": "#444d56",
    "editorCursor.foreground": "#c8e1ff",
    "editor.findMatchBackground": "#ffd33d44",
    "editor.findMatchHighlightBackground": "#ffd33d22",
    "editor.inactiveSelectionBackground": "#3392FF22",
    "editor.selectionBackground": "#3392FF44",
    "editor.selectionHighlightBackground": "#17E5E633",
    "editor.selectionHighlightBorder": "#17E5E600",
    "editor.wordHighlightBackground": "#17E5E600",
    "editor.wordHighlightStrongBackground": "#17E5E600",
    "editor.wordHighlightBorder": "#17E5E699",
    "editor.wordHighlightStrongBorder": "#17E5E666",
    "editorBracketMatch.background": "#17E5E650",
    "editorBracketMatch.border": "#17E5E600",
    "editorGutter.modifiedBackground": "#2188ff",
    "editorGutter.addedBackground": "#28a745",
    "editorGutter.deletedBackground": "#ea4a5a",
    "diffEditor.insertedTextBackground": "#28a74530",
    "diffEditor.removedTextBackground": "#d73a4930",
    "scrollbar.shadow": "#0008",
    "scrollbarSlider.background": "#6a737d33",
    "scrollbarSlider.hoverBackground": "#6a737d44",
    "scrollbarSlider.activeBackground": "#6a737d88",
    "editorOverviewRuler.border": "#1b1f23",
    "panel.background": "#1f2428",
    "panel.border": "#1b1f23",
    "panelTitle.activeBorder": "#f9826c",
    "panelTitle.activeForeground": "#e1e4e8",
    "panelTitle.inactiveForeground": "#959da5",
    "panelInput.border": "#2f363d",
    "terminal.foreground": "#d1d5da",
    "gitDecoration.addedResourceForeground": "#34d058",
    "gitDecoration.modifiedResourceForeground": "#79b8ff",
    "gitDecoration.deletedResourceForeground": "#ea4a5a",
    "gitDecoration.untrackedResourceForeground": "#34d058",
    "gitDecoration.ignoredResourceForeground": "#6a737d",
    "gitDecoration.conflictingResourceForeground": "#ffab70",
    "gitDecoration.submoduleResourceForeground": "#6a737d",
    "debugToolBar.background": "#2b3036",
    "editor.stackFrameHighlightBackground": "#a707",
    "editor.focusedStackFrameHighlightBackground": "#b808",
    "peekViewEditor.matchHighlightBackground": "#ffd33d33",
    "peekViewResult.matchHighlightBackground": "#ffd33d33",
    "peekViewEditor.background": "#1f242888",
    "peekViewResult.background": "#1f2428",
    "settings.headerForeground": "#e1e4e8",
    "settings.modifiedItemIndicator": "#0366d6",
    "welcomePage.buttonBackground": "#2f363d",
    "welcomePage.buttonHoverBackground": "#444d56",
  },
  rules: [
    {
      foreground: "#6a737d",
      token: "comment",
    },
    {
      foreground: "#6a737d",
      token: "punctuation.definition.comment",
    },
    {
      foreground: "#6a737d",
      token: "string.comment",
    },
    {
      foreground: "#79b8ff",
      token: "constant",
    },
    {
      foreground: "#79b8ff",
      token: "entity.name.constant",
    },
    {
      foreground: "#79b8ff",
      token: "variable.other.constant",
    },
    {
      foreground: "#79b8ff",
      token: "variable.language",
    },
    {
      foreground: "#b392f0",
      token: "entity",
    },
    {
      foreground: "#b392f0",
      token: "entity.name",
    },
    {
      foreground: "#e1e4e8",
      token: "variable.parameter.function",
    },
    {
      foreground: "#85e89d",
      token: "entity.name.tag",
    },
    {
      foreground: "#f97583",
      token: "keyword",
    },
    {
      foreground: "#f97583",
      token: "storage",
    },
    {
      foreground: "#f97583",
      token: "storage.type",
    },
    {
      foreground: "#e1e4e8",
      token: "storage.modifier.package",
    },
    {
      foreground: "#e1e4e8",
      token: "storage.modifier.import",
    },
    {
      foreground: "#e1e4e8",
      token: "storage.type.java",
    },
    {
      foreground: "#9ecbff",
      token: "string",
    },
    {
      foreground: "#9ecbff",
      token: "punctuation.definition.string",
    },
    {
      foreground: "#9ecbff",
      token: "string punctuation.section.embedded source",
    },
    {
      foreground: "#79b8ff",
      token: "support",
    },
    {
      foreground: "#79b8ff",
      token: "meta.property-name",
    },
    {
      foreground: "#ffab70",
      token: "variable",
    },
    {
      foreground: "#e1e4e8",
      token: "variable.other",
    },
    {
      fontStyle: "italic",
      foreground: "#fdaeb7",
      token: "invalid.broken",
    },
    {
      fontStyle: "italic",
      foreground: "#fdaeb7",
      token: "invalid.deprecated",
    },
    {
      fontStyle: "italic",
      foreground: "#fdaeb7",
      token: "invalid.illegal",
    },
    {
      fontStyle: "italic",
      foreground: "#fdaeb7",
      token: "invalid.unimplemented",
    },
    {
      fontStyle: "italic underline",
      background: "#f97583",
      foreground: "#24292e",
      token: "carriage-return",
    },
    {
      foreground: "#fdaeb7",
      token: "message.error",
    },
    {
      foreground: "#e1e4e8",
      token: "string source",
    },
    {
      foreground: "#79b8ff",
      token: "string variable",
    },
    {
      foreground: "#dbedff",
      token: "source.regexp",
    },
    {
      foreground: "#dbedff",
      token: "string.regexp",
    },
    {
      foreground: "#dbedff",
      token: "string.regexp.character-class",
    },
    {
      foreground: "#dbedff",
      token: "string.regexp constant.character.escape",
    },
    {
      foreground: "#dbedff",
      token: "string.regexp source.ruby.embedded",
    },
    {
      foreground: "#dbedff",
      token: "string.regexp string.regexp.arbitrary-repitition",
    },
    {
      fontStyle: "bold",
      foreground: "#85e89d",
      token: "string.regexp constant.character.escape",
    },
    {
      foreground: "#79b8ff",
      token: "support.constant",
    },
    {
      foreground: "#79b8ff",
      token: "support.variable",
    },
    {
      foreground: "#79b8ff",
      token: "meta.module-reference",
    },
    {
      foreground: "#ffab70",
      token: "punctuation.definition.list.begin.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#79b8ff",
      token: "markup.heading",
    },
    {
      fontStyle: "bold",
      foreground: "#79b8ff",
      token: "markup.heading entity.name",
    },
    {
      foreground: "#85e89d",
      token: "markup.quote",
    },
    {
      fontStyle: "italic",
      foreground: "#e1e4e8",
      token: "markup.italic",
    },
    {
      fontStyle: "bold",
      foreground: "#e1e4e8",
      token: "markup.bold",
    },
    {
      foreground: "#79b8ff",
      token: "markup.raw",
    },
    {
      background: "#86181d",
      foreground: "#fdaeb7",
      token: "markup.deleted",
    },
    {
      background: "#86181d",
      foreground: "#fdaeb7",
      token: "meta.diff.header.from-file",
    },
    {
      background: "#86181d",
      foreground: "#fdaeb7",
      token: "punctuation.definition.deleted",
    },
    {
      background: "#144620",
      foreground: "#85e89d",
      token: "markup.inserted",
    },
    {
      background: "#144620",
      foreground: "#85e89d",
      token: "meta.diff.header.to-file",
    },
    {
      background: "#144620",
      foreground: "#85e89d",
      token: "punctuation.definition.inserted",
    },
    {
      background: "#c24e00",
      foreground: "#ffab70",
      token: "markup.changed",
    },
    {
      background: "#c24e00",
      foreground: "#ffab70",
      token: "punctuation.definition.changed",
    },
    {
      foreground: "#2f363d",
      background: "#79b8ff",
      token: "markup.ignored",
    },
    {
      foreground: "#2f363d",
      background: "#79b8ff",
      token: "markup.untracked",
    },
    {
      foreground: "#b392f0",
      fontStyle: "bold",
      token: "meta.diff.range",
    },
    {
      foreground: "#79b8ff",
      token: "meta.diff.header",
    },
    {
      fontStyle: "bold",
      foreground: "#79b8ff",
      token: "meta.separator",
    },
    {
      foreground: "#79b8ff",
      token: "meta.output",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.tag",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.curly",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.round",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.square",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.angle",
    },
    {
      foreground: "#d1d5da",
      token: "brackethighlighter.quote",
    },
    {
      foreground: "#fdaeb7",
      token: "brackethighlighter.unmatched",
    },
    {
      foreground: "#dbedff",
      fontStyle: "underline",
      token: "constant.other.reference.link",
    },
    {
      foreground: "#dbedff",
      fontStyle: "underline",
      token: "string.other.link",
    },
  ],
  encodedTokensColors: [],
};

export const draculaTheme: IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      background: "282a36",
      token: "",
    },
    {
      foreground: "6272a4",
      token: "comment",
    },
    {
      foreground: "f1fa8c",
      token: "string",
    },
    {
      foreground: "bd93f9",
      token: "constant.numeric",
    },
    {
      foreground: "bd93f9",
      token: "constant.language",
    },
    {
      foreground: "bd93f9",
      token: "constant.character",
    },
    {
      foreground: "bd93f9",
      token: "constant.other",
    },
    {
      foreground: "ffb86c",
      token: "variable.other.readwrite.instance",
    },
    {
      foreground: "ff79c6",
      token: "constant.character.escaped",
    },
    {
      foreground: "ff79c6",
      token: "constant.character.escape",
    },
    {
      foreground: "ff79c6",
      token: "string source",
    },
    {
      foreground: "ff79c6",
      token: "string source.ruby",
    },
    {
      foreground: "ff79c6",
      token: "keyword",
    },
    {
      foreground: "ff79c6",
      token: "storage",
    },
    {
      foreground: "8be9fd",
      fontStyle: "italic",
      token: "storage.type",
    },
    {
      foreground: "50fa7b",
      fontStyle: "underline",
      token: "entity.name.class",
    },
    {
      foreground: "50fa7b",
      fontStyle: "italic underline",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "50fa7b",
      token: "entity.name.function",
    },
    {
      foreground: "ffb86c",
      fontStyle: "italic",
      token: "variable.parameter",
    },
    {
      foreground: "ff79c6",
      token: "entity.name.tag",
    },
    {
      foreground: "50fa7b",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "8be9fd",
      token: "support.function",
    },
    {
      foreground: "6be5fd",
      token: "support.constant",
    },
    {
      foreground: "66d9ef",
      fontStyle: " italic",
      token: "support.type",
    },
    {
      foreground: "66d9ef",
      fontStyle: " italic",
      token: "support.class",
    },
    {
      foreground: "f8f8f0",
      background: "ff79c6",
      token: "invalid",
    },
    {
      foreground: "f8f8f0",
      background: "bd93f9",
      token: "invalid.deprecated",
    },
    {
      foreground: "cfcfc2",
      token: "meta.structure.dictionary.json string.quoted.double.json",
    },
    {
      foreground: "6272a4",
      token: "meta.diff",
    },
    {
      foreground: "6272a4",
      token: "meta.diff.header",
    },
    {
      foreground: "ff79c6",
      token: "markup.deleted",
    },
    {
      foreground: "50fa7b",
      token: "markup.inserted",
    },
    {
      foreground: "e6db74",
      token: "markup.changed",
    },
    {
      foreground: "bd93f9",
      token: "constant.numeric.line-number.find-in-files - match",
    },
    {
      foreground: "e6db74",
      token: "entity.name.filename",
    },
    {
      foreground: "f83333",
      token: "message.error",
    },
    {
      foreground: "eeeeee",
      token:
        "punctuation.definition.string.begin.json - meta.structure.dictionary.value.json",
    },
    {
      foreground: "eeeeee",
      token:
        "punctuation.definition.string.end.json - meta.structure.dictionary.value.json",
    },
    {
      foreground: "8be9fd",
      token: "meta.structure.dictionary.json string.quoted.double.json",
    },
    {
      foreground: "f1fa8c",
      token: "meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "50fa7b",
      token:
        "meta meta meta meta meta meta meta.structure.dictionary.value string",
    },
    {
      foreground: "ffb86c",
      token: "meta meta meta meta meta meta.structure.dictionary.value string",
    },
    {
      foreground: "ff79c6",
      token: "meta meta meta meta meta.structure.dictionary.value string",
    },
    {
      foreground: "bd93f9",
      token: "meta meta meta meta.structure.dictionary.value string",
    },
    {
      foreground: "50fa7b",
      token: "meta meta meta.structure.dictionary.value string",
    },
    {
      foreground: "ffb86c",
      token: "meta meta.structure.dictionary.value string",
    },
  ],
  colors: {
    "editor.foreground": "#f8f8f2",
    "editor.background": "#282a36",
    "editor.selectionBackground": "#44475a",
    "editor.lineHighlightBackground": "#44475a",
    "editorCursor.foreground": "#f8f8f0",
    "editorWhitespace.foreground": "#3B3A32",
    "editorIndentGuide.activeBackground": "#9D550FB0",
    "editor.selectionHighlightBorder": "#222218",
  },
};

export const solarizedDarkTheme: IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      background: "002B36",
      token: "",
    },
    {
      foreground: "586e75",
      token: "comment",
    },
    {
      foreground: "2aa198",
      token: "string",
    },
    {
      foreground: "586e75",
      token: "string",
    },
    {
      foreground: "dc322f",
      token: "string.regexp",
    },
    {
      foreground: "d33682",
      token: "constant.numeric",
    },
    {
      foreground: "268bd2",
      token: "variable.language",
    },
    {
      foreground: "268bd2",
      token: "variable.other",
    },
    {
      foreground: "859900",
      token: "keyword",
    },
    {
      foreground: "859900",
      token: "storage",
    },
    {
      foreground: "268bd2",
      token: "entity.name.class",
    },
    {
      foreground: "268bd2",
      token: "entity.name.type.class",
    },
    {
      foreground: "268bd2",
      token: "entity.name.function",
    },
    {
      foreground: "859900",
      token: "punctuation.definition.variable",
    },
    {
      foreground: "dc322f",
      token: "punctuation.section.embedded.begin",
    },
    {
      foreground: "dc322f",
      token: "punctuation.section.embedded.end",
    },
    {
      foreground: "b58900",
      token: "constant.language",
    },
    {
      foreground: "b58900",
      token: "meta.preprocessor",
    },
    {
      foreground: "dc322f",
      token: "support.function.construct",
    },
    {
      foreground: "dc322f",
      token: "keyword.other.new",
    },
    {
      foreground: "cb4b16",
      token: "constant.character",
    },
    {
      foreground: "cb4b16",
      token: "constant.other",
    },
    {
      foreground: "268bd2",
      fontStyle: "bold",
      token: "entity.name.tag",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.tag.html",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.tag.begin",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.tag.end",
    },
    {
      foreground: "93a1a1",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "268bd2",
      token: "support.function",
    },
    {
      foreground: "dc322f",
      token: "punctuation.separator.continuation",
    },
    {
      foreground: "859900",
      token: "support.type",
    },
    {
      foreground: "859900",
      token: "support.class",
    },
    {
      foreground: "cb4b16",
      token: "support.type.exception",
    },
    {
      foreground: "cb4b16",
      token: "keyword.other.special-method",
    },
    {
      foreground: "2aa198",
      token: "string.quoted.double",
    },
    {
      foreground: "2aa198",
      token: "string.quoted.single",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.begin",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.end",
    },
    {
      foreground: "b58900",
      token: "entity.name.tag.css",
    },
    {
      foreground: "b58900",
      token: "support.type.property-name.css",
    },
    {
      foreground: "b58900",
      token: "meta.property-name.css",
    },
    {
      foreground: "dc322f",
      token: "source.css",
    },
    {
      foreground: "586e75",
      token: "meta.selector.css",
    },
    {
      foreground: "6c71c4",
      token: "punctuation.section.property-list.css",
    },
    {
      foreground: "2aa198",
      token: "meta.property-value.css constant.numeric.css",
    },
    {
      foreground: "2aa198",
      token: "keyword.other.unit.css",
    },
    {
      foreground: "2aa198",
      token: "constant.other.color.rgb-value.css",
    },
    {
      foreground: "2aa198",
      token: "meta.property-value.css",
    },
    {
      foreground: "dc322f",
      token: "keyword.other.important.css",
    },
    {
      foreground: "2aa198",
      token: "support.constant.color",
    },
    {
      foreground: "859900",
      token: "entity.name.tag.css",
    },
    {
      foreground: "586e75",
      token: "punctuation.separator.key-value.css",
    },
    {
      foreground: "586e75",
      token: "punctuation.terminator.rule.css",
    },
    {
      foreground: "268bd2",
      token: "entity.other.attribute-name.class.css",
    },
    {
      foreground: "cb4b16",
      token: "entity.other.attribute-name.pseudo-element.css",
    },
    {
      foreground: "cb4b16",
      token: "entity.other.attribute-name.pseudo-class.css",
    },
    {
      foreground: "268bd2",
      token: "entity.other.attribute-name.id.css",
    },
    {
      foreground: "b58900",
      token: "meta.function.js",
    },
    {
      foreground: "b58900",
      token: "entity.name.function.js",
    },
    {
      foreground: "b58900",
      token: "support.function.dom.js",
    },
    {
      foreground: "b58900",
      token: "text.html.basic source.js.embedded.html",
    },
    {
      foreground: "268bd2",
      token: "storage.type.function.js",
    },
    {
      foreground: "2aa198",
      token: "constant.numeric.js",
    },
    {
      foreground: "268bd2",
      token: "meta.brace.square.js",
    },
    {
      foreground: "268bd2",
      token: "storage.type.js",
    },
    {
      foreground: "93a1a1",
      token: "meta.brace.round",
    },
    {
      foreground: "93a1a1",
      token: "punctuation.definition.parameters.begin.js",
    },
    {
      foreground: "93a1a1",
      token: "punctuation.definition.parameters.end.js",
    },
    {
      foreground: "268bd2",
      token: "meta.brace.curly.js",
    },
    {
      foreground: "93a1a1",
      fontStyle: "italic",
      token: "entity.name.tag.doctype.html",
    },
    {
      foreground: "93a1a1",
      fontStyle: "italic",
      token: "meta.tag.sgml.html",
    },
    {
      foreground: "93a1a1",
      fontStyle: "italic",
      token: "string.quoted.double.doctype.identifiers-and-DTDs.html",
    },
    {
      foreground: "839496",
      fontStyle: "italic",
      token: "comment.block.html",
    },
    {
      fontStyle: "italic",
      token: "entity.name.tag.script.html",
    },
    {
      foreground: "2aa198",
      token: "source.css.embedded.html string.quoted.double.html",
    },
    {
      foreground: "cb4b16",
      fontStyle: "bold",
      token: "text.html.ruby",
    },
    {
      foreground: "657b83",
      token: "text.html.basic meta.tag.other.html",
    },
    {
      foreground: "657b83",
      token: "text.html.basic meta.tag.any.html",
    },
    {
      foreground: "657b83",
      token: "text.html.basic meta.tag.block.any",
    },
    {
      foreground: "657b83",
      token: "text.html.basic meta.tag.inline.any",
    },
    {
      foreground: "657b83",
      token: "text.html.basic meta.tag.structure.any.html",
    },
    {
      foreground: "657b83",
      token: "text.html.basic source.js.embedded.html",
    },
    {
      foreground: "657b83",
      token: "punctuation.separator.key-value.html",
    },
    {
      foreground: "657b83",
      token: "text.html.basic entity.other.attribute-name.html",
    },
    {
      foreground: "2aa198",
      token:
        "text.html.basic meta.tag.structure.any.html punctuation.definition.string.begin.html",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.begin.html",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.end.html",
    },
    {
      foreground: "268bd2",
      fontStyle: "bold",
      token: "entity.name.tag.block.any.html",
    },
    {
      fontStyle: "italic",
      token: "source.css.embedded.html entity.name.tag.style.html",
    },
    {
      foreground: "839496",
      fontStyle: "italic",
      token: "source.css.embedded.html",
    },
    {
      foreground: "839496",
      fontStyle: "italic",
      token: "comment.block.html",
    },
    {
      foreground: "268bd2",
      token: "punctuation.definition.variable.ruby",
    },
    {
      foreground: "657b83",
      token: "meta.function.method.with-arguments.ruby",
    },
    {
      foreground: "2aa198",
      token: "variable.language.ruby",
    },
    {
      foreground: "268bd2",
      token: "entity.name.function.ruby",
    },
    {
      foreground: "859900",
      fontStyle: "bold",
      token: "keyword.control.ruby",
    },
    {
      foreground: "859900",
      fontStyle: "bold",
      token: "keyword.control.def.ruby",
    },
    {
      foreground: "859900",
      token: "keyword.control.class.ruby",
    },
    {
      foreground: "859900",
      token: "meta.class.ruby",
    },
    {
      foreground: "b58900",
      token: "entity.name.type.class.ruby",
    },
    {
      foreground: "859900",
      token: "keyword.control.ruby",
    },
    {
      foreground: "b58900",
      token: "support.class.ruby",
    },
    {
      foreground: "859900",
      token: "keyword.other.special-method.ruby",
    },
    {
      foreground: "2aa198",
      token: "constant.language.ruby",
    },
    {
      foreground: "2aa198",
      token: "constant.numeric.ruby",
    },
    {
      foreground: "b58900",
      token: "variable.other.constant.ruby",
    },
    {
      foreground: "2aa198",
      token: "constant.other.symbol.ruby",
    },
    {
      foreground: "dc322f",
      token: "punctuation.section.embedded.ruby",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.begin.ruby",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.end.ruby",
    },
    {
      foreground: "cb4b16",
      token: "keyword.other.special-method.ruby",
    },
    {
      foreground: "cb4b16",
      token: "keyword.control.import.include.php",
    },
    {
      foreground: "839496",
      token: "text.html.ruby meta.tag.inline.any.html",
    },
    {
      foreground: "2aa198",
      token: "text.html.ruby punctuation.definition.string.begin",
    },
    {
      foreground: "2aa198",
      token: "text.html.ruby punctuation.definition.string.end",
    },
    {
      foreground: "839496",
      token: "punctuation.definition.string.begin",
    },
    {
      foreground: "839496",
      token: "punctuation.definition.string.end",
    },
    {
      foreground: "839496",
      token: "support.class.php",
    },
    {
      foreground: "dc322f",
      token: "keyword.operator.index-start.php",
    },
    {
      foreground: "dc322f",
      token: "keyword.operator.index-end.php",
    },
    {
      foreground: "586e75",
      token: "meta.array.php",
    },
    {
      foreground: "b58900",
      token: "meta.array.php support.function.construct.php",
    },
    {
      foreground: "b58900",
      token: "meta.array.empty.php support.function.construct.php",
    },
    {
      foreground: "b58900",
      token: "support.function.construct.php",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.array.begin",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.array.end",
    },
    {
      foreground: "2aa198",
      token: "constant.numeric.php",
    },
    {
      foreground: "cb4b16",
      token: "keyword.other.new.php",
    },
    {
      foreground: "839496",
      token: "keyword.operator.class",
    },
    {
      foreground: "93a1a1",
      token: "variable.other.property.php",
    },
    {
      foreground: "b58900",
      token: "storage.modifier.extends.php",
    },
    {
      foreground: "b58900",
      token: "storage.type.class.php",
    },
    {
      foreground: "b58900",
      token: "keyword.operator.class.php",
    },
    {
      foreground: "839496",
      token: "punctuation.terminator.expression.php",
    },
    {
      foreground: "586e75",
      token: "meta.other.inherited-class.php",
    },
    {
      foreground: "859900",
      token: "storage.type.php",
    },
    {
      foreground: "93a1a1",
      token: "entity.name.function.php",
    },
    {
      foreground: "859900",
      token: "support.function.construct.php",
    },
    {
      foreground: "839496",
      token: "entity.name.type.class.php",
    },
    {
      foreground: "839496",
      token: "meta.function-call.php",
    },
    {
      foreground: "839496",
      token: "meta.function-call.static.php",
    },
    {
      foreground: "839496",
      token: "meta.function-call.object.php",
    },
    {
      foreground: "93a1a1",
      token: "keyword.other.phpdoc",
    },
    {
      foreground: "cb4b16",
      token: "source.php.embedded.block.html",
    },
    {
      foreground: "cb4b16",
      token: "storage.type.function.php",
    },
    {
      foreground: "2aa198",
      token: "constant.numeric.c",
    },
    {
      foreground: "cb4b16",
      token: "meta.preprocessor.c.include",
    },
    {
      foreground: "cb4b16",
      token: "meta.preprocessor.macro.c",
    },
    {
      foreground: "cb4b16",
      token: "keyword.control.import.define.c",
    },
    {
      foreground: "cb4b16",
      token: "keyword.control.import.include.c",
    },
    {
      foreground: "cb4b16",
      token: "entity.name.function.preprocessor.c",
    },
    {
      foreground: "2aa198",
      token: "meta.preprocessor.c.include string.quoted.other.lt-gt.include.c",
    },
    {
      foreground: "2aa198",
      token:
        "meta.preprocessor.c.include punctuation.definition.string.begin.c",
    },
    {
      foreground: "2aa198",
      token: "meta.preprocessor.c.include punctuation.definition.string.end.c",
    },
    {
      foreground: "586e75",
      token: "support.function.C99.c",
    },
    {
      foreground: "586e75",
      token: "support.function.any-method.c",
    },
    {
      foreground: "586e75",
      token: "entity.name.function.c",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.begin.c",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.end.c",
    },
    {
      foreground: "b58900",
      token: "storage.type.c",
    },
    {
      foreground: "e0eddd",
      background: "b58900",
      fontStyle: "italic",
      token: "meta.diff",
    },
    {
      foreground: "e0eddd",
      background: "b58900",
      fontStyle: "italic",
      token: "meta.diff.header",
    },
    {
      foreground: "dc322f",
      background: "eee8d5",
      token: "markup.deleted",
    },
    {
      foreground: "cb4b16",
      background: "eee8d5",
      token: "markup.changed",
    },
    {
      foreground: "219186",
      background: "eee8d5",
      token: "markup.inserted",
    },
    {
      foreground: "e0eddd",
      background: "b58900",
      token: "text.html.markdown meta.dummy.line-break",
    },
    {
      foreground: "2aa198",
      token: "text.html.markdown markup.raw.inline",
    },
    {
      foreground: "2aa198",
      token: "text.restructuredtext markup.raw",
    },
    {
      foreground: "dc322f",
      token: "other.package.exclude",
    },
    {
      foreground: "dc322f",
      token: "other.remove",
    },
    {
      foreground: "2aa198",
      token: "other.add",
    },
    {
      foreground: "dc322f",
      token: "punctuation.section.group.tex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.arguments.begin.latex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.arguments.end.latex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.arguments.latex",
    },
    {
      foreground: "b58900",
      token: "meta.group.braces.tex",
    },
    {
      foreground: "b58900",
      token: "string.other.math.tex",
    },
    {
      foreground: "cb4b16",
      token: "variable.parameter.function.latex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.constant.math.tex",
    },
    {
      foreground: "2aa198",
      token: "text.tex.latex constant.other.math.tex",
    },
    {
      foreground: "2aa198",
      token: "constant.other.general.math.tex",
    },
    {
      foreground: "2aa198",
      token: "constant.other.general.math.tex",
    },
    {
      foreground: "2aa198",
      token: "constant.character.math.tex",
    },
    {
      foreground: "b58900",
      token: "string.other.math.tex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.begin.tex",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.string.end.tex",
    },
    {
      foreground: "2aa198",
      token: "keyword.control.label.latex",
    },
    {
      foreground: "2aa198",
      token: "text.tex.latex constant.other.general.math.tex",
    },
    {
      foreground: "dc322f",
      token: "variable.parameter.definition.label.latex",
    },
    {
      foreground: "859900",
      token: "support.function.be.latex",
    },
    {
      foreground: "cb4b16",
      token: "support.function.section.latex",
    },
    {
      foreground: "2aa198",
      token: "support.function.general.tex",
    },
    {
      fontStyle: "italic",
      token: "punctuation.definition.comment.tex",
    },
    {
      fontStyle: "italic",
      token: "comment.line.percentage.tex",
    },
    {
      foreground: "2aa198",
      token: "keyword.control.ref.latex",
    },
    {
      foreground: "586e75",
      token: "string.quoted.double.block.python",
    },
    {
      foreground: "859900",
      token: "storage.type.class.python",
    },
    {
      foreground: "859900",
      token: "storage.type.function.python",
    },
    {
      foreground: "859900",
      token: "storage.modifier.global.python",
    },
    {
      foreground: "cb4b16",
      token: "keyword.control.import.python",
    },
    {
      foreground: "cb4b16",
      token: "keyword.control.import.from.python",
    },
    {
      foreground: "b58900",
      token: "support.type.exception.python",
    },
    {
      foreground: "859900",
      token: "support.function.builtin.shell",
    },
    {
      foreground: "cb4b16",
      token: "variable.other.normal.shell",
    },
    {
      foreground: "268bd2",
      token: "source.shell",
    },
    {
      foreground: "586e75",
      token: "meta.scope.for-in-loop.shell",
    },
    {
      foreground: "586e75",
      token: "variable.other.loop.shell",
    },
    {
      foreground: "859900",
      token: "punctuation.definition.string.end.shell",
    },
    {
      foreground: "859900",
      token: "punctuation.definition.string.begin.shell",
    },
    {
      foreground: "586e75",
      token: "meta.scope.case-block.shell",
    },
    {
      foreground: "586e75",
      token: "meta.scope.case-body.shell",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.logical-expression.shell",
    },
    {
      fontStyle: "italic",
      token: "comment.line.number-sign.shell",
    },
    {
      foreground: "cb4b16",
      token: "keyword.other.import.java",
    },
    {
      foreground: "586e75",
      token: "storage.modifier.import.java",
    },
    {
      foreground: "b58900",
      token: "meta.class.java storage.modifier.java",
    },
    {
      foreground: "586e75",
      token: "source.java comment.block",
    },
    {
      foreground: "586e75",
      token:
        "comment.block meta.documentation.tag.param.javadoc keyword.other.documentation.param.javadoc",
    },
    {
      foreground: "b58900",
      token: "punctuation.definition.variable.perl",
    },
    {
      foreground: "b58900",
      token: "variable.other.readwrite.global.perl",
    },
    {
      foreground: "b58900",
      token: "variable.other.predefined.perl",
    },
    {
      foreground: "b58900",
      token: "keyword.operator.comparison.perl",
    },
    {
      foreground: "859900",
      token: "support.function.perl",
    },
    {
      foreground: "586e75",
      fontStyle: "italic",
      token: "comment.line.number-sign.perl",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.begin.perl",
    },
    {
      foreground: "2aa198",
      token: "punctuation.definition.string.end.perl",
    },
    {
      foreground: "dc322f",
      token: "constant.character.escape.perl",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.1.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.2.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.3.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.4.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.5.markdown",
    },
    {
      foreground: "268bd2",
      token: "markup.heading.6.markdown",
    },
    {
      foreground: "839496",
      fontStyle: "bold",
      token: "markup.bold.markdown",
    },
    {
      foreground: "839496",
      fontStyle: "italic",
      token: "markup.italic.markdown",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.bold.markdown",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.italic.markdown",
    },
    {
      foreground: "dc322f",
      token: "punctuation.definition.raw.markdown",
    },
    {
      foreground: "b58900",
      token: "markup.list.unnumbered.markdown",
    },
    {
      foreground: "859900",
      token: "markup.list.numbered.markdown",
    },
    {
      foreground: "2aa198",
      token: "markup.raw.block.markdown",
    },
    {
      foreground: "2aa198",
      token: "markup.raw.inline.markdown",
    },
    {
      foreground: "6c71c4",
      token: "markup.quote.markdown",
    },
    {
      foreground: "6c71c4",
      token: "punctuation.definition.blockquote.markdown",
    },
    {
      foreground: "d33682",
      token: "meta.separator.markdown",
    },
    {
      foreground: "586e75",
      fontStyle: "italic",
      token: "meta.image.inline.markdown",
    },
    {
      foreground: "586e75",
      fontStyle: "italic",
      token: "markup.underline.link.markdown",
    },
    {
      foreground: "93a1a1",
      token: "string.other.link.title.markdown",
    },
    {
      foreground: "93a1a1",
      token: "string.other.link.description.markdown",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.link.markdown",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.string.begin.markdown",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.string.end.markdown",
    },
    {
      foreground: "586e75",
      token: "punctuation.definition.constant.markdown",
    },
    {
      foreground: "eee8d5",
      background: "eee8d5",
      token: "sublimelinter.notes",
    },
    {
      foreground: "93a1a1",
      background: "93a1a1",
      token: "sublimelinter.outline.illegal",
    },
    {
      background: "dc322f",
      token: "sublimelinter.underline.illegal",
    },
    {
      foreground: "839496",
      background: "839496",
      token: "sublimelinter.outline.warning",
    },
    {
      background: "b58900",
      token: "sublimelinter.underline.warning",
    },
    {
      foreground: "657b83",
      background: "657b83",
      token: "sublimelinter.outline.violation",
    },
    {
      background: "cb4b16",
      token: "sublimelinter.underline.violation",
    },
  ],
  colors: {
    "editor.foreground": "#839496",
    "editor.background": "#002B36",
    "editor.selectionBackground": "#073642",
    "editor.lineHighlightBackground": "#073642",
    "editorCursor.foreground": "#819090",
    "editorWhitespace.foreground": "#073642",
  },
};

export const darkPlusTheme: IStandaloneThemeData = {
  inherit: true,
  base: "vs-dark",
  rules: [
    {
      foreground: "#DCDCAA",
      token: "entity.name.function",
    },
    {
      foreground: "#DCDCAA",
      token: "support.function",
    },
    {
      foreground: "#DCDCAA",
      token: "support.constant.handlebars",
    },
    {
      foreground: "#DCDCAA",
      token: "source.powershell variable.other.member",
    },
    {
      foreground: "#DCDCAA",
      token: "entity.name.operator.custom-literal",
    },
    {
      foreground: "#4EC9B0",
      token: "support.class",
    },
    {
      foreground: "#4EC9B0",
      token: "support.type",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.name.type",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.name.namespace",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.other.attribute",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.name.scope-resolution",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.name.class",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.numeric.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.byte.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.boolean.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.string.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.uintptr.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.error.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.rune.go",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.cs",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.generic.cs",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.modifier.cs",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.variable.cs",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.annotation.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.generic.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.object.array.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.primitive.array.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.primitive.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.token.java",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.annotation.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.parameters.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.generic.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.object.array.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.primitive.array.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "storage.type.primitive.groovy",
    },
    {
      foreground: "#4EC9B0",
      token: "meta.type.cast.expr",
    },
    {
      foreground: "#4EC9B0",
      token: "meta.type.new.expr",
    },
    {
      foreground: "#4EC9B0",
      token: "support.constant.math",
    },
    {
      foreground: "#4EC9B0",
      token: "support.constant.dom",
    },
    {
      foreground: "#4EC9B0",
      token: "support.constant.json",
    },
    {
      foreground: "#4EC9B0",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "#C586C0",
      token: "keyword.control",
    },
    {
      foreground: "#C586C0",
      token: "source.cpp keyword.operator.new",
    },
    {
      foreground: "#C586C0",
      token: "keyword.operator.delete",
    },
    {
      foreground: "#C586C0",
      token: "keyword.other.using",
    },
    {
      foreground: "#C586C0",
      token: "keyword.other.operator",
    },
    {
      foreground: "#C586C0",
      token: "entity.name.operator",
    },
    {
      foreground: "#9CDCFE",
      token: "variable",
    },
    {
      foreground: "#9CDCFE",
      token: "meta.definition.variable.name",
    },
    {
      foreground: "#9CDCFE",
      token: "support.variable",
    },
    {
      foreground: "#9CDCFE",
      token: "entity.name.variable",
    },
    {
      foreground: "#9CDCFE",
      token: "constant.other.placeholder",
    },
    {
      foreground: "#4FC1FF",
      token: "variable.other.constant",
    },
    {
      foreground: "#4FC1FF",
      token: "variable.other.enummember",
    },
    {
      foreground: "#9CDCFE",
      token: "meta.object-literal.key",
    },
    {
      foreground: "#CE9178",
      token: "support.constant.property-value",
    },
    {
      foreground: "#CE9178",
      token: "support.constant.font-name",
    },
    {
      foreground: "#CE9178",
      token: "support.constant.media-type",
    },
    {
      foreground: "#CE9178",
      token: "support.constant.media",
    },
    {
      foreground: "#CE9178",
      token: "constant.other.color.rgb-value",
    },
    {
      foreground: "#CE9178",
      token: "constant.other.rgb-value",
    },
    {
      foreground: "#CE9178",
      token: "support.constant.color",
    },
    {
      foreground: "#CE9178",
      token: "punctuation.definition.group.regexp",
    },
    {
      foreground: "#CE9178",
      token: "punctuation.definition.group.assertion.regexp",
    },
    {
      foreground: "#CE9178",
      token: "punctuation.definition.character-class.regexp",
    },
    {
      foreground: "#CE9178",
      token: "punctuation.character.set.begin.regexp",
    },
    {
      foreground: "#CE9178",
      token: "punctuation.character.set.end.regexp",
    },
    {
      foreground: "#CE9178",
      token: "keyword.operator.negation.regexp",
    },
    {
      foreground: "#CE9178",
      token: "support.other.parenthesis.regexp",
    },
    {
      foreground: "#d16969",
      token: "constant.character.character-class.regexp",
    },
    {
      foreground: "#d16969",
      token: "constant.other.character-class.set.regexp",
    },
    {
      foreground: "#d16969",
      token: "constant.other.character-class.regexp",
    },
    {
      foreground: "#d16969",
      token: "constant.character.set.regexp",
    },
    {
      foreground: "#DCDCAA",
      token: "keyword.operator.or.regexp",
    },
    {
      foreground: "#DCDCAA",
      token: "keyword.control.anchor.regexp",
    },
    {
      foreground: "#d7ba7d",
      token: "keyword.operator.quantifier.regexp",
    },
    {
      foreground: "#569cd6",
      token: "constant.character",
    },
    {
      foreground: "#569cd6",
      token: "constant.other.option",
    },
    {
      foreground: "#d7ba7d",
      token: "constant.character.escape",
    },
    {
      foreground: "#C8C8C8",
      token: "entity.name.label",
    },
  ],
  colors: {
    "entity.name.function": "#DCDCAA",
    "activityBar.background": "#1C2022",
    "activityBar.border": "#2d2d2d",
    "activityBarBadge.background": "#C0C0C0",
    "activityBarBadge.foreground": "#1C2022",
    "badge.background": "#374140",
    "button.background": "#40A9F3",
    "button.hoverBackground": "#66B9F4",
    "editor.background": "#1C2022",
    "editor.selectionBackground": "#40a8f348",
    "editorCursor.foreground": "#66b9f4",
    "editorGroup.border": "#111518",
    "editorGroupHeader.tabsBackground": "#111518",
    "editorHoverWidget.background": "#1C2022",
    "input.background": "#111518",
    "input.foreground": "#C0C0C0",
    "list.hoverBackground": "#222a2b",
    "list.focusBackground": "#24282A",
    "menu.selectionBackground": "#24282A",
    "scrollbarSlider.activeBackground": "#374140",
    "scrollbarSlider.background": "#37414050",
    "sideBar.background": "#191d1f",
    "sideBar.border": "#2d2d2d",
    "statusBar.background": "#1C2022",
    "statusBar.border": "#111518",
    "tab.activeBackground": "#1C2022",
    "tab.border": "#111518",
    "tab.inactiveBackground": "#111518",
    "titleBar.activeBackground": "#1C2022",
    "titleBar.border": "#2d2d2d",
    "editorSuggestWidget.background": "#111518",
    "editorSuggestWidget.selectedBackground": "#24282A",
    "editorSuggestWidget.border": "#111518",
    "editorHoverWidget.border": "#111518",
    "inputOption.activeBorder": "#66b9f4",
    focusBorder: "#66b9f4",
    "peekViewEditor.background": "#111518",
    "menu.background": "#1C2022",
    "menu.foreground": "#C0C0C0",
    "menu.selectionForeground": "#ffffff",
    "menubar.selectionBackground": "#ffffff10",
    "menubar.selectionForeground": "#ffffff",
    "editorGroup.dropBackground": "#ffd3991f",
    "editorWarning.foreground": "#FFD399",
  },
  encodedTokensColors: [],
};

export const onedarkTheme: IStandaloneThemeData = {
  inherit: true,
  base: "vs-dark",
  colors: {
    "activityBar.background": "#282c34",
    "activityBar.foreground": "#d7dae0",
    "activityBarBadge.background": "#4d78cc",
    "activityBarBadge.foreground": "#f8fafd",
    "badge.background": "#282c34",
    "button.background": "#404754",
    "button.secondaryBackground": "#30333d",
    "button.secondaryForeground": "#c0bdbd",
    "checkbox.border": "#404754",
    "debugToolBar.background": "#21252b",
    descriptionForeground: "#abb2bf",
    "diffEditor.insertedTextBackground": "#00809b33",
    "dropdown.background": "#21252b",
    "dropdown.border": "#21252b",
    "editor.background": "#282c34",
    "editor.findMatchBackground": "#42557b",
    "editor.findMatchBorder": "#457dff",
    "editor.findMatchHighlightBackground": "#6199ff2f",
    "editor.foreground": "#abb2bf",
    "editorBracketHighlight.foreground1": "#d19a66",
    "editorBracketHighlight.foreground2": "#c678dd",
    "editorBracketHighlight.foreground3": "#56b6c2",
    "editorHoverWidget.highlightForeground": "#61afef",
    "editorInlayHint.foreground": "#abb2bf",
    "editorInlayHint.background": "#2c313c",
    "editor.lineHighlightBackground": "#2c313c",
    "editorLineNumber.activeForeground": "#abb2bf",
    "editorGutter.addedBackground": "#109868",
    "editorGutter.deletedBackground": "#9A353D",
    "editorGutter.modifiedBackground": "#948B60",
    "editorOverviewRuler.addedBackground": "#109868",
    "editorOverviewRuler.deletedBackground": "#9A353D",
    "editorOverviewRuler.modifiedBackground": "#948B60",
    "editor.selectionBackground": "#67769660",
    "editor.selectionHighlightBackground": "#ffffff10",
    "editor.selectionHighlightBorder": "#dddddd",
    "editor.wordHighlightBackground": "#d2e0ff2f",
    "editor.wordHighlightBorder": "#7f848e",
    "editor.wordHighlightStrongBackground": "#abb2bf26",
    "editor.wordHighlightStrongBorder": "#7f848e",
    "editorBracketMatch.background": "#515a6b",
    "editorBracketMatch.border": "#515a6b",
    "editorCursor.background": "#ffffffc9",
    "editorCursor.foreground": "#528bff",
    "editorError.foreground": "#c24038",
    "editorGroup.background": "#181a1f",
    "editorGroup.border": "#181a1f",
    "editorGroupHeader.tabsBackground": "#21252b",
    "editorHoverWidget.background": "#21252b",
    "editorHoverWidget.border": "#181a1f",
    "editorIndentGuide.activeBackground": "#c8c8c859",
    "editorIndentGuide.background": "#3b4048",
    "editorLineNumber.foreground": "#495162",
    "editorMarkerNavigation.background": "#21252b",
    "editorRuler.foreground": "#abb2bf26",
    "editorSuggestWidget.background": "#21252b",
    "editorSuggestWidget.border": "#181a1f",
    "editorSuggestWidget.selectedBackground": "#2c313a",
    "editorWarning.foreground": "#d19a66",
    "editorWhitespace.foreground": "#ffffff1d",
    "editorWidget.background": "#21252b",
    focusBorder: "#3e4452",
    "gitDecoration.ignoredResourceForeground": "#636b78",
    "input.background": "#1d1f23",
    "input.foreground": "#abb2bf",
    "list.activeSelectionBackground": "#2c313a",
    "list.activeSelectionForeground": "#d7dae0",
    "list.focusBackground": "#323842",
    "list.focusForeground": "#f0f0f0",
    "list.highlightForeground": "#ecebeb",
    "list.hoverBackground": "#2c313a",
    "list.hoverForeground": "#abb2bf",
    "list.inactiveSelectionBackground": "#323842",
    "list.inactiveSelectionForeground": "#d7dae0",
    "list.warningForeground": "#d19a66",
    "menu.foreground": "#abb2bf",
    "menu.separatorBackground": "#343a45",
    "minimapGutter.addedBackground": "#109868",
    "minimapGutter.deletedBackground": "#9A353D",
    "minimapGutter.modifiedBackground": "#948B60",
    "panel.border": "#3e4452",
    "panelSectionHeader.background": "#21252b",
    "peekViewEditor.background": "#1b1d23",
    "peekViewEditor.matchHighlightBackground": "#29244b",
    "peekViewResult.background": "#22262b",
    "scrollbar.shadow": "#23252c",
    "scrollbarSlider.activeBackground": "#747d9180",
    "scrollbarSlider.background": "#4e566660",
    "scrollbarSlider.hoverBackground": "#5a637580",
    "settings.focusedRowBackground": "#282c34",
    "settings.headerForeground": "#fff",
    "sideBar.background": "#21252b",
    "sideBar.foreground": "#abb2bf",
    "sideBarSectionHeader.background": "#282c34",
    "sideBarSectionHeader.foreground": "#abb2bf",
    "statusBar.background": "#21252b",
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingBorder": "#ff000000",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.foreground": "#9da5b4",
    "statusBar.noFolderBackground": "#21252b",
    "statusBarItem.remoteBackground": "#4d78cc",
    "statusBarItem.remoteForeground": "#f8fafd",
    "tab.activeBackground": "#282c34",
    "tab.activeBorder": "#b4b4b4",
    "tab.activeForeground": "#dcdcdc",
    "tab.border": "#181a1f",
    "tab.hoverBackground": "#323842",
    "tab.inactiveBackground": "#21252b",
    "tab.unfocusedHoverBackground": "#323842",
    "terminal.ansiBlack": "#3f4451",
    "terminal.ansiBlue": "#4aa5f0",
    "terminal.ansiBrightBlack": "#4f5666",
    "terminal.ansiBrightBlue": "#4dc4ff",
    "terminal.ansiBrightCyan": "#4cd1e0",
    "terminal.ansiBrightGreen": "#a5e075",
    "terminal.ansiBrightMagenta": "#de73ff",
    "terminal.ansiBrightRed": "#ff616e",
    "terminal.ansiBrightWhite": "#e6e6e6",
    "terminal.ansiBrightYellow": "#f0a45d",
    "terminal.ansiCyan": "#42b3c2",
    "terminal.ansiGreen": "#8cc265",
    "terminal.ansiMagenta": "#c162de",
    "terminal.ansiRed": "#e05561",
    "terminal.ansiWhite": "#d7dae0",
    "terminal.ansiYellow": "#d18f52",
    "terminal.background": "#282c34",
    "terminal.border": "#3e4452",
    "terminal.foreground": "#abb2bf",
    "terminal.selectionBackground": "#abb2bf30",
    "textBlockQuote.background": "#2e3440",
    "textBlockQuote.border": "#4b5362",
    "textLink.foreground": "#61afef",
    "textPreformat.foreground": "#d19a66",
    "titleBar.activeBackground": "#282c34",
    "titleBar.activeForeground": "#9da5b4",
    "titleBar.inactiveBackground": "#21252b",
    "titleBar.inactiveForeground": "#6b717d",
    "tree.indentGuidesStroke": "#ffffff1d",
    "walkThrough.embeddedEditorBackground": "#2e3440",
    "welcomePage.buttonHoverBackground": "#404754",
  },
  rules: [
    {
      foreground: "#abb2bf",
      token: "meta.embedded",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.delayed.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.list.begin.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.list.end.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.ability.begin.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.ability.end.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.operator.assignment.as.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.separator.pipe.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.separator.delimiter.unison",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.hash.unison",
    },
    {
      foreground: "#c678dd",
      token: "variable.other.generic-type.haskell",
    },
    {
      foreground: "#d19a66",
      token: "storage.type.haskell",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.magic.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.period.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.element.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.parenthesis.begin.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.parenthesis.end.python",
    },
    {
      foreground: "#e5c07b",
      token: "variable.parameter.function.language.special.self.python",
    },
    {
      foreground: "#e5c07b",
      token: "variable.parameter.function.language.special.cls.python",
    },
    {
      foreground: "#abb2bf",
      token: "storage.modifier.lifetime.rust",
    },
    {
      foreground: "#61afef",
      token: "support.function.std.rust",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.lifetime.rust",
    },
    {
      foreground: "#e06c75",
      token: "variable.language.rust",
    },
    {
      foreground: "#c678dd",
      token: "support.constant.edge",
    },
    {
      foreground: "#e06c75",
      token: "constant.other.character-class.regexp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.word",
    },
    {
      foreground: "#d19a66",
      token: "keyword.operator.quantifier.regexp",
    },
    {
      foreground: "#abb2bf",
      token: "variable.parameter.function",
    },
    {
      foreground: "#5c6370",
      token: "comment markup.link",
    },
    {
      foreground: "#e5c07b",
      token: "markup.changed.diff",
    },
    {
      foreground: "#61afef",
      token: "meta.diff.header.from-file",
    },
    {
      foreground: "#61afef",
      token: "meta.diff.header.to-file",
    },
    {
      foreground: "#61afef",
      token: "punctuation.definition.from-file.diff",
    },
    {
      foreground: "#61afef",
      token: "punctuation.definition.to-file.diff",
    },
    {
      foreground: "#98c379",
      token: "markup.inserted.diff",
    },
    {
      foreground: "#e06c75",
      token: "markup.deleted.diff",
    },
    {
      foreground: "#e06c75",
      token: "meta.function.c",
    },
    {
      foreground: "#e06c75",
      token: "meta.function.cpp",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.begin.bracket.curly.cpp",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.end.bracket.curly.cpp",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.terminator.statement.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.begin.bracket.curly.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.end.bracket.curly.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.parens.begin.bracket.round.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.parens.end.bracket.round.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.parameters.begin.bracket.round.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.parameters.end.bracket.round.c",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.key-value",
    },
    {
      foreground: "#61afef",
      token: "keyword.operator.expression.import",
    },
    {
      foreground: "#e5c07b",
      token: "support.constant.math",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.property.math",
    },
    {
      foreground: "#e5c07b",
      token: "variable.other.constant",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.annotation.java",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.object.array.java",
    },
    {
      foreground: "#e06c75",
      token: "source.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.begin.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.block.end.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.method-parameters.begin.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.method-parameters.end.java",
    },
    {
      foreground: "#abb2bf",
      token: "meta.method.identifier.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.method.begin.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.method.end.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.terminator.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.class.begin.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.class.end.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.inner-class.begin.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.inner-class.end.java",
    },
    {
      foreground: "#abb2bf",
      token: "meta.method-call.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.class.begin.bracket.curly.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.class.end.bracket.curly.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.method.begin.bracket.curly.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.method.end.bracket.curly.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.period.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.bracket.angle.java",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.annotation.java",
    },
    {
      foreground: "#abb2bf",
      token: "meta.method.body.java",
    },
    {
      foreground: "#61afef",
      token: "meta.method.java",
    },
    {
      foreground: "#e5c07b",
      token: "storage.modifier.import.java",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.java",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.generic.java",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.instanceof.java",
    },
    {
      foreground: "#e06c75",
      token: "meta.definition.variable.name.java",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.logical",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.bitwise",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.channel",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.property-value.scss",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.property-value.css",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.css",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.scss",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.less",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.color.w3c-standard-color-name.css",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.color.w3c-standard-color-name.scss",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.list.comma.css",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.color.w3c-standard-color-name.css",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.vendored.property-name.css",
    },
    {
      foreground: "#e5c07b",
      token: "support.module.node",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.object.module",
    },
    {
      foreground: "#e5c07b",
      token: "support.module.node",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.type.module",
    },
    {
      foreground: "#e06c75",
      token: "variable.other.readwrite",
    },
    {
      foreground: "#e06c75",
      token: "meta.object-literal.key",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.property",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.object.process",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.object.node",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.json",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.instanceof",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.new",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.ternary",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.optional",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.keyof",
    },
    {
      foreground: "#e06c75",
      token: "support.type.object.console",
    },
    {
      foreground: "#d19a66",
      token: "support.variable.property.process",
    },
    {
      foreground: "#61afef",
      token: "entity.name.function",
    },
    {
      foreground: "#61afef",
      token: "support.function.console",
    },
    {
      foreground: "#abb2bf",
      token: "keyword.operator.misc.rust",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.sigil.rust",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.delete",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.object.dom",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.dom",
    },
    {
      foreground: "#e06c75",
      token: "support.variable.property.dom",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.arithmetic",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.comparison",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.decrement",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.increment",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.relational",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.assignment.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.comparison.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.increment.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.decrement.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.bitwise.shift.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.assignment.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.comparison.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.increment.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.decrement.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.bitwise.shift.cpp",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.delimiter",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.separator.c",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.separator.cpp",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.posix-reserved.c",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.posix-reserved.cpp",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.sizeof.c",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.sizeof.cpp",
    },
    {
      foreground: "#d19a66",
      token: "variable.parameter.function.language.python",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.python",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.logical.python",
    },
    {
      foreground: "#d19a66",
      token: "variable.parameter.function.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.arguments.begin.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.arguments.end.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.arguments.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.list.begin.python",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.list.end.python",
    },
    {
      foreground: "#61afef",
      token: "meta.function-call.generic.python",
    },
    {
      foreground: "#d19a66",
      token: "constant.character.format.placeholder.other.python",
    },
    {
      foreground: "#abb2bf",
      token: "keyword.operator",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.assignment.compound",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.assignment.compound.js",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.assignment.compound.ts",
    },
    {
      foreground: "#c678dd",
      token: "keyword",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.namespace",
    },
    {
      foreground: "#e06c75",
      token: "variable",
    },
    {
      foreground: "#abb2bf",
      token: "variable.c",
    },
    {
      foreground: "#e5c07b",
      token: "variable.language",
    },
    {
      foreground: "#abb2bf",
      token: "token.variable.parameter.java",
    },
    {
      foreground: "#e5c07b",
      token: "import.storage.java",
    },
    {
      foreground: "#c678dd",
      token: "token.package.keyword",
    },
    {
      foreground: "#abb2bf",
      token: "token.package",
    },
    {
      foreground: "#61afef",
      token: "entity.name.function",
    },
    {
      foreground: "#61afef",
      token: "meta.require",
    },
    {
      foreground: "#61afef",
      token: "support.function.any-method",
    },
    {
      foreground: "#61afef",
      token: "variable.function",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.type.namespace",
    },
    {
      foreground: "#e5c07b",
      token: "support.class",
    },
    {
      foreground: "#e5c07b",
      token: " entity.name.type.class",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.class.identifier.namespace.type",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.class",
    },
    {
      foreground: "#e5c07b",
      token: "variable.other.class.js",
    },
    {
      foreground: "#e5c07b",
      token: "variable.other.class.ts",
    },
    {
      foreground: "#e06c75",
      token: "variable.other.class.php",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.type",
    },
    {
      foreground: "#c678dd",
      token: "keyword.control",
    },
    {
      foreground: "#d19a66",
      token: "control.elements",
    },
    {
      foreground: "#d19a66",
      token: " keyword.operator.less",
    },
    {
      foreground: "#61afef",
      token: "keyword.other.special-method",
    },
    {
      foreground: "#c678dd",
      token: "storage",
    },
    {
      foreground: "#c678dd",
      token: "token.storage",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.delete",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.in",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.of",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.instanceof",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.new",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.typeof",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.void",
    },
    {
      foreground: "#e5c07b",
      token: "token.storage.type.java",
    },
    {
      foreground: "#56b6c2",
      token: "support.function",
    },
    {
      foreground: "#abb2bf",
      token: "support.type.property-name",
    },
    {
      foreground: "#e06c75",
      token: "support.type.property-name.toml",
    },
    {
      foreground: "#e06c75",
      token: " support.type.property-name.table.toml",
    },
    {
      foreground: "#e06c75",
      token: " support.type.property-name.array.toml",
    },
    {
      foreground: "#abb2bf",
      token: "support.constant.property-value",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.font-name",
    },
    {
      foreground: "#abb2bf",
      token: "meta.tag",
    },
    {
      foreground: "#98c379",
      token: "string",
    },
    {
      foreground: "#56b6c2",
      token: "constant.other.symbol",
    },
    {
      foreground: "#d19a66",
      token: "constant.numeric",
    },
    {
      foreground: "#d19a66",
      token: "constant",
    },
    {
      foreground: "#d19a66",
      token: "punctuation.definition.constant",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.tag",
    },
    {
      foreground: "#d19a66",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "#61afef",
      token: "entity.other.attribute-name.id",
    },
    {
      foreground: "#d19a66",
      token: "entity.other.attribute-name.class.css",
    },
    {
      foreground: "#c678dd",
      token: "meta.selector",
    },
    {
      foreground: "#e06c75",
      token: "markup.heading",
    },
    {
      foreground: "#61afef",
      token: "markup.heading punctuation.definition.heading",
    },
    {
      foreground: "#61afef",
      token: " entity.name.section",
    },
    {
      foreground: "#e06c75",
      token: "keyword.other.unit",
    },
    {
      foreground: "#d19a66",
      token: "markup.bold",
    },
    {
      foreground: "#d19a66",
      token: "todo.bold",
    },
    {
      foreground: "#e5c07b",
      token: "punctuation.definition.bold",
    },
    {
      foreground: "#c678dd",
      token: "markup.italic",
    },
    {
      foreground: "#c678dd",
      token: " punctuation.definition.italic",
    },
    {
      foreground: "#c678dd",
      token: "todo.emphasis",
    },
    {
      foreground: "#c678dd",
      token: "emphasis md",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.section.markdown",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.heading.markdown",
    },
    {
      foreground: "#e5c07b",
      token: "punctuation.definition.list.begin.markdown",
    },
    {
      foreground: "#abb2bf",
      token: "markup.heading.setext",
    },
    {
      foreground: "#d19a66",
      token: "punctuation.definition.bold.markdown",
    },
    {
      foreground: "#98c379",
      token: "markup.inline.raw.markdown",
    },
    {
      foreground: "#98c379",
      token: "markup.inline.raw.string.markdown",
    },
    {
      foreground: "#e5c07b",
      token: "punctuation.definition.raw.markdown",
    },
    {
      foreground: "#e5c07b",
      token: "punctuation.definition.list.markdown",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.string.begin.markdown",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.string.end.markdown",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "#e06c75",
      token: "beginning.punctuation.definition.list.markdown",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "#c678dd",
      token: "markup.underline.link.markdown",
    },
    {
      foreground: "#c678dd",
      token: "markup.underline.link.image.markdown",
    },
    {
      foreground: "#61afef",
      token: "string.other.link.title.markdown",
    },
    {
      foreground: "#61afef",
      token: "string.other.link.description.markdown",
    },
    {
      foreground: "#98c379",
      token: "markup.raw.monospace.asciidoc",
    },
    {
      foreground: "#e5c07b",
      token: "punctuation.definition.asciidoc",
    },
    {
      foreground: "#e5c07b",
      token: "markup.list.asciidoc",
    },
    {
      foreground: "#c678dd",
      token: "markup.link.asciidoc",
    },
    {
      foreground: "#c678dd",
      token: "markup.other.url.asciidoc",
    },
    {
      foreground: "#61afef",
      token: "string.unquoted.asciidoc",
    },
    {
      foreground: "#61afef",
      token: "markup.other.url.asciidoc",
    },
    {
      foreground: "#56b6c2",
      token: "string.regexp",
    },
    {
      foreground: "#e06c75",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#e06c75",
      token: " variable.interpolation",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.section.embedded.begin",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.section.embedded.end",
    },
    {
      foreground: "#ffffff",
      token: "invalid.illegal",
    },
    {
      foreground: "#abb2bf",
      token: "invalid.illegal.bad-ampersand.html",
    },
    {
      foreground: "#e06c75",
      token: "invalid.illegal.unrecognized-tag.html",
    },
    {
      foreground: "#ffffff",
      token: "invalid.broken",
    },
    {
      foreground: "#ffffff",
      token: "invalid.deprecated",
    },
    {
      foreground: "#d19a66",
      token: "invalid.deprecated.entity.other.attribute-name.html",
    },
    {
      foreground: "#ffffff",
      token: "invalid.unimplemented",
    },
    {
      foreground: "#e06c75",
      token: "source.json meta.structure.dictionary.json > string.quoted.json",
    },
    {
      foreground: "#e06c75",
      token:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    },
    {
      foreground: "#98c379",
      token:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
    },
    {
      foreground: "#98c379",
      token:
        "source.json meta.structure.array.json > value.json > string.quoted.json",
    },
    {
      foreground: "#98c379",
      token:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
    },
    {
      foreground: "#98c379",
      token:
        "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    },
    {
      foreground: "#56b6c2",
      token:
        "source.json meta.structure.dictionary.json > constant.language.json",
    },
    {
      foreground: "#56b6c2",
      token: "source.json meta.structure.array.json > constant.language.json",
    },
    {
      foreground: "#e06c75",
      token: "support.type.property-name.json",
    },
    {
      foreground: "#e06c75",
      token: "support.type.property-name.json punctuation",
    },
    {
      foreground: "#c678dd",
      token:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    },
    {
      foreground: "#c678dd",
      token:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    },
    {
      foreground: "#e5c07b",
      token: "support.other.namespace.use.php",
    },
    {
      foreground: "#e5c07b",
      token: "support.other.namespace.use-as.php",
    },
    {
      foreground: "#e5c07b",
      token: "entity.other.alias.php",
    },
    {
      foreground: "#e5c07b",
      token: "meta.interface.php",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.error-control.php",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.type.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.array.begin.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.array.end.php",
    },
    {
      foreground: "#f44747",
      token: "invalid.illegal.non-null-typehinted.php",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.php",
    },
    {
      foreground: "#e5c07b",
      token: "meta.other.type.phpdoc.php",
    },
    {
      foreground: "#e5c07b",
      token: "keyword.other.type.php",
    },
    {
      foreground: "#e5c07b",
      token: "keyword.other.array.phpdoc.php",
    },
    {
      foreground: "#61afef",
      token: "meta.function-call.php",
    },
    {
      foreground: "#61afef",
      token: "meta.function-call.object.php",
    },
    {
      foreground: "#61afef",
      token: "meta.function-call.static.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.parameters.begin.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.parameters.end.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.delimiter.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.scope.begin.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.section.scope.end.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.terminator.expression.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.arguments.begin.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.arguments.end.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.storage-type.begin.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.storage-type.end.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.array.begin.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.array.end.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.begin.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.end.bracket.round.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.begin.bracket.curly.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.end.bracket.curly.php",
    },
    {
      foreground: "#abb2bf",
      token:
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
    },
    {
      foreground: "#abb2bf",
      token:
        "punctuation.definition.section.switch-block.start.bracket.curly.php",
    },
    {
      foreground: "#abb2bf",
      token:
        "punctuation.definition.section.switch-block.begin.bracket.curly.php",
    },
    {
      foreground: "#abb2bf",
      token:
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.core.rust",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.ext.php",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.std.php",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.core.php",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.parser-token.php",
    },
    {
      foreground: "#61afef",
      token: "entity.name.goto-label.php",
    },
    {
      foreground: "#61afef",
      token: "support.other.php",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.logical.php",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.bitwise.php",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.arithmetic.php",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.regexp.php",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.comparison.php",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.heredoc.php",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.nowdoc.php",
    },
    {
      foreground: "#61afef",
      token: "meta.function.decorator.python",
    },
    {
      foreground: "#56b6c2",
      token: "support.token.decorator.python",
    },
    {
      foreground: "#56b6c2",
      token: "meta.function.decorator.identifier.python",
    },
    {
      foreground: "#abb2bf",
      token: "function.parameter",
    },
    {
      foreground: "#abb2bf",
      token: "function.brace",
    },
    {
      foreground: "#abb2bf",
      token: "function.parameter.ruby",
    },
    {
      foreground: "#abb2bf",
      token: " function.parameter.cs",
    },
    {
      foreground: "#56b6c2",
      token: "constant.language.symbol.ruby",
    },
    {
      foreground: "#56b6c2",
      token: "constant.language.symbol.hashkey.ruby",
    },
    {
      foreground: "#56b6c2",
      token: "rgb-value",
    },
    {
      foreground: "#d19a66",
      token: "inline-color-decoration rgb-value",
    },
    {
      foreground: "#d19a66",
      token: "less rgb-value",
    },
    {
      foreground: "#e06c75",
      token: "selector.sass",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.primitive.ts",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.builtin.ts",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.primitive.tsx",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.builtin.tsx",
    },
    {
      foreground: "#abb2bf",
      token: "block.scope.end",
    },
    {
      foreground: "#abb2bf",
      token: "block.scope.begin",
    },
    {
      foreground: "#e5c07b",
      token: "storage.type.cs",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.variable.local.cs",
    },
    {
      foreground: "#61afef",
      token: "token.info-token",
    },
    {
      foreground: "#d19a66",
      token: "token.warn-token",
    },
    {
      foreground: "#f44747",
      token: "token.error-token",
    },
    {
      foreground: "#c678dd",
      token: "token.debug-token",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.definition.template-expression.begin",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.definition.template-expression.end",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#abb2bf",
      token: "meta.template.expression",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.module",
    },
    {
      foreground: "#61afef",
      token: "support.type.type.flowtype",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.primitive",
    },
    {
      foreground: "#e06c75",
      token: "meta.property.object",
    },
    {
      foreground: "#e06c75",
      token: "variable.parameter.function.js",
    },
    {
      foreground: "#98c379",
      token: "keyword.other.template.begin",
    },
    {
      foreground: "#98c379",
      token: "keyword.other.template.end",
    },
    {
      foreground: "#98c379",
      token: "keyword.other.substitution.begin",
    },
    {
      foreground: "#98c379",
      token: "keyword.other.substitution.end",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.operator.assignment",
    },
    {
      foreground: "#e5c07b",
      token: "keyword.operator.assignment.go",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.arithmetic.go",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.address.go",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.package.go",
    },
    {
      foreground: "#56b6c2",
      token: "support.type.prelude.elm",
    },
    {
      foreground: "#d19a66",
      token: "support.constant.elm",
    },
    {
      foreground: "#c678dd",
      token: "punctuation.quasi.element",
    },
    {
      foreground: "#e06c75",
      token: "constant.character.entity",
    },
    {
      foreground: "#56b6c2",
      token: "entity.other.attribute-name.pseudo-element",
    },
    {
      foreground: "#56b6c2",
      token: "entity.other.attribute-name.pseudo-class",
    },
    {
      foreground: "#e5c07b",
      token: "entity.global.clojure",
    },
    {
      foreground: "#e06c75",
      token: "meta.symbol.clojure",
    },
    {
      foreground: "#56b6c2",
      token: "constant.keyword.clojure",
    },
    {
      foreground: "#e06c75",
      token: "meta.arguments.coffee",
    },
    {
      foreground: "#e06c75",
      token: "variable.parameter.function.coffee",
    },
    {
      foreground: "#98c379",
      token: "source.ini",
    },
    {
      foreground: "#e06c75",
      token: "meta.scope.prerequisites.makefile",
    },
    {
      foreground: "#e5c07b",
      token: "source.makefile",
    },
    {
      foreground: "#e5c07b",
      token: "storage.modifier.import.groovy",
    },
    {
      foreground: "#61afef",
      token: "meta.method.groovy",
    },
    {
      foreground: "#e06c75",
      token: "meta.definition.variable.name.groovy",
    },
    {
      foreground: "#98c379",
      token: "meta.definition.class.inherited.classes.groovy",
    },
    {
      foreground: "#e5c07b",
      token: "support.variable.semantic.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.texture.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.sampler.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.object.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.object.rw.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.fx.hlsl",
    },
    {
      foreground: "#c678dd",
      token: "support.type.object.hlsl",
    },
    {
      foreground: "#e06c75",
      token: "text.variable",
    },
    {
      foreground: "#e06c75",
      token: "text.bracketed",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.swift",
    },
    {
      foreground: "#e5c07b",
      token: "support.type.vb.asp",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.function.xi",
    },
    {
      foreground: "#56b6c2",
      token: "entity.name.class.xi",
    },
    {
      foreground: "#e06c75",
      token: "constant.character.character-class.regexp.xi",
    },
    {
      foreground: "#c678dd",
      token: "constant.regexp.xi",
    },
    {
      foreground: "#56b6c2",
      token: "keyword.control.xi",
    },
    {
      foreground: "#abb2bf",
      token: "invalid.xi",
    },
    {
      foreground: "#98c379",
      token: "beginning.punctuation.definition.quote.markdown.xi",
    },
    {
      foreground: "#7f848e",
      token: "beginning.punctuation.definition.list.markdown.xi",
    },
    {
      foreground: "#61afef",
      token: "constant.character.xi",
    },
    {
      foreground: "#61afef",
      token: "accent.xi",
    },
    {
      foreground: "#d19a66",
      token: "wikiword.xi",
    },
    {
      foreground: "#ffffff",
      token: "constant.other.color.rgb-value.xi",
    },
    {
      foreground: "#5c6370",
      token: "punctuation.definition.tag.xi",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.label.cs",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.scope-resolution.function.call",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.scope-resolution.function.definition",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.label.cs",
    },
    {
      foreground: "#e06c75",
      token: "markup.heading.setext.1.markdown",
    },
    {
      foreground: "#e06c75",
      token: "markup.heading.setext.2.markdown",
    },
    {
      foreground: "#abb2bf",
      token: " meta.brace.square",
    },
    {
      foreground: "#7f848e",
      fontStyle: "italic",
      token: "comment",
    },
    {
      foreground: "#7f848e",
      fontStyle: "italic",
      token: " punctuation.definition.comment",
    },
    {
      foreground: "#5c6370",
      token: "markup.quote.markdown",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.definition.block.sequence.item.yaml",
    },
    {
      foreground: "#56b6c2",
      token: "constant.language.symbol.elixir",
    },
    {
      foreground: "#56b6c2",
      token: "constant.language.symbol.double-quoted.elixir",
    },
    {
      foreground: "#e5c07b",
      token: "entity.name.variable.parameter.cs",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.variable.field.cs",
    },
    {
      foreground: "#e06c75",
      token: "markup.deleted",
    },
    {
      foreground: "#98c379",
      token: "markup.inserted",
    },
    {
      fontStyle: "underline",
      token: "markup.underline",
    },
    {
      foreground: "#BE5046",
      token: "punctuation.section.embedded.begin.php",
    },
    {
      foreground: "#BE5046",
      token: "punctuation.section.embedded.end.php",
    },
    {
      foreground: "#abb2bf",
      token: "support.other.namespace.php",
    },
    {
      foreground: "#e06c75",
      token: "variable.parameter.function.latex",
    },
    {
      foreground: "#e5c07b",
      token: "variable.other.object",
    },
    {
      foreground: "#e06c75",
      token: "variable.other.constant.property",
    },
    {
      foreground: "#e5c07b",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "#e06c75",
      token: "variable.other.readwrite.c",
    },
    {
      foreground: "#abb2bf",
      token: "entity.name.variable.parameter.php",
    },
    {
      foreground: "#abb2bf",
      token: "punctuation.separator.colon.php",
    },
    {
      foreground: "#abb2bf",
      token: "constant.other.php",
    },
    {
      foreground: "#c678dd",
      token: "constant.numeric.decimal.asm.x86_64",
    },
    {
      foreground: "#d19a66",
      token: "support.other.parenthesis.regexp",
    },
    {
      foreground: "#56b6c2",
      token: "constant.character.escape",
    },
    {
      foreground: "#e06c75",
      token: "string.regexp",
    },
    {
      foreground: "#98c379",
      token: "log.info",
    },
    {
      foreground: "#e5c07b",
      token: "log.warning",
    },
    {
      foreground: "#e06c75",
      token: "log.error",
    },
    {
      foreground: "#c678dd",
      token: "keyword.operator.expression.is",
    },
    {
      foreground: "#e06c75",
      token: "entity.name.label",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.js",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.ts",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.jsx",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.tsx",
    },
    {
      fontStyle: "italic",
      token: "variable.parameter",
    },
    {
      fontStyle: "italic",
      token: "variable.language.super",
    },
    {
      fontStyle: "italic",
      token: "comment.line.double-slash",
    },
    {
      fontStyle: "italic",
      token: "comment.block.documentation",
    },
    {
      fontStyle: "italic",
      token: "markup.italic.markdown",
    },
  ],
  encodedTokensColors: [],
};

export const tokyoNightTheme: IStandaloneThemeData = {
  inherit: true,
  base: "vs-dark",
  colors: {
    foreground: "#787c99",
    descriptionForeground: "#545c7e",
    focusBorder: "#545c7e33",
    errorForeground: "#5a607d",
    "widget.shadow": "#ffffff00",
    "scrollbar.shadow": "#00000033",
    "badge.background": "#7e83b233",
    "badge.foreground": "#a9b1d6",
    "icon.foreground": "#7982a9",
    "settings.headerForeground": "#6183bb",
    "window.activeBorder": "#0d0f17",
    "window.inactiveBorder": "#0d0f17",
    "sash.hoverBorder": "#29355a",
    "toolbar.activeBackground": "#2c324a",
    "toolbar.hoverBackground": "#2c324a",
    "extensionButton.prominentBackground": "#3d59a1DD",
    "extensionButton.prominentHoverBackground": "#3d59a1AA",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionBadge.remoteBackground": "#3d59a1",
    "extensionBadge.remoteForeground": "#ffffff",
    "button.background": "#3d59a1dd",
    "button.hoverBackground": "#3d59a1AA",
    "button.secondaryBackground": "#41496b",
    "button.foreground": "#ffffff",
    "progressBar.background": "#3d59a1",
    "input.background": "#1b1e2e",
    "input.foreground": "#a9b1d6",
    "input.border": "#282e44",
    "input.placeholderForeground": "#4a5272",
    "inputOption.activeForeground": "#c0caf5",
    "inputOption.activeBackground": "#3d59a144",
    "inputValidation.infoForeground": "#bbc2e0",
    "inputValidation.infoBackground": "#3d59a15c",
    "inputValidation.infoBorder": "#3d59a1",
    "inputValidation.warningForeground": "#000000",
    "inputValidation.warningBackground": "#c2985b",
    "inputValidation.warningBorder": "#e0af68",
    "inputValidation.errorForeground": "#bbc2e0",
    "inputValidation.errorBackground": "#85353e",
    "inputValidation.errorBorder": "#963c47",
    "dropdown.foreground": "#7982a9",
    "dropdown.background": "#1b1e2e",
    "dropdown.listBackground": "#1b1e2e",
    "activityBar.background": "#1f2335",
    "activityBar.foreground": "#7982a9",
    "activityBar.inactiveForeground": "#41496b",
    "activityBar.border": "#1f2335",
    "activityBarBadge.background": "#3d59a1",
    "activityBarBadge.foreground": "#fff",
    "tree.indentGuidesStroke": "#2e344f",
    "sideBar.foreground": "#7982a9",
    "sideBar.background": "#1f2335",
    "sideBar.border": "#1b1e2e",
    "sideBarTitle.foreground": "#7982a9",
    "sideBarSectionHeader.background": "#1f2335",
    "sideBarSectionHeader.foreground": "#a9b1d6",
    "sideBarSectionHeader.border": "#1b1e2e",
    "sideBar.dropBackground": "#292e42",
    "list.dropBackground": "#292e42",
    "list.deemphasizedForeground": "#7982a9",
    "list.activeSelectionBackground": "#2c324a",
    "list.activeSelectionForeground": "#a9b1d6",
    "list.inactiveSelectionBackground": "#292e42",
    "list.inactiveSelectionForeground": "#a9b1d6",
    "list.focusBackground": "#292e42",
    "list.focusForeground": "#a9b1d6",
    "list.hoverBackground": "#1b1e2e",
    "list.hoverForeground": "#a9b1d6",
    "list.highlightForeground": "#668ac4",
    "list.invalidItemForeground": "#c97018",
    "list.errorForeground": "#bb616b",
    "list.warningForeground": "#c49a5a",
    "listFilterWidget.background": "#1b1e2e",
    "listFilterWidget.outline": "#3d59a1",
    "listFilterWidget.noMatchesOutline": "#a6333f",
    "pickerGroup.foreground": "#a9b1d6",
    "pickerGroup.border": "#1b1e2e",
    "scrollbarSlider.background": "#9cacff15",
    "scrollbarSlider.hoverBackground": "#9cacff10",
    "scrollbarSlider.activeBackground": "#9cacff22",
    "editorBracketHighlight.foreground1": "#698cd6",
    "editorBracketHighlight.foreground2": "#68b3de",
    "editorBracketHighlight.foreground3": "#9a7ecc",
    "editorBracketHighlight.foreground4": "#25aac2",
    "editorBracketHighlight.foreground5": "#80a856",
    "editorBracketHighlight.foreground6": "#cfa25f",
    "editorBracketHighlight.unexpectedBracket.foreground": "#db4b4b",
    "editorBracketPairGuide.activeBackground1": "#698cd6",
    "editorBracketPairGuide.activeBackground2": "#68b3de",
    "editorBracketPairGuide.activeBackground3": "#9a7ecc",
    "editorBracketPairGuide.activeBackground4": "#25aac2",
    "editorBracketPairGuide.activeBackground5": "#80a856",
    "editorBracketPairGuide.activeBackground6": "#cfa25f",
    "selection.background": "#6f7bb635",
    "editor.background": "#24283b",
    "editor.foreground": "#a9b1d6",
    "editor.foldBackground": "#181b294a",
    "editorLink.activeForeground": "#a9b1d6",
    "editor.selectionBackground": "#6f7bb640",
    "editor.inactiveSelectionBackground": "#6f7bb615",
    "editor.findMatchBackground": "#3d59a166",
    "editor.findMatchBorder": "#ffdb69aa",
    "editor.findMatchHighlightBackground": "#3d59a166",
    "editor.findRangeHighlightBackground": "#6f7bb625",
    "editor.rangeHighlightBackground": "#6f7bb620",
    "editor.wordHighlightBackground": "#6f7bb633",
    "editor.wordHighlightStrongBackground": "#6f7bb644",
    "editor.selectionHighlightBackground": "#6f7bb633",
    "editorCursor.foreground": "#c0caf5",
    "editorIndentGuide.background": "#292e42",
    "editorIndentGuide.activeBackground": "#3b4261",
    "editorLineNumber.foreground": "#3b4261",
    "editorLineNumber.activeForeground": "#737aa2",
    "editor.lineHighlightBackground": "#292e42",
    "editorWhitespace.foreground": "#3b4261",
    "editorMarkerNavigation.background": "#1f2335",
    "editorHoverWidget.background": "#1f2335",
    "editorHoverWidget.border": "#1b1e2e",
    "editorBracketMatch.background": "#1f2335",
    "editorBracketMatch.border": "#545c7e",
    "editorOverviewRuler.border": "#1b1e2e",
    "editorOverviewRuler.errorForeground": "#db4b4b",
    "editorOverviewRuler.warningForeground": "#e0af68",
    "editorOverviewRuler.infoForeground": "#1abc9c",
    "editorOverviewRuler.bracketMatchForeground": "#1b1e2e",
    "editorOverviewRuler.findMatchForeground": "#a9b1d644",
    "editorOverviewRuler.rangeHighlightForeground": "#a9b1d644",
    "editorOverviewRuler.selectionHighlightForeground": "#a9b1d622",
    "editorOverviewRuler.wordHighlightForeground": "#bb9af755",
    "editorOverviewRuler.wordHighlightStrongForeground": "#bb9af766",
    "editorOverviewRuler.modifiedForeground": "#3d547a",
    "editorOverviewRuler.addedForeground": "#164846",
    "editorOverviewRuler.deletedForeground": "#703438",
    "editorRuler.foreground": "#1b1e2e",
    "editorError.foreground": "#db4b4b",
    "editorWarning.foreground": "#e0af68",
    "editorInfo.foreground": "#0da0ba",
    "editorHint.foreground": "#0da0ba",
    "editorGutter.modifiedBackground": "#3d547a",
    "editorGutter.addedBackground": "#164846",
    "editorGutter.deletedBackground": "#823c41",
    "editorGhostText.foreground": "#7582ba",
    "minimapGutter.modifiedBackground": "#3d547a",
    "minimapGutter.addedBackground": "#1C5957",
    "minimapGutter.deletedBackground": "#944449",
    "editorGroup.border": "#1b1e2e",
    "editorGroup.dropBackground": "#292e42",
    "editorGroupHeader.tabsBorder": "#1b1e2e",
    "editorGroupHeader.tabsBackground": "#1f2335",
    "editorGroupHeader.noTabsBackground": "#1f2335",
    "editorGroupHeader.border": "#1b1e2e",
    "editorPane.background": "#1f2335",
    "editorWidget.foreground": "#7982a9",
    "editorWidget.background": "#1f2335",
    "editorWidget.resizeBorder": "#545c7e33",
    "editorSuggestWidget.background": "#1f2335",
    "editorSuggestWidget.border": "#1b1e2e",
    "editorSuggestWidget.selectedBackground": "#282e44",
    "editorSuggestWidget.highlightForeground": "#668ac4",
    "editorCodeLens.foreground": "#565f89",
    "editorLightBulb.foreground": "#e0af68",
    "editorLightBulbAutoFix.foreground": "#e0af68",
    "peekView.border": "#1b1e2e",
    "peekViewEditor.background": "#1f2335",
    "peekViewEditor.matchHighlightBackground": "#3d59a166",
    "peekViewTitle.background": "#1b1e2e",
    "peekViewTitleLabel.foreground": "#a9b1d6",
    "peekViewTitleDescription.foreground": "#7982a9",
    "peekViewResult.background": "#1b1e2e",
    "peekViewResult.selectionForeground": "#a9b1d6",
    "peekViewResult.selectionBackground": "#3d59a133",
    "peekViewResult.lineForeground": "#a9b1d6",
    "peekViewResult.fileForeground": "#7982a9",
    "peekViewResult.matchHighlightBackground": "#3d59a166",
    "diffEditor.insertedTextBackground": "#41a6b520",
    "diffEditor.removedTextBackground": "#db4b4b22",
    "diffEditor.insertedLineBackground": "#41a6b520",
    "diffEditor.removedLineBackground": "#db4b4b22",
    "diffEditorGutter.insertedLineBackground": "#41a6b525",
    "diffEditorGutter.removedLineBackground": "#db4b4b22",
    "diffEditorOverview.insertedForeground": "#41a6b525",
    "diffEditorOverview.removedForeground": "#db4b4b22",
    "diffEditor.diagonalFill": "#2c324a",
    "breadcrumb.background": "#1f2335",
    "breadcrumbPicker.background": "#1f2335",
    "breadcrumb.foreground": "#545c7e",
    "breadcrumb.focusForeground": "#a9b1d6",
    "breadcrumb.activeSelectionForeground": "#a9b1d6",
    "tab.activeBackground": "#1f2335",
    "tab.inactiveBackground": "#1f2335",
    "tab.activeForeground": "#a9b1d6",
    "tab.hoverForeground": "#a9b1d6",
    "tab.activeBorder": "#3d59a1",
    "tab.inactiveForeground": "#7982a9",
    "tab.border": "#1b1e2e",
    "tab.unfocusedActiveForeground": "#a9b1d6",
    "tab.unfocusedInactiveForeground": "#7982a9",
    "tab.unfocusedHoverForeground": "#a9b1d6",
    "tab.activeModifiedBorder": "#282d42",
    "tab.inactiveModifiedBorder": "#282d42",
    "tab.unfocusedActiveBorder": "#3b4261",
    "tab.lastPinnedBorder": "#2c3147",
    "panel.background": "#1f2335",
    "panel.border": "#1b1e2e",
    "panelTitle.activeForeground": "#a9b1d6",
    "panelTitle.inactiveForeground": "#7982a9",
    "panelTitle.activeBorder": "#3d59a1",
    "panelInput.border": "#1f2335",
    "statusBar.foreground": "#7982a9",
    "statusBar.background": "#1f2335",
    "statusBar.border": "#1b1e2e",
    "statusBar.noFolderBackground": "#1f2335",
    "statusBar.debuggingBackground": "#1f2335",
    "statusBar.debuggingForeground": "#7982a9",
    "statusBarItem.activeBackground": "#1b1e2e",
    "statusBarItem.hoverBackground": "#282e44",
    "statusBarItem.prominentBackground": "#1b1e2e",
    "statusBarItem.prominentHoverBackground": "#282e44",
    "titleBar.activeForeground": "#7982a9",
    "titleBar.inactiveForeground": "#7982a9",
    "titleBar.activeBackground": "#1f2335",
    "titleBar.inactiveBackground": "#1f2335",
    "titleBar.border": "#1b1e2e",
    "walkThrough.embeddedEditorBackground": "#1f2335",
    "textLink.foreground": "#668ac4",
    "textLink.activeForeground": "#7dcfff",
    "textPreformat.foreground": "#73daca",
    "textBlockQuote.background": "#1f2335",
    "textCodeBlock.background": "#1f2335",
    "textSeparator.foreground": "#545c7e",
    "debugExceptionWidget.border": "#963c47",
    "debugExceptionWidget.background": "#1b1e2e",
    "debugToolBar.background": "#1b1e2e",
    "debugConsole.infoForeground": "#7982a9",
    "debugConsole.errorForeground": "#bb616b",
    "debugConsole.sourceForeground": "#7982a9",
    "debugConsole.warningForeground": "#c49a5a",
    "debugConsoleInputIcon.foreground": "#73daca",
    "editor.stackFrameHighlightBackground": "#e2bd3a20",
    "editor.focusedStackFrameHighlightBackground": "#73daca20",
    "debugView.stateLabelForeground": "#7982a9",
    "debugView.stateLabelBackground": "#1b1e2e",
    "debugView.valueChangedHighlight": "#3d59a1cc",
    "debugTokenExpression.name": "#7dcfff",
    "debugTokenExpression.value": "#9aa5ce",
    "debugTokenExpression.string": "#9ece6a",
    "debugTokenExpression.boolean": "#ff9e64",
    "debugTokenExpression.number": "#ff9e64",
    "debugTokenExpression.error": "#bb616b",
    "debugIcon.breakpointForeground": "#db4b4b",
    "debugIcon.breakpointDisabledForeground": "#545c7e",
    "debugIcon.breakpointUnverifiedForeground": "#c24242",
    "terminal.background": "#1f2335",
    "terminal.foreground": "#7982a9",
    "terminal.selectionBackground": "#6f7bb640",
    "terminal.ansiBlack": "#414868",
    "terminal.ansiRed": "#f7768e",
    "terminal.ansiGreen": "#73daca",
    "terminal.ansiYellow": "#e0af68",
    "terminal.ansiBlue": "#7aa2f7",
    "terminal.ansiMagenta": "#bb9af7",
    "terminal.ansiCyan": "#7dcfff",
    "terminal.ansiWhite": "#7982a9",
    "terminal.ansiBrightBlack": "#414868",
    "terminal.ansiBrightRed": "#f7768e",
    "terminal.ansiBrightGreen": "#73daca",
    "terminal.ansiBrightYellow": "#e0af68",
    "terminal.ansiBrightBlue": "#7aa2f7",
    "terminal.ansiBrightMagenta": "#bb9af7",
    "terminal.ansiBrightCyan": "#7dcfff",
    "terminal.ansiBrightWhite": "#a9b1d6",
    "gitDecoration.modifiedResourceForeground": "#6183bb",
    "gitDecoration.ignoredResourceForeground": "#545c7e",
    "gitDecoration.deletedResourceForeground": "#914c54",
    "gitDecoration.renamedResourceForeground": "#449dab",
    "gitDecoration.addedResourceForeground": "#449dab",
    "gitDecoration.untrackedResourceForeground": "#449dab",
    "gitDecoration.conflictingResourceForeground": "#e0af68cc",
    "gitDecoration.stageDeletedResourceForeground": "#914c54",
    "gitDecoration.stageModifiedResourceForeground": "#6183bb",
    "notebook.editorBackground": "#24283b",
    "notebook.cellEditorBackground": "#1f2335",
    "notebook.cellBorderColor": "#1b1e2e",
    "notebook.focusedCellBorder": "#29355a",
    "notebook.cellStatusBarItemHoverBackground": "#2c324a",
    "charts.red": "#f7768e",
    "charts.blue": "#7aa2f7",
    "charts.yellow": "#e0af68",
    "charts.orange": "#ff9e64",
    "charts.green": "#73daca",
    "charts.purple": "#9d7cd8",
    "charts.foreground": "#9AA5CE",
    "charts.lines": "#1f2335",
    "merge.currentHeaderBackground": "#41a6b525",
    "merge.currentContentBackground": "#007a7544",
    "merge.incomingHeaderBackground": "#3d59a1aa",
    "merge.incomingContentBackground": "#3d59a144",
    "mergeEditor.change.background": "#41a6b525",
    "mergeEditor.change.word.background": "#41a6b540",
    "mergeEditor.conflict.unhandledUnfocused.border": "#e0af6888",
    "mergeEditor.conflict.unhandledFocused.border": "#e0af68d9",
    "mergeEditor.conflict.handledUnfocused.border": "#41a6b525",
    "mergeEditor.conflict.handledFocused.border": "#41a6b565",
    "mergeEditor.conflict.handled.minimapOverViewRuler": "#449dab",
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#e0af68",
    "gitlens.trailingLineForegroundColor": "#7582ba",
    "gitlens.gutterUncommittedForegroundColor": "#7aa2f7",
    "gitlens.gutterForegroundColor": "#7982a9",
    "gitlens.gutterBackgroundColor": "#1f2335",
    "notificationCenterHeader.background": "#1b1e2e",
    "notifications.background": "#1b1e2e",
    "notificationLink.foreground": "#6183bb",
    "notificationsErrorIcon.foreground": "#bb616b",
    "notificationsWarningIcon.foreground": "#bba461",
    "notificationsInfoIcon.foreground": "#0da0ba",
    "menubar.selectionForeground": "#c0caf5",
    "menubar.selectionBackground": "#2f3549",
    "menubar.selectionBorder": "#1b1e2e",
    "menu.foreground": "#7982a9",
    "menu.background": "#1f2335",
    "menu.selectionForeground": "#c0caf5",
    "menu.selectionBackground": "#2f3549",
    "menu.separatorBackground": "#1b1e2e",
    "menu.border": "#1b1e2e",
  },
  rules: [
    {
      fontStyle: "italic",
      token: "comment",
    },
    {
      fontStyle: "italic",
      token: "meta.var.expr storage.type",
    },
    {
      fontStyle: "italic",
      token: "keyword.control.flow",
    },
    {
      fontStyle: "italic",
      token: "keyword.control.return",
    },
    {
      fontStyle: "italic",
      token: "meta.directive.vue punctuation.separator.key-value.html",
    },
    {
      fontStyle: "italic",
      token: "meta.directive.vue entity.other.attribute-name.html",
    },
    {
      fontStyle: "italic",
      token: "tag.decorator.js entity.name.tag.js",
    },
    {
      fontStyle: "italic",
      token: "tag.decorator.js punctuation.definition.tag.js",
    },
    {
      fontStyle: "italic",
      token: "storage.modifier",
    },
    {
      fontStyle: "",
      token: "keyword.control.flow.block-scalar.literal",
    },
    {
      foreground: "#565f89",
      token: "comment",
    },
    {
      foreground: "#565f89",
      token: "comment.block.documentation",
    },
    {
      foreground: "#565f89",
      token: "punctuation.definition.comment",
    },
    {
      foreground: "#565f89",
      token: "comment.block.documentation punctuation",
    },
    {
      foreground: "#6a75a8",
      token: "keyword.operator.assignment.jsdoc",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation variable",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation storage",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation keyword",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation support",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation markup",
    },
    {
      foreground: "#6a75a8",
      token: "comment.block.documentation markup.inline.raw.string.markdown",
    },
    {
      foreground: "#6a75a8",
      token: "meta.other.type.phpdoc.php keyword.other.type.php",
    },
    {
      foreground: "#6a75a8",
      token: "meta.other.type.phpdoc.php support.other.namespace.php",
    },
    {
      foreground: "#6a75a8",
      token: "meta.other.type.phpdoc.php punctuation.separator.inheritance.php",
    },
    {
      foreground: "#6a75a8",
      token: "meta.other.type.phpdoc.php support.class",
    },
    {
      foreground: "#6a75a8",
      token: "keyword.other.phpdoc.php",
    },
    {
      foreground: "#6a75a8",
      token: "log.date",
    },
    {
      foreground: "#7582ba",
      token: "meta.other.type.phpdoc.php support.class",
    },
    {
      foreground: "#7582ba",
      token: "comment.block.documentation storage.type",
    },
    {
      foreground: "#7582ba",
      token: "comment.block.documentation punctuation.definition.block.tag",
    },
    {
      foreground: "#7582ba",
      token: "comment.block.documentation entity.name.type.instance",
    },
    {
      foreground: "#ff9e64",
      token: "variable.other.constant",
    },
    {
      foreground: "#ff9e64",
      token: "punctuation.definition.constant",
    },
    {
      foreground: "#ff9e64",
      token: "constant.language",
    },
    {
      foreground: "#ff9e64",
      token: "constant.numeric",
    },
    {
      foreground: "#ff9e64",
      token: "support.constant",
    },
    {
      fontStyle: "",
      foreground: "#9ece6a",
      token: "string",
    },
    {
      fontStyle: "",
      foreground: "#9ece6a",
      token: "constant.other.symbol",
    },
    {
      fontStyle: "",
      foreground: "#9ece6a",
      token: "constant.other.key",
    },
    {
      fontStyle: "",
      foreground: "#9ece6a",
      token: "meta.attribute-selector",
    },
    {
      foreground: "#9aa5ce",
      token: "constant.other.color",
    },
    {
      foreground: "#9aa5ce",
      token:
        "constant.other.color.rgb-value.hex punctuation.definition.constant",
    },
    {
      foreground: "#ff5370",
      token: "invalid",
    },
    {
      foreground: "#ff5370",
      token: "invalid.illegal",
    },
    {
      foreground: "#bb9af7",
      token: "invalid.deprecated",
    },
    {
      foreground: "#bb9af7",
      token: "storage.type",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.var.expr storage.type",
    },
    {
      foreground: "#9d7cd8",
      token: "storage.modifier",
    },
    {
      foreground: "#7dcfff",
      token: "punctuation.definition.template-expression",
    },
    {
      foreground: "#7dcfff",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#7dcfff",
      token: "meta.embedded.line.tag.smarty",
    },
    {
      foreground: "#7dcfff",
      token: "support.constant.handlebars",
    },
    {
      foreground: "#7dcfff",
      token: "punctuation.section.tag.twig",
    },
    {
      foreground: "#2ac3de",
      token: "keyword.control.smarty",
    },
    {
      foreground: "#2ac3de",
      token: "keyword.control.twig",
    },
    {
      foreground: "#2ac3de",
      token: "support.constant.handlebars keyword.control",
    },
    {
      foreground: "#2ac3de",
      token: "keyword.operator.comparison.twig",
    },
    {
      foreground: "#2ac3de",
      token: "keyword.blade",
    },
    {
      foreground: "#2ac3de",
      token: "entity.name.function.blade",
    },
    {
      foreground: "#f7768e",
      fontStyle: "bold",
      token: "keyword.operator.spread",
    },
    {
      foreground: "#f7768e",
      fontStyle: "bold",
      token: "keyword.operator.rest",
    },
    {
      foreground: "#89ddff",
      token: "keyword.operator",
    },
    {
      foreground: "#89ddff",
      token: "keyword.control.as",
    },
    {
      foreground: "#89ddff",
      token: "keyword.other",
    },
    {
      foreground: "#89ddff",
      token: "keyword.operator.bitwise.shift",
    },
    {
      foreground: "#89ddff",
      token: "punctuation",
    },
    {
      foreground: "#89ddff",
      token: "expression.embbeded.vue punctuation.definition.tag",
    },
    {
      foreground: "#89ddff",
      token: "text.html.twig meta.tag.inline.any.html",
    },
    {
      foreground: "#89ddff",
      token: "meta.tag.template.value.twig meta.function.arguments.twig",
    },
    {
      foreground: "#89ddff",
      token: "meta.directive.vue punctuation.separator.key-value.html",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.definition.constant.markdown",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.definition.string",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.support.type.property-name",
    },
    {
      foreground: "#89ddff",
      token: "text.html.vue-html meta.tag",
    },
    {
      foreground: "#89ddff",
      token: "meta.attribute.directive",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.definition.keyword",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.terminator.rule",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.definition.entity",
    },
    {
      foreground: "#89ddff",
      token: "punctuation.separator.inheritance.php",
    },
    {
      foreground: "#89ddff",
      token: "keyword.other.template",
    },
    {
      foreground: "#89ddff",
      token: "keyword.other.substitution",
    },
    {
      foreground: "#89ddff",
      token: "entity.name.operator",
    },
    {
      foreground: "#89ddff",
      token: "meta.property-list punctuation.separator.key-value",
    },
    {
      foreground: "#89ddff",
      token: "meta.at-rule.mixin punctuation.separator.key-value",
    },
    {
      foreground: "#89ddff",
      token: "meta.at-rule.function variable.parameter.url",
    },
    {
      foreground: "#7dcfff",
      token: "keyword.control.import",
    },
    {
      foreground: "#7dcfff",
      token: "keyword.control.export",
    },
    {
      foreground: "#7dcfff",
      token: "keyword.control.from",
    },
    {
      foreground: "#7dcfff",
      token: "keyword.control.default",
    },
    {
      foreground: "#7dcfff",
      token: "meta.import keyword.other",
    },
    {
      foreground: "#bb9af7",
      token: "keyword",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.control",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.other.important",
    },
    {
      foreground: "#7dcfff",
      token: "keyword.other.DML",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.logical",
    },
    {
      foreground: "#bb9af7",
      token: "storage.type.function",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.bitwise",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.ternary",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.comparison",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.relational",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.operator.or.regexp",
    },
    {
      foreground: "#f7768e",
      token: "entity.name.tag",
    },
    {
      foreground: "#de5971",
      token: "entity.name.tag support.class.component",
    },
    {
      foreground: "#de5971",
      token: "meta.tag.custom entity.name.tag",
    },
    {
      foreground: "#de5971",
      token: "meta.tag",
    },
    {
      foreground: "#ba3c97",
      token: "punctuation.definition.tag",
    },
    {
      foreground: "#e0af68",
      token: "constant.other.php",
    },
    {
      foreground: "#e0af68",
      token: "variable.other.global.safer",
    },
    {
      foreground: "#e0af68",
      token: "variable.other.global.safer punctuation.definition.variable",
    },
    {
      foreground: "#e0af68",
      token: "variable.other.global",
    },
    {
      foreground: "#e0af68",
      token: "variable.other.global punctuation.definition.variable",
    },
    {
      foreground: "#e0af68",
      token: "constant.other.haskell",
    },
    {
      foreground: "#c0caf5",
      token: "variable",
    },
    {
      foreground: "#c0caf5",
      token: "support.variable",
    },
    {
      foreground: "#c0caf5",
      token: "string constant.other.placeholder",
    },
    {
      foreground: "#c0caf5",
      token: "variable.parameter.handlebars",
    },
    {
      foreground: "#c0caf5",
      token: "variable.other.object",
    },
    {
      foreground: "#7dcfff",
      token: "meta.array.literal variable",
    },
    {
      foreground: "#73daca",
      token: "meta.object-literal.key",
    },
    {
      foreground: "#73daca",
      token: "entity.name.type.hcl",
    },
    {
      foreground: "#73daca",
      token: "string.alias.graphql",
    },
    {
      foreground: "#73daca",
      token: "string.unquoted.graphql",
    },
    {
      foreground: "#73daca",
      token: "string.unquoted.alias.graphql",
    },
    {
      foreground: "#73daca",
      token:
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
    },
    {
      foreground: "#73daca",
      token: "meta.field.declaration.ts variable.object.property",
    },
    {
      foreground: "#73daca",
      token: "meta.block entity.name.label",
    },
    {
      foreground: "#7dcfff",
      token: "variable.other.property",
    },
    {
      foreground: "#7dcfff",
      token: "support.variable.property",
    },
    {
      foreground: "#7dcfff",
      token: "support.variable.property.dom",
    },
    {
      foreground: "#7dcfff",
      token: "meta.function-call variable.other.object.property",
    },
    {
      foreground: "#7dcfff",
      token: "variable.other.object.property.cs",
    },
    {
      foreground: "#c0caf5",
      token: "variable.other.object.property",
    },
    {
      foreground: "#41a6b5",
      token:
        "meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key",
    },
    {
      foreground: "#f7768e",
      token: "source.cpp meta.block variable.other",
    },
    {
      foreground: "#f7768e",
      token: "support.other.variable",
    },
    {
      foreground: "#7aa2f7",
      token: "meta.class-method.js entity.name.function.js",
    },
    {
      foreground: "#7aa2f7",
      token: "entity.name.method.js",
    },
    {
      foreground: "#7aa2f7",
      token: "variable.function.constructor",
    },
    {
      foreground: "#7aa2f7",
      token: "keyword.other.special-method",
    },
    {
      foreground: "#7aa2f7",
      token: "storage.type.cs",
    },
    {
      foreground: "#7aa2f7",
      token: "entity.name.function",
    },
    {
      foreground: "#7aa2f7",
      token: "variable.other.enummember",
    },
    {
      foreground: "#7aa2f7",
      token: "meta.function-call",
    },
    {
      foreground: "#7aa2f7",
      token: "meta.function-call entity.name.function",
    },
    {
      foreground: "#7aa2f7",
      token: "variable.function",
    },
    {
      foreground: "#7aa2f7",
      token: "meta.definition.method entity.name.function",
    },
    {
      foreground: "#7aa2f7",
      token: "meta.object-literal entity.name.function",
    },
    {
      foreground: "#e0af68",
      token: "variable.parameter.function.language.special",
    },
    {
      foreground: "#e0af68",
      token: "variable.parameter",
    },
    {
      foreground: "#e0af68",
      token: "meta.function.parameters punctuation.definition.variable",
    },
    {
      foreground: "#e0af68",
      token: "meta.function.parameter variable",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.other.type.php",
    },
    {
      foreground: "#bb9af7",
      token: "storage.type.php",
    },
    {
      foreground: "#bb9af7",
      token: "constant.character",
    },
    {
      foreground: "#bb9af7",
      token: "constant.escape",
    },
    {
      foreground: "#bb9af7",
      token: "keyword.other.unit",
    },
    {
      foreground: "#bb9af7",
      token: "meta.definition.variable variable.other.constant",
    },
    {
      foreground: "#bb9af7",
      token: "meta.definition.variable variable.other.readwrite",
    },
    {
      foreground: "#bb9af7",
      token: "variable.declaration.hcl variable.other.readwrite.hcl",
    },
    {
      foreground: "#bb9af7",
      token: "meta.mapping.key.hcl variable.other.readwrite.hcl",
    },
    {
      foreground: "#bb9af7",
      token: "variable.other.declaration",
    },
    {
      fontStyle: "",
      foreground: "#bb9af7",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "#2ac3de",
      token: "support.class",
    },
    {
      foreground: "#2ac3de",
      token: "support.type",
    },
    {
      foreground: "#2ac3de",
      token: "variable.other.readwrite.alias",
    },
    {
      foreground: "#2ac3de",
      token: "support.orther.namespace.use.php",
    },
    {
      foreground: "#2ac3de",
      token: "meta.use.php",
    },
    {
      foreground: "#2ac3de",
      token: "support.other.namespace.php",
    },
    {
      foreground: "#2ac3de",
      token: "support.type.sys-types",
    },
    {
      foreground: "#2ac3de",
      token: "support.variable.dom",
    },
    {
      foreground: "#2ac3de",
      token: "support.constant.math",
    },
    {
      foreground: "#2ac3de",
      token: "support.type.object.module",
    },
    {
      foreground: "#2ac3de",
      token: "support.constant.json",
    },
    {
      foreground: "#2ac3de",
      token: "entity.name.namespace",
    },
    {
      foreground: "#2ac3de",
      token: "meta.import.qualifier",
    },
    {
      foreground: "#2ac3de",
      token: "variable.other.constant.object",
    },
    {
      foreground: "#c0caf5",
      token: "entity.name",
    },
    {
      foreground: "#2ac3de",
      token: "support.function",
    },
    {
      foreground: "#7aa2f7",
      token: "source.css support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "source.sass support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "source.scss support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "source.less support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "source.stylus support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "source.postcss support.type.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "support.type.property-name.css",
    },
    {
      foreground: "#7aa2f7",
      token: "support.type.vendored.property-name",
    },
    {
      foreground: "#7aa2f7",
      token: "support.type.map.key",
    },
    {
      foreground: "#9ece6a",
      token: "support.constant.font-name",
    },
    {
      foreground: "#9ece6a",
      token: "meta.definition.variable",
    },
    {
      foreground: "#9ece6a",
      token: "entity.other.attribute-name.class",
    },
    {
      foreground: "#9ece6a",
      token: "meta.at-rule.mixin.scss entity.name.function.scss",
    },
    {
      foreground: "#fc7b7b",
      token: "entity.other.attribute-name.id",
    },
    {
      foreground: "#2ac3de",
      token: "entity.name.tag.css",
    },
    {
      foreground: "#e0af68",
      token:
        "entity.other.attribute-name.pseudo-class punctuation.definition.entity",
    },
    {
      foreground: "#e0af68",
      token:
        "entity.other.attribute-name.pseudo-element punctuation.definition.entity",
    },
    {
      foreground: "#e0af68",
      token: "entity.other.attribute-name.class punctuation.definition.entity",
    },
    {
      foreground: "#e0af68",
      token: "entity.name.tag.reference",
    },
    {
      foreground: "#9abdf5",
      token: "meta.property-list",
    },
    {
      foreground: "#ff9e64",
      token: "meta.property-list meta.at-rule.if",
    },
    {
      foreground: "#ff9e64",
      token: "meta.at-rule.return variable.parameter.url",
    },
    {
      foreground: "#ff9e64",
      token: "meta.property-list meta.at-rule.else",
    },
    {
      foreground: "#73daca",
      token:
        "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css",
    },
    {
      foreground: "#9abdf5",
      token: "meta.property-list meta.property-list",
    },
    {
      foreground: "#bb9af7",
      token: "meta.at-rule.mixin keyword.control.at-rule.mixin",
    },
    {
      foreground: "#bb9af7",
      token: "meta.at-rule.include entity.name.function.scss",
    },
    {
      foreground: "#bb9af7",
      token: "meta.at-rule.include keyword.control.at-rule.include",
    },
    {
      foreground: "#9d7cd8",
      token: "keyword.control.at-rule.include punctuation.definition.keyword",
    },
    {
      foreground: "#9d7cd8",
      token: "keyword.control.at-rule.mixin punctuation.definition.keyword",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.at-rule.include keyword.control.at-rule.include",
    },
    {
      foreground: "#9d7cd8",
      token: "keyword.control.at-rule.extend punctuation.definition.keyword",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.at-rule.extend keyword.control.at-rule.extend",
    },
    {
      foreground: "#9d7cd8",
      token:
        "entity.other.attribute-name.placeholder.css punctuation.definition.entity.css",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.at-rule.media keyword.control.at-rule.media",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.at-rule.mixin keyword.control.at-rule.mixin",
    },
    {
      foreground: "#9d7cd8",
      token: "meta.at-rule.function keyword.control.at-rule.function",
    },
    {
      foreground: "#9d7cd8",
      token: "keyword.control punctuation.definition.keyword",
    },
    {
      foreground: "#c0caf5",
      token: "meta.property-list meta.at-rule.include",
    },
    {
      foreground: "#ff9e64",
      token: "support.constant.property-value",
    },
    {
      foreground: "#c0caf5",
      token: "entity.name.module.js",
    },
    {
      foreground: "#c0caf5",
      token: "variable.import.parameter.js",
    },
    {
      foreground: "#c0caf5",
      token: "variable.other.class.js",
    },
    {
      foreground: "#f7768e",
      token: "variable.language",
    },
    {
      foreground: "#c0caf5",
      token: "variable.other punctuation.definition.variable",
    },
    {
      foreground: "#f7768e",
      token: "source.js constant.other.object.key.js string.unquoted.label.js",
    },
    {
      foreground: "#f7768e",
      token: "variable.language.this punctuation.definition.variable",
    },
    {
      foreground: "#f7768e",
      token: "keyword.other.this",
    },
    {
      foreground: "#bb9af7",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "#bb9af7",
      token: "text.html.basic entity.other.attribute-name.html",
    },
    {
      foreground: "#bb9af7",
      token: "text.html.basic entity.other.attribute-name",
    },
    {
      foreground: "#2AC3DE",
      token: "text.html constant.character.entity",
    },
    {
      foreground: "#bb9af7",
      token: "entity.other.attribute-name.id.html",
    },
    {
      foreground: "#bb9af7",
      token: "meta.directive.vue entity.other.attribute-name.html",
    },
    {
      foreground: "#7aa2f7",
      token: "source.sass keyword.control",
    },
    {
      foreground: "#bb9af7",
      token: "entity.other.attribute-name.pseudo-class",
    },
    {
      foreground: "#bb9af7",
      token: "entity.other.attribute-name.pseudo-element",
    },
    {
      foreground: "#bb9af7",
      token: "entity.other.attribute-name.placeholder",
    },
    {
      foreground: "#bb9af7",
      token: "meta.property-list meta.property-value",
    },
    {
      foreground: "#449dab",
      token: "markup.inserted",
    },
    {
      foreground: "#914c54",
      token: "markup.deleted",
    },
    {
      foreground: "#6183bb",
      token: "markup.changed",
    },
    {
      foreground: "#b4f9f8",
      token: "string.regexp",
    },
    {
      foreground: "#f7768e",
      token: "punctuation.definition.group",
    },
    {
      foreground: "#bb9af7",
      token: "constant.other.character-class.regexp",
    },
    {
      foreground: "#e0af68",
      token: "constant.other.character-class.set.regexp",
    },
    {
      foreground: "#e0af68",
      token: "punctuation.definition.character-class.regexp",
    },
    {
      foreground: "#89ddff",
      token: "keyword.operator.quantifier.regexp",
    },
    {
      foreground: "#c0caf5",
      token: "constant.character.escape.backslash",
    },
    {
      foreground: "#89ddff",
      token: "constant.character.escape",
    },
    {
      foreground: "#7aa2f7",
      token: "tag.decorator.js entity.name.tag.js",
    },
    {
      foreground: "#7aa2f7",
      token: "tag.decorator.js punctuation.definition.tag.js",
    },
    {
      foreground: "#f7768e",
      token: "keyword.other.unit",
    },
    {
      foreground: "#7aa2f7",
      token:
        "source.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#2ac3de",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#7dcfff",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#bb9af7",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#e0af68",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#2ac3de",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#73daca",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#f7768e",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#9ece6a",
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.list_item.markdown",
    },
    {
      foreground: "#9abdf5",
      token: "meta.block",
    },
    {
      foreground: "#9abdf5",
      token: "meta.brace",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.block",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.use",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.class",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.begin.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.end.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.switch-expression.begin.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.switch-expression.end.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.section.switch-block.begin.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.section.switch-block.end.bracket",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.group.shell",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.parameters",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.arguments",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.dictionary",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.definition.array",
    },
    {
      foreground: "#9abdf5",
      token: "punctuation.section",
    },
    {
      foreground: "#c0caf5",
      token: "meta.jsx.children",
    },
    {
      foreground: "#c0caf5",
      token: "meta.embedded.block",
    },
    {
      foreground: "#9aa5ce",
      token: "text.html",
    },
    {
      foreground: "#bb9af7",
      token: "text.html.markdown markup.inline.raw.markdown",
    },
    {
      foreground: "#4E5579",
      token:
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#89ddff",
      token: "heading.1.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#89ddff",
      token: "heading.1.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#61bdf2",
      token: "heading.2.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#61bdf2",
      token: "heading.2.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#7aa2f7",
      token: "heading.3.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#7aa2f7",
      token: "heading.3.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#6d91de",
      token: "heading.4.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#6d91de",
      token: "heading.4.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#9aa5ce",
      token: "heading.5.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#9aa5ce",
      token: "heading.5.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#747ca1",
      token: "heading.6.markdown entity.name",
    },
    {
      fontStyle: "bold",
      foreground: "#747ca1",
      token: "heading.6.markdown punctuation.definition.heading.markdown",
    },
    {
      fontStyle: "italic",
      foreground: "#c0caf5",
      token: "markup.italic",
    },
    {
      fontStyle: "italic",
      foreground: "#c0caf5",
      token: "markup.italic punctuation",
    },
    {
      fontStyle: "bold",
      foreground: "#c0caf5",
      token: "markup.bold",
    },
    {
      fontStyle: "bold",
      foreground: "#c0caf5",
      token: "markup.bold punctuation",
    },
    {
      fontStyle: "bold italic",
      foreground: "#c0caf5",
      token: "markup.bold markup.italic",
    },
    {
      fontStyle: "bold italic",
      foreground: "#c0caf5",
      token: "markup.bold markup.italic punctuation",
    },
    {
      fontStyle: "underline",
      token: "markup.underline",
    },
    {
      fontStyle: "underline",
      token: "markup.underline punctuation",
    },
    {
      foreground: "#4E5579",
      token: "markup.quote punctuation.definition.blockquote.markdown",
    },
    {
      fontStyle: "italic",
      token: "markup.quote",
    },
    {
      foreground: "#73daca",
      token: "string.other.link",
    },
    {
      foreground: "#73daca",
      token: "markup.underline.link",
    },
    {
      foreground: "#73daca",
      token: "constant.other.reference.link.markdown",
    },
    {
      foreground: "#73daca",
      token: "string.other.link.description.title.markdown",
    },
    {
      foreground: "#89ddff",
      token: "markup.fenced_code.block.markdown",
    },
    {
      foreground: "#89ddff",
      token: "markup.inline.raw.string.markdown",
    },
    {
      foreground: "#89ddff",
      token: "variable.language.fenced.markdown",
    },
    {
      fontStyle: "bold",
      foreground: "#565f89",
      token: "meta.separator",
    },
    {
      foreground: "#c0cefc",
      token: "markup.table",
    },
    {
      foreground: "#0db9d7",
      token: "token.info-token",
    },
    {
      foreground: "#ffdb69",
      token: "token.warn-token",
    },
    {
      foreground: "#db4b4b",
      token: "token.error-token",
    },
    {
      foreground: "#b267e6",
      token: "token.debug-token",
    },
    {
      foreground: "#f7768e",
      token: "entity.tag.apacheconf",
    },
    {
      foreground: "#73daca",
      token: "meta.preprocessor",
    },
    {
      foreground: "#7aa2f7",
      token: "source.env",
    },
  ],
  encodedTokensColors: [],
};

export const catppuccinTheme: IStandaloneThemeData = {
  inherit: true,
  base: "vs-dark",
  colors: {
    focusBorder: "#00000000",
    foreground: "#cad3f5",
    disabledForeground: "#a5adcb",
    "widget.shadow": "#1e20307f",
    "selection.background": "#5b6078",
    descriptionForeground: "#cad3f5",
    errorForeground: "#ed8796",
    "icon.foreground": "#c6a0f6",
    "sash.hoverBorder": "#c6a0f6",
    "window.activeBorder": "#00000000",
    "window.inactiveBorder": "#00000000",
    "textBlockQuote.background": "#1e2030",
    "textBlockQuote.border": "#181926",
    "textCodeBlock.background": "#24273a",
    "textLink.activeForeground": "#91d7e3",
    "textLink.foreground": "#8aadf4",
    "textPreformat.foreground": "#cad3f5",
    "textSeparator.foreground": "#c6a0f6",
    "activityBar.background": "#181926",
    "activityBar.foreground": "#c6a0f6",
    "activityBar.dropBar": "#5b607899",
    "activityBar.inactiveForeground": "#6e738d",
    "activityBar.border": "#00000000",
    "activityBarBadge.background": "#c6a0f6",
    "activityBarBadge.foreground": "#181926",
    "activityBar.activeBorder": "#00000000",
    "activityBar.activeBackground": "#00000000",
    "activityBar.activeFocusBorder": "#00000000",
    "badge.background": "#494d64",
    "badge.foreground": "#cad3f5",
    "breadcrumb.activeSelectionForeground": "#c6a0f6",
    "breadcrumb.background": "#1e2030",
    "breadcrumb.focusForeground": "#c6a0f6",
    "breadcrumb.foreground": "#cad3f5cc",
    "breadcrumbPicker.background": "#1e2030",
    "button.background": "#c6a0f6",
    "button.foreground": "#181926",
    "button.border": "#00000000",
    "button.separator": "#00000000",
    "button.hoverBackground": "#dab4ff",
    "button.secondaryForeground": "#cad3f5",
    "button.secondaryBackground": "#5b6078",
    "button.secondaryHoverBackground": "#6f748c",
    "checkbox.background": "#494d64",
    "checkbox.border": "#00000000",
    "checkbox.foreground": "#c6a0f6",
    "dropdown.background": "#1e2030",
    "dropdown.listBackground": "#5b6078",
    "dropdown.border": "#c6a0f6",
    "dropdown.foreground": "#cad3f5",
    "debugToolBar.background": "#181926",
    "debugToolBar.border": "#00000000",
    "debugExceptionWidget.background": "#181926",
    "debugExceptionWidget.border": "#c6a0f6",
    "debugTokenExpression.number": "#f5a97f",
    "debugTokenExpression.boolean": "#c6a0f6",
    "debugTokenExpression.string": "#a6da95",
    "debugTokenExpression.error": "#ed8796",
    "debugIcon.breakpointForeground": "#ed8796",
    "debugIcon.breakpointDisabledForeground": "#ed879699",
    "debugIcon.breakpointUnverifiedForeground": "#24273a",
    "debugIcon.breakpointCurrentStackframeForeground": "#5b6078",
    "debugIcon.breakpointStackframeForeground": "#5b6078",
    "debugIcon.startForeground": "#a6da95",
    "debugIcon.pauseForeground": "#8aadf4",
    "debugIcon.stopForeground": "#ed8796",
    "debugIcon.disconnectForeground": "#5b6078",
    "debugIcon.restartForeground": "#8bd5ca",
    "debugIcon.stepOverForeground": "#c6a0f6",
    "debugIcon.stepIntoForeground": "#cad3f5",
    "debugIcon.stepOutForeground": "#cad3f5",
    "debugIcon.continueForeground": "#a6da95",
    "debugIcon.stepBackForeground": "#5b6078",
    "debugConsole.infoForeground": "#8aadf4",
    "debugConsole.warningForeground": "#f5a97f",
    "debugConsole.errorForeground": "#ed8796",
    "debugConsole.sourceForeground": "#f4dbd6",
    "debugConsoleInputIcon.foreground": "#cad3f5",
    "diffEditor.border": "#5b6078",
    "diffEditor.insertedTextBackground": "#a6da9519",
    "diffEditor.removedTextBackground": "#ed879619",
    "diffEditor.insertedLineBackground": "#a6da9526",
    "diffEditor.removedLineBackground": "#ed879626",
    "diffEditor.diagonalFill": "#5b607899",
    "diffEditorOverview.insertedForeground": "#a6da95cc",
    "diffEditorOverview.removedForeground": "#ed8796cc",
    "editor.background": "#24273a",
    "editor.findMatchBackground": "#5b6078",
    "editor.findMatchBorder": "#c6a0f666",
    "editor.findMatchHighlightBackground": "#f5a97f59",
    "editor.findMatchHighlightBorder": "#00000000",
    "editor.findRangeHighlightBackground": "#5b60784c",
    "editor.findRangeHighlightBorder": "#00000000",
    "editor.foldBackground": "#91d7e33f",
    "editor.foreground": "#cad3f5",
    "editor.hoverHighlightBackground": "#91d7e33f",
    "editor.inactiveSelectionBackground": "#00000000",
    "editor.lineHighlightBackground": "#cad3f511",
    "editor.lineHighlightBorder": "#24273a",
    "editor.rangeHighlightBackground": "#91d7e33f",
    "editor.rangeHighlightBorder": "#00000000",
    "editor.selectionBackground": "#5b6078",
    "editor.selectionHighlightBackground": "#939ab766",
    "editor.selectionHighlightBorder": "#91d7e333",
    "editor.wordHighlightBackground": "#5b6078b2",
    "editor.wordHighlightStrongBackground": "#5b60787f",
    "editorBracketMatch.background": "#939ab719",
    "editorBracketMatch.border": "#939ab7",
    "editorCodeLens.foreground": "#8087a2",
    "editorCursor.background": "#24273a",
    "editorCursor.foreground": "#f4dbd6",
    "editorError.background": "#00000000",
    "editorError.border": "#00000000",
    "editorError.foreground": "#ed8796",
    "editorGroup.border": "#5b6078",
    "editorGroup.dropBackground": "#5b607899",
    "editorGroup.emptyBackground": "#24273a",
    "editorGroupHeader.tabsBackground": "#181926",
    "editorGutter.addedBackground": "#a6da95",
    "editorGutter.background": "#24273a",
    "editorGutter.commentRangeForeground": "#939ab7",
    "editorGutter.deletedBackground": "#ed8796",
    "editorGutter.foldingControlForeground": "#939ab7",
    "editorGutter.modifiedBackground": "#91d7e3",
    "editorHoverWidget.background": "#1e2030",
    "editorHoverWidget.border": "#5b6078",
    "editorHoverWidget.foreground": "#cad3f5",
    "editorIndentGuide.activeBackground": "#5b6078",
    "editorIndentGuide.background": "#494d64",
    "editorInfo.background": "#00000000",
    "editorInfo.border": "#00000000",
    "editorInfo.foreground": "#8aadf4",
    "editorInlayHint.foreground": "#5b6078",
    "editorInlayHint.background": "#1e2030bf",
    "editorInlayHint.typeForeground": "#b8c0e0",
    "editorInlayHint.typeBackground": "#1e2030bf",
    "editorInlayHint.parameterForeground": "#a5adcb",
    "editorInlayHint.parameterBackground": "#1e2030bf",
    "editorLineNumber.activeForeground": "#c6a0f6",
    "editorLineNumber.foreground": "#8087a2",
    "editorLink.activeForeground": "#c6a0f6",
    "editorMarkerNavigation.background": "#1e2030",
    "editorMarkerNavigationError.background": "#ed8796",
    "editorMarkerNavigationInfo.background": "#8aadf4",
    "editorMarkerNavigationWarning.background": "#eed49f",
    "editorOverviewRuler.background": "#1e2030",
    "editorOverviewRuler.border": "#cad3f511",
    "editorRuler.foreground": "#5b6078",
    "editor.stackFrameHighlightBackground": "#eed49f26",
    "editor.focusedStackFrameHighlightBackground": "#a6da9526",
    "editorStickyScrollHover.background": "#363a4f",
    "editorSuggestWidget.background": "#1e2030",
    "editorSuggestWidget.border": "#5b6078",
    "editorSuggestWidget.foreground": "#cad3f5",
    "editorSuggestWidget.highlightForeground": "#c6a0f6",
    "editorSuggestWidget.selectedBackground": "#363a4f",
    "editorWarning.background": "#00000000",
    "editorWarning.border": "#00000000",
    "editorWarning.foreground": "#f5a97f",
    "editorWhitespace.foreground": "#939ab766",
    "editorWidget.background": "#1e2030",
    "editorWidget.foreground": "#cad3f5",
    "editorWidget.resizeBorder": "#5b6078",
    "editorLightBulb.foreground": "#eed49f",
    "extensionButton.prominentForeground": "#181926",
    "extensionButton.prominentBackground": "#c6a0f6",
    "extensionButton.prominentHoverBackground": "#dab4ff",
    "extensionBadge.remoteBackground": "#8aadf4",
    "extensionBadge.remoteForeground": "#181926",
    "extensionIcon.starForeground": "#eed49f",
    "extensionIcon.verifiedForeground": "#a6da95",
    "extensionIcon.preReleaseForeground": "#f4dbd6",
    "extensionIcon.sponsorForeground": "#f5bde6",
    "gitDecoration.addedResourceForeground": "#a6da95",
    "gitDecoration.conflictingResourceForeground": "#c6a0f6",
    "gitDecoration.deletedResourceForeground": "#ed8796",
    "gitDecoration.ignoredResourceForeground": "#6e738d",
    "gitDecoration.modifiedResourceForeground": "#eed49f",
    "gitDecoration.stageDeletedResourceForeground": "#ed8796",
    "gitDecoration.stageModifiedResourceForeground": "#eed49f",
    "gitDecoration.submoduleResourceForeground": "#8aadf4",
    "gitDecoration.untrackedResourceForeground": "#a6da95",
    "input.background": "#363a4f",
    "input.border": "#00000000",
    "input.foreground": "#cad3f5",
    "input.placeholderForeground": "#cad3f572",
    "inputOption.activeBackground": "#8aadf426",
    "inputOption.activeBorder": "#18192633",
    "inputOption.activeForeground": "#cad3f5",
    "inputValidation.errorBackground": "#ed8796",
    "inputValidation.errorBorder": "#18192633",
    "inputValidation.errorForeground": "#181926",
    "inputValidation.infoBackground": "#8aadf4",
    "inputValidation.infoBorder": "#18192633",
    "inputValidation.infoForeground": "#181926",
    "inputValidation.warningBackground": "#f5a97f",
    "inputValidation.warningBorder": "#18192633",
    "inputValidation.warningForeground": "#181926",
    "list.activeSelectionBackground": "#494d64",
    "list.activeSelectionForeground": "#cad3f5",
    "list.dropBackground": "#5b607899",
    "list.focusBackground": "#363a4f",
    "list.focusForeground": "#cad3f5",
    "list.focusOutline": "#00000000",
    "list.highlightForeground": "#c6a0f6",
    "list.hoverBackground": "#24273a",
    "list.hoverForeground": "#cad3f5",
    "list.inactiveSelectionBackground": "#494d64",
    "list.inactiveSelectionForeground": "#cad3f5",
    "list.warningForeground": "#eed49f",
    "listFilterWidget.background": "#494d64",
    "listFilterWidget.noMatchesOutline": "#ed8796",
    "listFilterWidget.outline": "#00000000",
    "tree.indentGuidesStroke": "#6e738d",
    "menu.background": "#24273a",
    "menu.border": "#24273a7f",
    "menu.foreground": "#cad3f5",
    "menu.selectionBackground": "#5b6078",
    "menu.selectionBorder": "#00000000",
    "menu.selectionForeground": "#cad3f5",
    "menu.separatorBackground": "#5b6078",
    "menubar.selectionBackground": "#494d64",
    "menubar.selectionForeground": "#cad3f5",
    "merge.commonContentBackground": "#494d64",
    "merge.commonHeaderBackground": "#5b6078",
    "merge.currentContentBackground": "#a6da9533",
    "merge.currentHeaderBackground": "#a6da9566",
    "merge.incomingContentBackground": "#8aadf433",
    "merge.incomingHeaderBackground": "#8aadf466",
    "minimap.background": "#1e20307f",
    "minimap.errorHighlight": "#ed8796",
    "minimap.findMatchHighlight": "#5b6078",
    "minimap.selectionHighlight": "#5b6078",
    "minimap.warningHighlight": "#eed49f",
    "minimapGutter.addedBackground": "#a6da95",
    "minimapGutter.deletedBackground": "#ed8796",
    "minimapGutter.modifiedBackground": "#91d7e3",
    "notificationCenter.border": "#c6a0f6",
    "notificationCenterHeader.foreground": "#cad3f5",
    "notificationCenterHeader.background": "#1e2030",
    "notificationToast.border": "#c6a0f6",
    "notifications.foreground": "#cad3f5",
    "notifications.background": "#1e2030",
    "notifications.border": "#c6a0f6",
    "notificationLink.foreground": "#8aadf4",
    "notificationsErrorIcon.foreground": "#ed8796",
    "notificationsWarningIcon.foreground": "#f5a97f",
    "notificationsInfoIcon.foreground": "#8aadf4",
    "panel.background": "#24273a",
    "panel.border": "#5b6078",
    "panelSection.border": "#5b6078",
    "panelSection.dropBackground": "#5b607899",
    "panelTitle.activeBorder": "#cad3f5",
    "panelTitle.activeForeground": "#cad3f5",
    "panelTitle.inactiveForeground": "#a5adcb",
    "peekView.border": "#c6a0f6",
    "peekViewEditor.background": "#1e2030",
    "peekViewEditor.matchHighlightBackground": "#f5a97f3f",
    "peekViewEditor.matchHighlightBorder": "#f5a97f",
    "peekViewEditorGutter.background": "#1e2030",
    "peekViewResult.background": "#1e2030",
    "peekViewResult.fileForeground": "#cad3f5",
    "peekViewResult.lineForeground": "#cad3f5",
    "peekViewResult.matchHighlightBackground": "#f5a97f3f",
    "peekViewResult.selectionBackground": "#363a4f",
    "peekViewResult.selectionForeground": "#cad3f5",
    "peekViewTitle.background": "#24273a",
    "peekViewTitleDescription.foreground": "#b8c0e0b2",
    "peekViewTitleLabel.foreground": "#cad3f5",
    "pickerGroup.border": "#c6a0f6",
    "pickerGroup.foreground": "#c6a0f6",
    "progressBar.background": "#c6a0f6",
    "scrollbar.shadow": "#181926",
    "scrollbarSlider.activeBackground": "#363a4f66",
    "scrollbarSlider.background": "#5b60787f",
    "scrollbarSlider.hoverBackground": "#6e738d",
    "settings.focusedRowBackground": "#5b607833",
    "settings.headerForeground": "#cad3f5",
    "settings.modifiedItemIndicator": "#c6a0f6",
    "settings.dropdownBackground": "#494d64",
    "settings.dropdownListBorder": "#00000000",
    "settings.textInputBackground": "#494d64",
    "settings.textInputBorder": "#00000000",
    "settings.numberInputBackground": "#494d64",
    "settings.numberInputBorder": "#00000000",
    "sideBar.background": "#1e2030",
    "sideBar.dropBackground": "#5b607899",
    "sideBar.foreground": "#cad3f5",
    "sideBar.border": "#00000000",
    "sideBarSectionHeader.background": "#1e2030",
    "sideBarSectionHeader.foreground": "#cad3f5",
    "sideBarTitle.foreground": "#c6a0f6",
    "sideBarTitle.background": "#181926",
    "statusBar.background": "#181926",
    "statusBar.foreground": "#cad3f5",
    "statusBar.border": "#00000000",
    "statusBar.noFolderBackground": "#181926",
    "statusBar.noFolderForeground": "#cad3f5",
    "statusBar.debuggingBackground": "#f5a97f",
    "statusBar.debuggingForeground": "#181926",
    "statusBarItem.remoteBackground": "#8aadf4",
    "statusBarItem.remoteForeground": "#181926",
    "statusBarItem.activeBackground": "#5b607866",
    "statusBarItem.hoverBackground": "#5b607833",
    "statusBarItem.prominentForeground": "#c6a0f6",
    "statusBarItem.prominentBackground": "#00000000",
    "statusBarItem.prominentHoverBackground": "#5b607833",
    "statusBarItem.errorForeground": "#ed8796",
    "statusBarItem.errorBackground": "#00000000",
    "statusBarItem.warningForeground": "#f5a97f",
    "statusBarItem.warningBackground": "#00000000",
    "commandCenter.foreground": "#b8c0e0",
    "commandCenter.activeForeground": "#c6a0f6",
    "commandCenter.background": "#181926",
    "commandCenter.activeBackground": "#5b607833",
    "commandCenter.border": "#c6a0f6",
    "tab.activeBackground": "#24273a",
    "tab.activeBorder": "#c6a0f6",
    "tab.activeBorderTop": "#00000000",
    "tab.activeForeground": "#c6a0f6",
    "tab.border": "#1e2030",
    "tab.inactiveBackground": "#1e2030",
    "tab.inactiveForeground": "#6e738d",
    "terminal.ansiBlack": "#6e738d",
    "terminal.ansiBlue": "#8aadf4",
    "terminal.ansiBrightBlack": "#8087a2",
    "terminal.ansiBrightBlue": "#8aadf4",
    "terminal.ansiBrightCyan": "#91d7e3",
    "terminal.ansiBrightGreen": "#a6da95",
    "terminal.ansiBrightMagenta": "#f5bde6",
    "terminal.ansiBrightRed": "#ed8796",
    "terminal.ansiBrightWhite": "#cad3f5",
    "terminal.ansiBrightYellow": "#eed49f",
    "terminal.ansiCyan": "#91d7e3",
    "terminal.ansiGreen": "#a6da95",
    "terminal.ansiMagenta": "#f5bde6",
    "terminal.ansiRed": "#ed8796",
    "terminal.ansiWhite": "#939ab7",
    "terminal.ansiYellow": "#eed49f",
    "terminal.border": "#5b6078",
    "terminal.foreground": "#cad3f5",
    "terminal.dropBackground": "#5b607899",
    "terminal.selectionBackground": "#5b6078",
    "terminalCursor.background": "#24273a",
    "terminalCursor.foreground": "#f4dbd6",
    "titleBar.activeBackground": "#181926",
    "titleBar.activeForeground": "#cad3f5",
    "titleBar.inactiveBackground": "#181926",
    "titleBar.inactiveForeground": "#cad3f57f",
    "titleBar.border": "#00000000",
    "welcomePage.tileBackground": "#1e2030",
    "welcomePage.progress.background": "#181926",
    "welcomePage.progress.foreground": "#c6a0f6",
    "walkThrough.embeddedEditorBackground": "#24273a4c",
    "symbolIcon.textForeground": "#cad3f5",
    "symbolIcon.arrayForeground": "#f5a97f",
    "symbolIcon.booleanForeground": "#c6a0f6",
    "symbolIcon.classForeground": "#eed49f",
    "symbolIcon.colorForeground": "#f5bde6",
    "symbolIcon.constantForeground": "#f5a97f",
    "symbolIcon.constructorForeground": "#b7bdf8",
    "symbolIcon.enumeratorForeground": "#eed49f",
    "symbolIcon.enumeratorMemberForeground": "#eed49f",
    "symbolIcon.eventForeground": "#f5bde6",
    "symbolIcon.fieldForeground": "#cad3f5",
    "symbolIcon.fileForeground": "#c6a0f6",
    "symbolIcon.folderForeground": "#c6a0f6",
    "symbolIcon.functionForeground": "#8aadf4",
    "symbolIcon.interfaceForeground": "#eed49f",
    "symbolIcon.keyForeground": "#8bd5ca",
    "symbolIcon.keywordForeground": "#c6a0f6",
    "symbolIcon.methodForeground": "#8aadf4",
    "symbolIcon.moduleForeground": "#cad3f5",
    "symbolIcon.namespaceForeground": "#eed49f",
    "symbolIcon.nullForeground": "#ee99a0",
    "symbolIcon.numberForeground": "#f5a97f",
    "symbolIcon.objectForeground": "#eed49f",
    "symbolIcon.operatorForeground": "#8bd5ca",
    "symbolIcon.packageForeground": "#f0c6c6",
    "symbolIcon.propertyForeground": "#ee99a0",
    "symbolIcon.referenceForeground": "#eed49f",
    "symbolIcon.snippetForeground": "#f0c6c6",
    "symbolIcon.stringForeground": "#a6da95",
    "symbolIcon.structForeground": "#8bd5ca",
    "symbolIcon.typeParameterForeground": "#ee99a0",
    "symbolIcon.unitForeground": "#cad3f5",
    "symbolIcon.variableForeground": "#cad3f5",
    "charts.foreground": "#cad3f5",
    "charts.lines": "#b8c0e0",
    "charts.red": "#ed8796",
    "charts.blue": "#8aadf4",
    "charts.yellow": "#eed49f",
    "charts.orange": "#f5a97f",
    "charts.green": "#a6da95",
    "charts.purple": "#c6a0f6",
    "errorLens.errorBackground": "#ed879626",
    "errorLens.errorMessageBackground": "#ed879626",
    "errorLens.errorBackgroundLight": "#ed879626",
    "errorLens.errorForeground": "#ed8796",
    "errorLens.errorForegroundLight": "#ed8796",
    "errorLens.warningBackground": "#f5a97f26",
    "errorLens.warningMessageBackground": "#f5a97f26",
    "errorLens.warningBackgroundLight": "#f5a97f26",
    "errorLens.warningForeground": "#f5a97f",
    "errorLens.warningForegroundLight": "#f5a97f",
    "errorLens.infoBackground": "#8aadf426",
    "errorLens.infoMessageBackground": "#8aadf426",
    "errorLens.infoBackgroundLight": "#8aadf426",
    "errorLens.infoForeground": "#8aadf4",
    "errorLens.infoForegroundLight": "#8aadf4",
    "errorLens.hintBackground": "#a6da9526",
    "errorLens.hintMessageBackground": "#a6da9526",
    "errorLens.hintBackgroundLight": "#a6da9526",
    "errorLens.hintForeground": "#a6da95",
    "errorLens.hintForegroundLight": "#a6da95",
    "errorLens.statusBarIconErrorForeground": "#ed8796",
    "errorLens.statusBarIconWarningForeground": "#f5a97f",
    "errorLens.statusBarErrorForeground": "#ed8796",
    "errorLens.statusBarWarningForeground": "#f5a97f",
    "errorLens.statusBarInfoForeground": "#8aadf4",
    "errorLens.statusBarHintForeground": "#a6da95",
    "editorBracketHighlight.foreground1": "#ed8796",
    "editorBracketHighlight.foreground2": "#f5a97f",
    "editorBracketHighlight.foreground3": "#eed49f",
    "editorBracketHighlight.foreground4": "#a6da95",
    "editorBracketHighlight.foreground5": "#7dc4e4",
    "editorBracketHighlight.foreground6": "#c6a0f6",
    "editorBracketHighlight.unexpectedBracket.foreground": "#ee99a0",
  },
  rules: [
    {
      foreground: "#f0c6c6",
      token: "variable.language",
    },
    {
      foreground: "#f0c6c6",
      token: "variable.other",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "entity.name.function",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "support.function",
    },
    {
      foreground: "#f5bde6",
      fontStyle: "italic",
      token: "variable.parameter.function",
    },
    {
      foreground: "#f5bde6",
      fontStyle: "italic",
      token: "variable.parameter.function-call",
    },
    {
      foreground: "#f5a97f",
      fontStyle: "bold",
      token: "constant.numeric.decimal",
    },
    {
      foreground: "#f5a97f",
      fontStyle: "bold",
      token: "constant.numeric.integer",
    },
    {
      foreground: "#8aadf4",
      token: "entity.name.type",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.for",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.while",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.if",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.else",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.switch",
    },
    {
      foreground: "#ed8796",
      fontStyle: "bold",
      token: "keyword.control.case",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.brackets",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.section",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.semi",
    },
    {
      foreground: "#f4dbd6",
      token: "entity.name.namespace",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.comparison",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.assignment",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.arrow.skinny",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.math",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.key-value",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.misc",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.namespace",
    },
    {
      foreground: "#b7bdf8",
      fontStyle: "italic",
      token: "constant.language",
    },
    {
      foreground: "#f5a97f",
      token: "constant.other",
    },
    {
      foreground: "#8bd5ca",
      token: "source.json meta.structure.dictionary.json > string.quoted.json",
    },
    {
      foreground: "#8bd5ca",
      token:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    },
    {
      foreground: "#a6da95",
      token:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
    },
    {
      foreground: "#a6da95",
      token:
        "source.json meta.structure.array.json > value.json > string.quoted.json",
    },
    {
      foreground: "#a6da95",
      token:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
    },
    {
      foreground: "#a6da95",
      token:
        "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    },
    {
      foreground: "#8aadf4",
      token: "support.type.property-name.json.comments",
    },
    {
      foreground: "#f5a97f",
      token: "constant.language.json.comments",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.separator.dictionary.pair.json.comments",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.separator.array.json.comments",
    },
    {
      foreground: "#939ab7",
      token: "punctuation.definition.dictionary.begin.json.comments",
    },
    {
      foreground: "#939ab7",
      token: "punctuation.definition.dictionary.end.json.comments",
    },
    {
      foreground: "#939ab7",
      token: "punctuation.definition.array.begin.json.comments",
    },
    {
      foreground: "#939ab7",
      token: "punctuation.definition.array.end.json.comments",
    },
    {
      foreground: "#91d7e3",
      token:
        "source.json meta.structure.dictionary.json > constant.language.json",
    },
    {
      foreground: "#91d7e3",
      token: "source.json meta.structure.array.json > constant.language.json",
    },
    {
      foreground: "#8bd5ca",
      token: "support.type.property-name.json",
    },
    {
      foreground: "#8bd5ca",
      token: "support.type.property-name.json punctuation",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.delayed.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.list.begin.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.list.end.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.ability.begin.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.ability.end.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.operator.assignment.as.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.separator.pipe.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.separator.delimiter.unison",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.hash.unison",
    },
    {
      foreground: "#ed8796",
      token: "variable.other.generic-type.haskell",
    },
    {
      foreground: "#eed49f",
      token: "storage.type.haskell",
    },
    {
      foreground: "#cad3f5",
      token: "support.variable.magic.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.period.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.element.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.parenthesis.begin.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.parenthesis.end.python",
    },
    {
      foreground: "#f5a97f",
      token: "variable.parameter.function.language.special.self.python",
    },
    {
      foreground: "#cad3f5",
      token: "storage.modifier.lifetime.rust",
    },
    {
      foreground: "#eed49f",
      token: "entity.name.type.rust",
    },
    {
      foreground: "#8aadf4",
      token: "support.function.std.rust",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "entity.name.function.rust",
    },
    {
      foreground: "#ee99a0",
      token: "keyword.other.fn.rust",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold italic",
      token: "keyword.control.rust",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.brackets.curly.rust",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.brackets.round.rust",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.brackets.square.rust",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.brackets.attribute.rust",
    },
    {
      foreground: "#f4dbd6",
      token: "entity.name.namespace.rust",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.semi.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.comparison.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.assignment.equal.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.arrow.skinny.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.math.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.key-value.rust",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.misc.rust",
    },
    {
      foreground: "#8bd5ca",
      token: "keyword.operator.namespace.rust",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "bold",
      token: "punctuation.definition.attribute.rust",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "bold",
      token: "keyword.operator.attribute.inner.rust",
    },
    {
      foreground: "#f5a97f",
      token: "constant.numeric.decimal.rust",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.core.rust",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.lifetime.rust",
    },
    {
      foreground: "#cad3f5",
      fontStyle: "italic",
      token: "variable.language.rust",
    },
    {
      foreground: "#cad3f5",
      fontStyle: "italic",
      token: "variable.other.rust",
    },
    {
      foreground: "#cad3f5",
      token: "keyword.operator.misc.rust",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.sigil.rust",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.lua",
    },
    {
      foreground: "#f5a97f",
      fontStyle: "bold",
      token: "constant.numeric.integer.lua",
    },
    {
      foreground: "#b7bdf8",
      fontStyle: "italic",
      token: "variable.other.lua",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition.parameters.end.lua",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition.parameters.begin.lua",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "bold",
      token: "punctuation.terminator.statement.cpp",
    },
    {
      foreground: "#cad3f5",
      token: "variable.other.local.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "punctuation.separator.scope-resolution.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "punctuation.separator.scope-resolution.namespace.alias.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "punctuation.separator.scope-resolution.namespace.using.cpp",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.function.c",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.function.cpp",
    },
    {
      foreground: "#b7bdf8",
      token: "entity.name.function.definition.special.constructor",
    },
    {
      foreground: "#b7bdf8",
      token: "entity.name.function.definition.special.member.destructor",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "italic",
      token: "keyword.control.directive",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "italic",
      token: "keyword.other.using.directive",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "italic",
      token: "punctuation.definition.directive",
    },
    {
      foreground: "#ed8796",
      token: "keyword.control.directive.conditional.ifdef.cpp",
    },
    {
      foreground: "#ed8796",
      token: "keyword.control.directive.else.cpp",
    },
    {
      foreground: "#ed8796",
      token:
        "keyword.control.directive.else.cpp punctuation.definition.directive.cpp",
    },
    {
      foreground: "#ed8796",
      token: "keyword.control.directive.endif.cpp",
    },
    {
      foreground: "#ed8796",
      token:
        "keyword.control.directive.conditional.ifdef.cpp punctuation.definition.directive.cpp",
    },
    {
      foreground: "#ed8796",
      token:
        "keyword.control.directive.endif.cpp punctuation.definition.directive.cpp",
    },
    {
      foreground: "#f4dbd6",
      fontStyle: "italic",
      token: "entity.name.other.preprocessor.macro.predefined.probably",
    },
    {
      foreground: "#f4dbd6",
      fontStyle: "italic",
      token: "entity.name.scope-resolution.cpp",
    },
    {
      foreground: "#8bd5ca",
      token: "storage.modifier.pointer.cpp",
    },
    {
      foreground: "#8bd5ca",
      token: "storage.modifier.reference.cpp",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.for",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.while",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.if",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.else",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.switch",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.case",
    },
    {
      foreground: "#f5bde6",
      token: "keyword.control.return",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.begin.bracket.curly.cpp",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.end.bracket.curly.cpp",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.terminator.statement.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.begin.bracket.curly.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.end.bracket.curly.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.parens.begin.bracket.round.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.parens.end.bracket.round.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.parameters.begin.bracket.round.c",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.parameters.end.bracket.round.c",
    },
    {
      foreground: "#eed49f",
      token: "storage.type.built-in.primitive.cpp",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.label.cs",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.scope-resolution.function.call",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.scope-resolution.function.definition",
    },
    {
      foreground: "#ed8796",
      token: "support.constant.edge",
    },
    {
      foreground: "#8bd5ca",
      token: "constant.other.character-class.regexp",
    },
    {
      foreground: "#eed49f",
      token: "keyword.operator.quantifier.regexp",
    },
    {
      foreground: "#a6da95",
      token: "punctuation.definition.string.begin",
    },
    {
      foreground: "#a6da95",
      token: "punctuation.definition.string.end",
    },
    {
      foreground: "#6e738d",
      token: "comment markup.link",
    },
    {
      foreground: "#f5a97f",
      token: "markup.changed.diff",
    },
    {
      foreground: "#8aadf4",
      token: "meta.diff.header.from-file",
    },
    {
      foreground: "#8aadf4",
      token: "meta.diff.header.to-file",
    },
    {
      foreground: "#8aadf4",
      token: "punctuation.definition.from-file.diff",
    },
    {
      foreground: "#8aadf4",
      token: "punctuation.definition.to-file.diff",
    },
    {
      foreground: "#a6da95",
      token: "markup.inserted.diff",
    },
    {
      foreground: "#8bd5ca",
      token: "markup.deleted.diff",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token: "string.quoted.docstring.multi",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token: "string.quoted.multi",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token:
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token:
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token:
        "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token:
        "source.python string.quoted.multi.python punctuation.definition.string.end.python",
    },
    {
      foreground: "#a6da95",
      fontStyle: "italic",
      token: "markup.fenced_code.block",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.key-value",
    },
    {
      foreground: "#8aadf4",
      token: "keyword.operator.expression.import",
    },
    {
      foreground: "#f5a97f",
      token: "support.constant.math",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.property.math",
    },
    {
      foreground: "#cad3f5",
      token: "variable.other.constant",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.annotation.java",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.object.array.java",
    },
    {
      foreground: "#8bd5ca",
      token: "source.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.begin.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.block.end.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.method-parameters.begin.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.method-parameters.end.java",
    },
    {
      foreground: "#cad3f5",
      token: "meta.method.identifier.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.method.begin.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.method.end.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.terminator.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.class.begin.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.class.end.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.inner-class.begin.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.inner-class.end.java",
    },
    {
      foreground: "#cad3f5",
      token: "meta.method-call.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.class.begin.bracket.curly.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.class.end.bracket.curly.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.method.begin.bracket.curly.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.method.end.bracket.curly.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.period.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.bracket.angle.java",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.annotation.java",
    },
    {
      foreground: "#cad3f5",
      token: "meta.method.body.java",
    },
    {
      foreground: "#8aadf4",
      token: "meta.method.java",
    },
    {
      foreground: "#f5a97f",
      token: "storage.modifier.import.java",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.java",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.generic.java",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.instanceof.java",
    },
    {
      foreground: "#cad3f5",
      token: "meta.definition.variable.name.java",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.logical",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.ternary",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.bitwise",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.channel",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.property-value.scss",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.property-value.css",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.css",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.scss",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.less",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.color.w3c-standard-color-name.css",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.color.w3c-standard-color-name.scss",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.list.comma.css",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.color.w3c-standard-color-name.css",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.vendored.property-name.css",
    },
    {
      foreground: "#f5a97f",
      token: "support.module.node",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.object.module",
    },
    {
      foreground: "#f5a97f",
      token: "support.module.node",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.type.module",
    },
    {
      foreground: "#cad3f5",
      token: "variable.other.readwrite",
    },
    {
      foreground: "#cad3f5",
      token: "meta.object-literal.key",
    },
    {
      foreground: "#cad3f5",
      token: "support.variable.property",
    },
    {
      foreground: "#cad3f5",
      token: "support.variable.object.process",
    },
    {
      foreground: "#cad3f5",
      token: "support.variable.object.node",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.json",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.instanceof",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.new",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.ternary",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.optional",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.keyof",
    },
    {
      foreground: "#8bd5ca",
      token: "support.type.object.console",
    },
    {
      foreground: "#eed49f",
      token: "support.variable.property.process",
    },
    {
      foreground: "#8aadf4",
      token: "entity.name.function",
    },
    {
      foreground: "#8aadf4",
      token: "support.function.console",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.delete",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.object.dom",
    },
    {
      foreground: "#8bd5ca",
      token: "support.variable.dom",
    },
    {
      foreground: "#8bd5ca",
      token: "support.variable.property.dom",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.arithmetic",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.comparison",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.decrement",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.increment",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.relational",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.c",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.increment.c",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.decrement.c",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.bitwise.shift.c",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.increment.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.decrement.cpp",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator.bitwise.shift.cpp",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.delimiter",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.separator.c",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.separator.cpp",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.posix-reserved.c",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.posix-reserved.cpp",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.sizeof.c",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.sizeof.cpp",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.arguments.begin.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.arguments.end.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.arguments.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.list.begin.python",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.list.end.python",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "meta.function-call.generic.python",
    },
    {
      foreground: "#eed49f",
      token: "constant.character.format.placeholder.other.python",
    },
    {
      foreground: "#91d7e3",
      fontStyle: "bold",
      token: "keyword.operator",
    },
    {
      foreground: "#ed8796",
      token: "keyword",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.namespace",
    },
    {
      foreground: "#f5a97f",
      token: "variable.language",
    },
    {
      foreground: "#cad3f5",
      token: "token.variable.parameter.java",
    },
    {
      foreground: "#f5a97f",
      token: "import.storage.java",
    },
    {
      foreground: "#ed8796",
      token: "token.package.keyword",
    },
    {
      foreground: "#cad3f5",
      token: "token.package",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "entity.name.function",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "meta.require",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "support.function.any-method",
    },
    {
      foreground: "#8aadf4",
      fontStyle: "italic",
      token: "variable.function",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.type.namespace",
    },
    {
      foreground: "#f5a97f",
      token: "support.class",
    },
    {
      foreground: "#f5a97f",
      token: " entity.name.type.class",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.class.identifier.namespace.type",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.class",
    },
    {
      foreground: "#f5a97f",
      token: "variable.other.class.js",
    },
    {
      foreground: "#f5a97f",
      token: "variable.other.class.ts",
    },
    {
      foreground: "#8bd5ca",
      token: "variable.other.class.php",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.type",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.control",
    },
    {
      foreground: "#eed49f",
      token: "control.elements",
    },
    {
      foreground: "#eed49f",
      token: " keyword.operator.less",
    },
    {
      foreground: "#8aadf4",
      token: "keyword.other.special-method",
    },
    {
      foreground: "#ed8796",
      token: "storage",
    },
    {
      foreground: "#ed8796",
      token: "token.storage",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.delete",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.in",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.of",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.instanceof",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.new",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.typeof",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.expression.void",
    },
    {
      foreground: "#f5a97f",
      token: "token.storage.type.java",
    },
    {
      foreground: "#91d7e3",
      token: "support.function",
    },
    {
      foreground: "#cad3f5",
      token: "support.type.property-name",
    },
    {
      foreground: "#cad3f5",
      token: "support.constant.property-value",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.font-name",
    },
    {
      foreground: "#cad3f5",
      token: "meta.tag",
    },
    {
      foreground: "#a6da95",
      token: "string",
    },
    {
      foreground: "#f5a97f",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "#91d7e3",
      token: "constant.other.symbol",
    },
    {
      foreground: "#f5a97f",
      token: "constant.numeric",
    },
    {
      foreground: "#eed49f",
      token: "constant",
    },
    {
      foreground: "#eed49f",
      token: "punctuation.definition.constant",
    },
    {
      foreground: "#c6a0f6",
      token: "entity.name.tag",
    },
    {
      foreground: "#8aadf4",
      token: "entity.other.attribute-name",
    },
    {
      fontStyle: "",
      foreground: "#8aadf4",
      token: "entity.other.attribute-name.id",
    },
    {
      fontStyle: "",
      foreground: "#eed49f",
      token: "entity.other.attribute-name.class.css",
    },
    {
      foreground: "#c6a0f6",
      token: "variable.scss",
    },
    {
      foreground: "#ed8796",
      token: "meta.selector",
    },
    {
      foreground: "#8bd5ca",
      token: "markup.heading",
    },
    {
      foreground: "#8aadf4",
      token: "markup.heading punctuation.definition.heading",
    },
    {
      foreground: "#8aadf4",
      token: " entity.name.section",
    },
    {
      foreground: "#8bd5ca",
      token: "keyword.other.unit",
    },
    {
      foreground: "#eed49f",
      token: "markup.bold",
    },
    {
      foreground: "#eed49f",
      token: "todo.bold",
    },
    {
      foreground: "#f5a97f",
      token: "punctuation.definition.bold",
    },
    {
      foreground: "#ed8796",
      token: "markup.italic",
    },
    {
      foreground: "#ed8796",
      token: " punctuation.definition.italic",
    },
    {
      foreground: "#ed8796",
      token: "todo.emphasis",
    },
    {
      foreground: "#ed8796",
      token: "emphasis md",
    },
    {
      foreground: "#8bd5ca",
      token: "entity.name.section.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.heading.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.list.begin.markdown",
    },
    {
      foreground: "#cad3f5",
      token: "markup.heading.setext",
    },
    {
      foreground: "#eed49f",
      token: "punctuation.definition.bold.markdown",
    },
    {
      foreground: "#a6da95",
      token: "markup.inline.raw.markdown",
    },
    {
      foreground: "#a6da95",
      token: "markup.inline.raw.string.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.list.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.string.begin.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.string.end.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "beginning.punctuation.definition.list.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.definition.metadata.markdown",
    },
    {
      foreground: "#ed8796",
      token: "markup.underline.link.markdown",
    },
    {
      foreground: "#ed8796",
      token: "markup.underline.link.image.markdown",
    },
    {
      foreground: "#8aadf4",
      token: "string.other.link.title.markdown",
    },
    {
      foreground: "#8aadf4",
      token: "string.other.link.description.markdown",
    },
    {
      foreground: "#91d7e3",
      token: "string.regexp",
    },
    {
      foreground: "#91d7e3",
      token: "constant.character.escape",
    },
    {
      foreground: "#8bd5ca",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#8bd5ca",
      token: " variable.interpolation",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.section.embedded.begin",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.section.embedded.end",
    },
    {
      foreground: "#6e738d",
      fontStyle: "strikethrough",
      token: "invalid.illegal",
    },
    {
      foreground: "#6e738d",
      fontStyle: "strikethrough",
      token: " invalid.deprecated",
    },
    {
      foreground: "#cad3f5",
      token: "invalid.illegal.bad-ampersand.html",
    },
    {
      foreground: "#ed8796",
      token: "invalid.broken",
    },
    {
      foreground: "#a5adcb",
      token: "invalid.unimplemented",
    },
    {
      foreground: "#ed8796",
      token:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    },
    {
      foreground: "#ed8796",
      token:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    },
    {
      foreground: "#f5a97f",
      token: "support.other.namespace.use.php",
    },
    {
      foreground: "#f5a97f",
      token: "support.other.namespace.use-as.php",
    },
    {
      foreground: "#f5a97f",
      token: "support.other.namespace.php",
    },
    {
      foreground: "#f5a97f",
      token: "entity.other.alias.php",
    },
    {
      foreground: "#f5a97f",
      token: "meta.interface.php",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.error-control.php",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.type.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.array.begin.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.array.end.php",
    },
    {
      foreground: "#ed8796",
      token: "invalid.illegal.non-null-typehinted.php",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.php",
    },
    {
      foreground: "#f5a97f",
      token: "meta.other.type.phpdoc.php",
    },
    {
      foreground: "#f5a97f",
      token: "keyword.other.type.php",
    },
    {
      foreground: "#f5a97f",
      token: "keyword.other.array.phpdoc.php",
    },
    {
      foreground: "#8aadf4",
      token: "meta.function-call.php",
    },
    {
      foreground: "#8aadf4",
      token: "meta.function-call.object.php",
    },
    {
      foreground: "#8aadf4",
      token: "meta.function-call.static.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.parameters.begin.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.parameters.end.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.separator.delimiter.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.scope.begin.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.section.scope.end.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.terminator.expression.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.arguments.begin.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.arguments.end.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.storage-type.begin.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.storage-type.end.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.array.begin.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.array.end.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.begin.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.end.bracket.round.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.begin.bracket.curly.php",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.end.bracket.curly.php",
    },
    {
      foreground: "#cad3f5",
      token:
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
    },
    {
      foreground: "#cad3f5",
      token:
        "punctuation.definition.section.switch-block.start.bracket.curly.php",
    },
    {
      foreground: "#cad3f5",
      token:
        "punctuation.definition.section.switch-block.begin.bracket.curly.php",
    },
    {
      foreground: "#cad3f5",
      token:
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.ext.php",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.std.php",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.core.php",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.parser-token.php",
    },
    {
      foreground: "#8aadf4",
      token: "entity.name.goto-label.php",
    },
    {
      foreground: "#8aadf4",
      token: "support.other.php",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.logical.php",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.bitwise.php",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.arithmetic.php",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.regexp.php",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.comparison.php",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.heredoc.php",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.nowdoc.php",
    },
    {
      foreground: "#8aadf4",
      token: "meta.function.decorator.python",
    },
    {
      foreground: "#91d7e3",
      token: "support.token.decorator.python",
    },
    {
      foreground: "#91d7e3",
      token: "meta.function.decorator.identifier.python",
    },
    {
      foreground: "#cad3f5",
      token: "function.parameter",
    },
    {
      foreground: "#cad3f5",
      token: "function.brace",
    },
    {
      foreground: "#cad3f5",
      token: "function.parameter.ruby",
    },
    {
      foreground: "#cad3f5",
      token: "function.parameter.cs",
    },
    {
      foreground: "#91d7e3",
      token: "constant.language.symbol.ruby",
    },
    {
      foreground: "#91d7e3",
      token: "rgb-value",
    },
    {
      foreground: "#eed49f",
      token: "inline-color-decoration rgb-value",
    },
    {
      foreground: "#eed49f",
      token: "less rgb-value",
    },
    {
      foreground: "#8bd5ca",
      token: "selector.sass",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.primitive.ts",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.builtin.ts",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.primitive.tsx",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.builtin.tsx",
    },
    {
      foreground: "#cad3f5",
      token: "block.scope.end",
    },
    {
      foreground: "#cad3f5",
      token: "block.scope.begin",
    },
    {
      foreground: "#f5a97f",
      token: "storage.type.cs",
    },
    {
      foreground: "#cad3f5",
      token: "entity.name.variable.local.cs",
    },
    {
      foreground: "#8aadf4",
      token: "token.info-token",
    },
    {
      foreground: "#eed49f",
      token: "token.warn-token",
    },
    {
      foreground: "#ed8796",
      token: "token.error-token",
    },
    {
      foreground: "#ed8796",
      token: "token.debug-token",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.definition.template-expression.begin",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.definition.template-expression.end",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "#cad3f5",
      token: "meta.template.expression",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.module",
    },
    {
      foreground: "#8aadf4",
      token: "support.type.type.flowtype",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.primitive",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.property.object",
    },
    {
      foreground: "#8bd5ca",
      token: "variable.parameter.function.js",
    },
    {
      foreground: "#a6da95",
      token: "keyword.other.template.begin",
    },
    {
      foreground: "#a6da95",
      token: "keyword.other.template.end",
    },
    {
      foreground: "#a6da95",
      token: "keyword.other.substitution.begin",
    },
    {
      foreground: "#a6da95",
      token: "keyword.other.substitution.end",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.arithmetic.go",
    },
    {
      foreground: "#ed8796",
      token: "keyword.operator.address.go",
    },
    {
      foreground: "#f5a97f",
      token: "entity.name.package.go",
    },
    {
      foreground: "#8aadf4",
      token: "keyword.import.go",
    },
    {
      foreground: "#91d7e3",
      token: "support.type.prelude.elm",
    },
    {
      foreground: "#eed49f",
      token: "support.constant.elm",
    },
    {
      foreground: "#ed8796",
      token: "punctuation.quasi.element",
    },
    {
      foreground: "#8bd5ca",
      token: "constant.character.entity",
    },
    {
      foreground: "#91d7e3",
      token: "entity.other.attribute-name.pseudo-element",
    },
    {
      foreground: "#91d7e3",
      token: "entity.other.attribute-name.pseudo-class",
    },
    {
      foreground: "#f5a97f",
      token: "entity.global.clojure",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.symbol.clojure",
    },
    {
      foreground: "#91d7e3",
      token: "constant.keyword.clojure",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.arguments.coffee",
    },
    {
      foreground: "#8bd5ca",
      token: "variable.parameter.function.coffee",
    },
    {
      foreground: "#a6da95",
      token: "source.ini",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition.variable.shell",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.logical.shell",
    },
    {
      foreground: "#cad3f5",
      token: "meta.scope.case-clause-body.shell",
    },
    {
      foreground: "#8aadf4",
      token: "meta.scope.group.shell",
    },
    {
      foreground: "#eed49f",
      token: "string.interpolated.dollar.shell",
    },
    {
      foreground: "#b7bdf8",
      token: "string.quoted.single.shell",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.operator.pipe.shell",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition.group.shell",
    },
    {
      foreground: "#c6a0f6",
      token: "keyword.control.shell",
    },
    {
      foreground: "#8bd5ca",
      token: "keyword.operator.list.shell",
    },
    {
      foreground: "#8087a2",
      token: "punctuation.definition.logical-expression.shell",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.scope.prerequisites.makefile",
    },
    {
      foreground: "#f5a97f",
      token: "source.makefile",
    },
    {
      foreground: "#f5a97f",
      token: "storage.modifier.import.groovy",
    },
    {
      foreground: "#8aadf4",
      token: "meta.method.groovy",
    },
    {
      foreground: "#8bd5ca",
      token: "meta.definition.variable.name.groovy",
    },
    {
      foreground: "#a6da95",
      token: "meta.definition.class.inherited.classes.groovy",
    },
    {
      foreground: "#f5a97f",
      token: "support.variable.semantic.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.texture.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.sampler.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.object.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.object.rw.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.fx.hlsl",
    },
    {
      foreground: "#ed8796",
      token: "support.type.object.hlsl",
    },
    {
      foreground: "#8bd5ca",
      token: "text.variable",
    },
    {
      foreground: "#8bd5ca",
      token: "text.bracketed",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.swift",
    },
    {
      foreground: "#f5a97f",
      token: "support.type.vb.asp",
    },
    {
      foreground: "#8aadf4",
      token: "entity.name.function.xi",
    },
    {
      foreground: "#91d7e3",
      token: "entity.name.class.xi",
    },
    {
      foreground: "#8bd5ca",
      token: "constant.character.character-class.regexp.xi",
    },
    {
      foreground: "#ed8796",
      token: "constant.regexp.xi",
    },
    {
      foreground: "#91d7e3",
      token: "keyword.control.xi",
    },
    {
      foreground: "#cad3f5",
      token: "invalid.xi",
    },
    {
      foreground: "#a6da95",
      token: "beginning.punctuation.definition.quote.markdown.xi",
    },
    {
      foreground: "#6e738d",
      token: "beginning.punctuation.definition.list.markdown.xi",
    },
    {
      foreground: "#8aadf4",
      token: "constant.character.xi",
    },
    {
      foreground: "#8aadf4",
      token: "accent.xi",
    },
    {
      foreground: "#eed49f",
      token: "wikiword.xi",
    },
    {
      foreground: "#91d7e3",
      token: "constant.other.color.rgb-value.xi",
    },
    {
      foreground: "#6e738d",
      token: "punctuation.definition.tag.xi",
    },
    {
      foreground: "#8bd5ca",
      token: "entity.name.label.cs",
    },
    {
      foreground: "#8bd5ca",
      token: "markup.heading.setext.1.markdown",
    },
    {
      foreground: "#8bd5ca",
      token: "markup.heading.setext.2.markdown",
    },
    {
      foreground: "#cad3f5",
      token: " meta.brace.square",
    },
    {
      fontStyle: "italic",
      foreground: "#6e738d",
      token: "comment",
    },
    {
      fontStyle: "italic",
      foreground: "#6e738d",
      token: " punctuation.definition.comment",
    },
    {
      foreground: "#6e738d",
      token: "markup.quote.markdown",
    },
    {
      foreground: "#cad3f5",
      token: "punctuation.definition.block.sequence.item.yaml",
    },
    {
      foreground: "#91d7e3",
      token: "constant.language.symbol.elixir",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.js",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.ts",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.jsx",
    },
    {
      fontStyle: "italic",
      token: "entity.other.attribute-name.tsx",
    },
    {
      fontStyle: "italic",
      token: "variable.parameter",
    },
    {
      fontStyle: "italic",
      token: "variable.language.super",
    },
    {
      fontStyle: "italic",
      token: "comment.line.double-slash",
    },
    {
      fontStyle: "italic",
      token: "comment.block.documentation",
    },
    {
      foreground: "#8bd5ca",
      fontStyle: "italic",
      token: "keyword.control.import.python",
    },
    {
      foreground: "#c6a0f6",
      fontStyle: "bold",
      token: "keyword.control.flow.python",
    },
    {
      foreground: "#ee99a0",
      fontStyle: "italic",
      token: "storage.type.function.python",
    },
    {
      fontStyle: "italic",
      token: "markup.italic.markdown",
    },
    {
      foreground: "#eed49f",
      fontStyle: "underline",
      token: "invalid.deprecated.line-too-long.git-commit",
    },
  ],
  encodedTokensColors: [],
};

export type Theme =
  | "github"
  | "dracula"
  | "solarized"
  | "dark-plus"
  | "onedark"
  | "tokyo-night"
  | "catppuccin";

export const themes = [
  { name: "github", value: githubDarkTheme },
  { name: "onedark", value: onedarkTheme },
  { name: "tokyo-night", value: tokyoNightTheme },
  { name: "dracula", value: draculaTheme },
  { name: "catppuccin", value: catppuccinTheme },
  { name: "solarized", value: solarizedDarkTheme },
  { name: "dark-plus", value: darkPlusTheme },
];

export const registerThemes = (monaco: Monaco) => {
  themes.forEach((theme) => {
    monaco.editor.defineTheme(theme.name, theme.value);
  });
};
