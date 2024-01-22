import { mergeGraphs, stringToColor } from "./utils";
import Node from "./Node";

export default class Hyperedge {
    constructor(symbols = [], hypergraph) {
        this.symbols = symbols;
        this.hypergraph = hypergraph;
        this.nodes = symbols.map(this.createNode.bind(this));
    }

    createNode(symbol, index) {
        return new Node(symbol, index, this);
    }

    get id() {
        return this.nodes.map((node) => node.id).join("-");
    }

    get data() {
        return mergeGraphs(this.nodes.map((node) => node.data));
    }

    nodeId(index) {
        return this.symbols.slice(0, index + 1).join("-");
    }

    get color() {
        return stringToColor(this.symbols[0]);
    }

    prevNode(index) {
        if (index === 0) {
            return null;
        }

        return this.createNode(this.symbols[index - 1], index - 1);
    }

    nextNode() {
        if (index === this.length - 1) {
            return null;
        }

        return this.createNode(this.symbols[index + 1], index + 1);
    }
}
