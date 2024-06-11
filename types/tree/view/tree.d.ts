import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VirtualList from '../../virtual-list';
import type {
    DataNode,
    Key,
    KeyEntities,
    NodeElement,
    NodeInstance,
    TreeProps,
    TreeState,
} from '../types';
export declare const treeNodeProps: string[];
/**
 * Tree
 */
export declare class Tree extends Component<TreeProps, TreeState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        pure: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        dataSource: PropTypes.Requireable<any[]>;
        showLine: PropTypes.Requireable<boolean>;
        selectable: PropTypes.Requireable<boolean>;
        selectedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        defaultSelectedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        multiple: PropTypes.Requireable<boolean>;
        checkable: PropTypes.Requireable<boolean>;
        checkedKeys: PropTypes.Requireable<object>;
        defaultCheckedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        checkStrictly: PropTypes.Requireable<boolean>;
        checkedStrategy: PropTypes.Requireable<string>;
        onCheck: PropTypes.Requireable<(...args: any[]) => any>;
        expandedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        defaultExpandedKeys: PropTypes.Requireable<(string | null | undefined)[]>;
        defaultExpandAll: PropTypes.Requireable<boolean>;
        autoExpandParent: PropTypes.Requireable<boolean>;
        onExpand: PropTypes.Requireable<(...args: any[]) => any>;
        editable: PropTypes.Requireable<boolean>;
        onEditFinish: PropTypes.Requireable<(...args: any[]) => any>;
        draggable: PropTypes.Requireable<boolean>;
        onDragStart: PropTypes.Requireable<(...args: any[]) => any>;
        onDragEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onDragOver: PropTypes.Requireable<(...args: any[]) => any>;
        onDragLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onDragEnd: PropTypes.Requireable<(...args: any[]) => any>;
        onDrop: PropTypes.Requireable<(...args: any[]) => any>;
        canDrop: PropTypes.Requireable<(...args: any[]) => any>;
        loadData: PropTypes.Requireable<(...args: any[]) => any>;
        filterTreeNode: PropTypes.Requireable<(...args: any[]) => any>;
        onRightClick: PropTypes.Requireable<(...args: any[]) => any>;
        isLabelBlock: PropTypes.Requireable<boolean>;
        isNodeBlock: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        animation: PropTypes.Requireable<boolean>;
        focusedKey: PropTypes.Requireable<string>;
        renderChildNodes: PropTypes.Requireable<(...args: any[]) => any>;
        focusable: PropTypes.Requireable<boolean>;
        autoFocus: PropTypes.Requireable<boolean>;
        onItemFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onItemKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        labelRender: PropTypes.Requireable<(...args: any[]) => any>;
        useVirtual: PropTypes.Requireable<boolean>;
        immutable: PropTypes.Requireable<boolean>;
        virtualListProps: PropTypes.Requireable<object>;
        clickToCheck: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        pure: boolean;
        showLine: boolean;
        selectable: boolean;
        editable: boolean;
        multiple: boolean;
        checkable: boolean;
        checkStrictly: boolean;
        checkedStrategy: string;
        draggable: boolean;
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        defaultExpandedKeys: never[];
        defaultCheckedKeys: never[];
        defaultSelectedKeys: never[];
        onExpand: () => void;
        onCheck: () => void;
        onSelect: () => void;
        onDragStart: () => void;
        onDragEnter: () => void;
        onDragOver: () => void;
        onDragLeave: () => void;
        onDragEnd: () => void;
        onDrop: () => void;
        canDrop: () => boolean;
        onEditFinish: () => void;
        onRightClick: () => void;
        isLabelBlock: boolean;
        isNodeBlock: boolean;
        animation: boolean;
        focusable: boolean;
        autoFocus: boolean;
        onItemFocus: () => void;
        onItemKeyDown: () => void;
        useVirtual: boolean;
        immutable: boolean;
        virtualListProps: {};
        clickToCheck: boolean;
    };
    tabbableKey: string | null;
    dropPosition: number;
    dragNode: NodeInstance | null;
    dragNodesKeys: Key[];
    virtualListRef: React.RefObject<VirtualList>;
    constructor(props: TreeProps);
    static getDerivedStateFromProps(
        props: TreeProps,
        state: TreeState
    ):
        | {
              willReceiveProps: boolean;
              _k2n: KeyEntities;
              _p2n: KeyEntities;
              _keyList: string[];
          }
        | {
              dataSource: DataNode[];
              _k2n: KeyEntities;
              _p2n: KeyEntities;
              _keyList?: string[] | undefined;
              willReceiveProps?: boolean | undefined;
              expandedKeys?: string[] | undefined;
              selectedKeys?: string[] | undefined;
              checkedKeys?: string[] | undefined;
              indeterminateKeys?: string[] | undefined;
              focusedKey?: string | null | undefined;
              dragOverNodeKey?: string | null | undefined;
          };
    setFocusKey(): void;
    getAvailableKey(pos: string, prev: boolean): string | null;
    getFirstAvaliablelChildKey(parentPos: string): string | null;
    isAvailablePos(refPos: string, targetPos: string): boolean;
    isSibling(currentPos: string, targetPos: string): boolean;
    getParentKey(pos: string): string;
    processKey(keys: string[], key: string, add: boolean): string[];
    handleItemKeyDown(key: string, item: NodeInstance, e: React.KeyboardEvent): void;
    handleBlur(e: React.FocusEvent<HTMLUListElement>): void;
    handleExpand(
        expand: boolean,
        key: string,
        node: NodeInstance | DataNode
    ): Promise<void> | undefined;
    handleSelect(
        select: boolean,
        key: string,
        node: NodeInstance | DataNode,
        e: React.KeyboardEvent | React.MouseEvent
    ): void;
    handleCheck(check: boolean, key: string, node: NodeInstance | DataNode): void;
    getNodeProps(key: Key): {
        prefix: string | undefined;
        root: Tree;
        eventKey: string;
        pos: string | undefined;
        isLeaf: boolean | undefined;
        level: number | undefined;
        expanded: boolean;
        selected: boolean;
        checked: boolean;
        indeterminate: boolean;
        dragOver: boolean;
        dragOverGapTop: boolean;
        dragOverGapBottom: boolean;
    };
    getNodes(keys: Key[]): (NodeElement | undefined)[];
    handleDragStart(e: React.MouseEvent, node: NodeInstance): void;
    handleDragEnter(e: React.MouseEvent, node: NodeInstance): void;
    getDropPosition(e: React.MouseEvent, node: NodeInstance): 0 | 1 | -1;
    handleDragOver(e: React.MouseEvent, node: NodeInstance): void;
    handleDragLeave(e: React.MouseEvent, node: NodeInstance): void;
    handleDragEnd(e: React.MouseEvent, node: NodeInstance): void;
    handleDrop(e: React.MouseEvent, node: NodeInstance): void;
    canDrop(node: NodeInstance): boolean;
    generateDropParams(node: NodeInstance): {
        dragNode: import('./tree-node').TreeNode;
        dragNodesKeys: string[];
        node: import('./tree-node').TreeNode;
        dropPosition: number;
    };
    filterTreeNode(node: NodeInstance): any;
    shouldNodeShow(nodeData: DataNode): boolean;
    renderTreeNode(props: Record<string, unknown>, childNodes?: React.ReactNode): NodeElement;
    renderNodeList(dataSource: DataNode[]): (NodeElement | undefined)[];
    renderWithCustomChildNodes(dataSource: DataNode[]): NodeElement[];
    renderByDataSource(dataSource: DataNode[]): (NodeElement | NodeElement[])[];
    renderByChildren():
        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[]
        | null
        | undefined;
    render(): React.JSX.Element;
}
declare const _default: typeof Tree;
export default _default;
