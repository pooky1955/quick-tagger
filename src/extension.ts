import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider("tree", new TreeDataProvider());
}

class TreeDataProvider implements vscode.TreeDataProvider<TreeItem> {
  data: TreeItem[];
  constructor() {
    this.data = [new TreeItem("cars")];
  }
  getTreeItem(element: TreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  getChildren(element?: TreeItem | undefined): vscode.ProviderResult<TreeItem[]> {
    if (element === undefined) return this.data;
    return element.children;
  }
}

class TreeItem extends vscode.TreeItem {
  children: TreeItem[] | undefined;
  constructor(label: string, children?: TreeItem[]) {
    super(label, children === undefined ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Expanded);
    this.children = children;
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
