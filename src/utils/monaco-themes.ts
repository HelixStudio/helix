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

export const helixDarkTheme = () => {
  const getCssVar = (cssVar: string): string => {
    return colors.zinc[800];
    // if (!isClient()) return colors.zinc[800];
    // return getComputedStyle(document.body).getPropertyValue(cssVar);
  };

  return {
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
      "editor.background": getCssVar("--secondary-900"), //bg here colors.zinc[800]
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
};

export type Theme = "github" | "dracula" | "solarized" | "dark-plus";

export const themes = [
  { name: "github", value: githubDarkTheme },
  { name: "dracula", value: draculaTheme },
  { name: "solarized", value: solarizedDarkTheme },
  { name: "dark-plus", value: darkPlusTheme },
  //   { name: "helix", value: helixDarkTheme },
];

export const registerThemes = (monaco: Monaco) => {
  themes.forEach((theme) => {
    monaco.editor.defineTheme(theme.name, theme.value);
  });
};
